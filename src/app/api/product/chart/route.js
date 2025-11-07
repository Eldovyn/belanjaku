import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/lib/models/user";
import Chart from "@/app/lib/models/chart";
import Product from "@/app/lib/models/product";
import { verifyToken } from "@/app/lib/jwt";

export async function POST(req) {
    try {
        await connectDB();

        const authHeader = req.headers.get("authorization") || req.headers.get("Authorization") || "";

        const match = authHeader.match(/^Bearer\s+(.+)$/i);
        if (!match) {
            return NextResponse.json({ message: "invalid token" }, { status: 401 });
        }
        const token = match[1];

        const payload = await verifyToken(token)
        if (!payload) return NextResponse.json({ message: "invalid token" }, { status: 401 });

        const user = await User.findById(payload.id);
        if (!user) {
            return NextResponse.json({ message: "invalid token" }, { status: 401 });
        }

        let { productId, amount } = await req.json();

        if (!amount) {
            amount = 1;
        }

        const product = await Product.findById(productId);
        if (!product) {
            return NextResponse.json({ message: "product not found" }, { status: 404 });
        }

        let chartResult = await Chart.findOne({ product: product._id, user: user._id });

        if (chartResult) {
            if (chartResult.amount + amount > product.stock) {
                return NextResponse.json({ message: "out of stock" }, { status: 400 });
            }
            chartResult.amount = amount;
            await chartResult.save();
        } else {
            chartResult = await Chart.create({
                amount: amount,
                product: product._id,
                user: user._id
            });
        }

        return NextResponse.json({
            message: "successfully update chart",
            data: chartResult,
        });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

export async function GET(req) {
    try {
        await connectDB();

        const authHeader = req.headers.get("authorization") || req.headers.get("Authorization") || "";

        const match = authHeader.match(/^Bearer\s+(.+)$/i);
        if (!match) {
            return NextResponse.json({ message: "invalid token" }, { status: 401 });
        }
        const token = match[1];

        const payload = await verifyToken(token)
        if (!payload) return NextResponse.json({ message: "invalid token" }, { status: 401 });

        const user = await User.findById(payload.id);
        if (!user) {
            return NextResponse.json({ message: "invalid token" }, { status: 401 });
        }

        const chartResult = await Chart.find({ user: user._id });

        return NextResponse.json({
            message: "successfully get chart",
            data: chartResult,
        });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/app/lib/models/user";
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
        if (!user.role === 'admin') {
            return NextResponse.json({ message: "unauthorize" }, { status: 401 });
        }

        const { title, description, imageUrl, price, productType } = await req.json();

        const productResult = await Product.create({
            title, description, imageUrl, price, productType
        });

        return NextResponse.json({
            message: "successfully create product",
            data: {
                id: productResult._id,
                title: productResult.title,
                description: productResult.description,
                imageUrl: productResult.imageUrl,
                price: productResult.price,
                createdAt: productResult.createdAt,
            },
        });
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

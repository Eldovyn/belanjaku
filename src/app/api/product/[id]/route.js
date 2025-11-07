import { NextResponse } from "next/server"
import { connectDB } from "@/app/lib/mongodb"
import Product from "@/app/lib/models/product"
import User from "@/app/lib/models/user"
import { verifyToken } from "@/app/lib/jwt"

export async function GET(req, { params }) {
    try {
        await connectDB()

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

        const { id } = await params

        const product = await Product.findById(id)
        if (!product) {
            return NextResponse.json({
                message: "Product not found",
            }, { status: 404 })
        }

        return NextResponse.json({
            message: "Success get product",
            data: product
        }, { status: 200 })
    } catch (error) {
        return NextResponse.json({
            message: error.message || "Failed get user"
        }, { status: 500 })
    }
}

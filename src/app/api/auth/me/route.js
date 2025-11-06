import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/app/lib/models/user";
import { verifyToken } from "@/app/lib/jwt";

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

        return NextResponse.json({
            message: "successfully get current user",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}

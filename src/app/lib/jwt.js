import { SignJWT, jwtVerify } from "jose";

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function generateToken(payload) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256", typ: "JWT" })
        .sign(JWT_SECRET);
}

export async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        return payload;
    } catch {
        return null;
    }
}

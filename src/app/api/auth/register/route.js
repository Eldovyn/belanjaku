import { connectDB } from "@/lib/mongodb";
import User from "@/app/lib/models/user";
import { NextResponse } from "next/server";
import { genSalt, hash } from "bcryptjs";
import validator from "validator";

export const POST = async (request) => {
    try {
        await connectDB();

        const { username, email, password } = await request.json();

        const errors = {};

        // Email
        if (!email || typeof email !== "string" || email.trim() === "") {
            errors.email = ["IS_REQUIRED"];
        } else if (!validator.isEmail(email)) {
            errors.email = ["IS_INVALID"];
        }

        // Username
        if (
            username === null ||
            username === undefined ||
            (typeof username === "string" && username.trim() === "")
        ) {
            errors.username = ["IS_REQUIRED"];
        } else {
            if (typeof username !== "string") {
                errors.username = errors.username || [];
                errors.username.push("MUST_TEXT");
            }
            if (typeof username === "string") {
                if (username.length < 5) {
                    errors.username = errors.username || [];
                    errors.username.push("TOO_SHORT");
                }
                if (username.length > 15) {
                    errors.username = errors.username || [];
                    errors.username.push("TOO_LONG");
                }
            }
        }

        // Password
        if (typeof password !== "string") {
            errors.passwordSecurity = ["MUST_TEXT"];
        } else {
            if (password.length > 64) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("TOO_LONG");
            }
            if (password.length < 8) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("TOO_SHORT");
            }
            if (!/[A-Z]/.test(password)) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("NO_CAPITAL");
            }
            if (!/[a-z]/.test(password)) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("NO_LOWERCASE");
            }
            if (!/[0-9]/.test(password)) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("NO_NUMBER");
            }
            if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("NO_SYMBOL");
            }
            if (!/[A-Za-z]/.test(password)) {
                errors.passwordSecurity = errors.passwordSecurity || [];
                errors.passwordSecurity.push("NO_LETTER");
            }
        }

        if (Object.keys(errors).length > 0) {
            return NextResponse.json(
                { errors, message: "validations error" },
                { status: 400 }
            );
        }

        const checkEmail = await User.findOne({ email });
        if (checkEmail) {
            return NextResponse.json(
                { message: "email already exists" },
                { status: 401 }
            );
        }

        const salt = await genSalt(10);
        const encryptPassword = await hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: encryptPassword,
            role: "user",
        });

        return NextResponse.json({
            message: "successfully registered",
            data: {
                id: user._id,
                username,
                email,
                role: user.role,
                createdAt: user.createdAt,
            },
        });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
};

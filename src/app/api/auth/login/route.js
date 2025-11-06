import { compare } from "bcryptjs";
import User from "@/app/lib/models/user";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { generateToken } from "@/app/lib/jwt";
import validator from "validator";

export const POST = async (request) => {
  try {
    await connectDB();

    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json({ message: "invalid content type" }, { status: 415 });
    }

    const { email, password } = await request.json();

    const errors = {};

    if (!email || typeof email !== "string" || email.trim() === "") {
      errors.email = ["IS_REQUIRED"];
    } else if (!validator.isEmail(email)) {
      errors.email = ["IS_INVALID"];
    }

    if (!password || typeof password !== "string" || password.trim() === "") {
      errors.password = ["IS_REQUIRED"];
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors, message: "validations error" }, { status: 400 });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "invalid email or password" }, { status: 401 });
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) {
      return NextResponse.json({ message: "invalid email or password" }, { status: 401 });
    }

    const token = await generateToken({ id: user._id.toString() });

    return NextResponse.json(
      {
        message: "successfully login",
        data: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          token: token,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

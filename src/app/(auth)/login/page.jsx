'use client'
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner"
import { useFormik } from "formik";
import Cookies from "js-cookie";

const LoginPage = () => {
    const { push } = useRouter();
    const mutation = useMutation({
        mutationFn: async (data) => {
            return await axios.post("/api/auth/login", data);
        },
        onError: (error) => {
            console.error("login error:", error.response?.data);
            toast.error(error.response?.data?.message || "login failed");
        },
        onSuccess: (response) => {
            console.log("login success:", response.data);
            const res = response.data;
            toast.success(res.message || "login successful");
            Cookies.set("accessToken", res.data.token);
            push("/");
        },
    });

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values, { setSubmitting }) => {
            mutation.mutate({
                username: values.username,
                email: values.email,
                password: values.password,
                confirm_password: values.confirm_password,
                provider: values.provider,
            });
            setSubmitting(false);
        },
    });

    return (
        <>
            <div className="h-screen bg-[#EEF1F7] flex justify-center items-center">
                <form onSubmit={formik.handleSubmit} className="bg-white/30 w-[30%] p-10 flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <Separator />
                    <div className="input-email flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your email" onChange={formik.handleChange} value={formik.values.email} name={'email'} />
                    </div>
                    <div className="input-password flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" onChange={formik.handleChange} value={formik.values.password} name={'password'} />
                    </div>
                    <Button type="submit">Login</Button>
                    <p className="text-right text-[12px] -mt-3 cursor-pointer">{`Don't have an account? `}<a href="/register" className="text-blue-500 hover:underline">Register</a></p>
                </form>
            </div>
        </>
    )
}

export default LoginPage
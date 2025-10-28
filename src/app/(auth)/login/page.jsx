import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const LoginPage = () => {
    return (
        <>
            <div className="h-screen bg-[#EEF1F7] flex justify-center items-center">
                <form action="" className="bg-white/30 w-[30%] p-10 flex flex-col gap-5">
                    <h1 className="text-2xl font-bold text-center">Login your account</h1>
                    <Separator />
                    <div className="input-email flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="input-password flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <Button type="submit">Login</Button>
                    <p className="text-right text-[12px] -mt-3 cursor-pointer">{`Don't have an account? `}<a href="/register" className="text-blue-500 hover:underline">Register</a></p>
                </form>
            </div>
        </>
    )
}

export default LoginPage
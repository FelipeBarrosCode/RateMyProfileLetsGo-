"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import FooterToUseOnIntro from "../ui/Footer";
import loadingIMAGE from "../Assets/loading.gif"
import Image from "next/image"
import TransitionLink from "../ui/TransitionLink";
import { animatePageOut } from "@/utils/animate";
import { Button } from "@/components/ui/button";





export default function LoginPage() {


    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const loadImg: string = loadingIMAGE
    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");
            animatePageOut("/profile", router)
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-x-hidden gap">
            
            <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-x-hidden gap">
            <h1>{loading ? <Image width={100} height={100} src={loadImg} alt={"not working"} /> : "Login"}</h1>
            <hr />

            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />
            <div className="flex flex-col gap-6">
            <Button className=" hover:bg-white hover:text-black" onClick={onLogin}>
                Login
            </Button>
            <TransitionLink href={"/signp"} label={"Got To Signup Page"} />
            </div>
            </div>
            <FooterToUseOnIntro />
        </div>
    )

}
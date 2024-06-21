"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import { animatePageOut } from "@/utils/animate";
import { Button } from "@/components/ui/button";
import FooterToUseOnIntro from "../ui/Footer";
import HeaserToUseOnIntro from "../ui/Header";
import loadingIMAGE from "../Assets/loading.gif"
import Image from "next/image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<boolean>(false)

    async function onSignup(){
        try {
           
            const response = await axios.post("http://localhost:3000/api/users/signup", user);
            
            animatePageOut("/verifyemail",router)
            
        } catch (error:any) {
            setError(true)
            setTimeout(() => {
                setError(false);
            }, 3000);
            
            toast.error(error.message);
           
        }finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <>

        {error && (
             
            <Alert variant="destructive" className="animate-bounce fixed bottom-[85%]" >
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>ERROR PLEASE REVIEW FORM</AlertTitle>
                <AlertDescription>
                    {error}
                </AlertDescription>
            </Alert>
            
        )}

        <div className="overflow-x-hidden">
            <HeaserToUseOnIntro/>
        <div className="flex flex-col items-center justify-center min-h-screen py-2 overflow-x-hidden gap-7" >
        
        
        <h1>{loading ? <Image width={100} height={100} src={loadingIMAGE} alt={"not working"} /> : "Sign Up"}</h1>
        <hr />
        <div className=" border  rounded-lg w-1/3 h-32 flex flex-row justify-center items-center">
        <div className=" flex flex-row items-baseline gap-7">
        <label htmlFor="username">username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        </div>
        </div>

        <div className=" border  rounded-lg w-1/3 h-32 flex flex-row justify-center items-center">
        <div className=" flex flex-row items-baseline gap-7">
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
         </div>
         </div>

         <div className=" border  rounded-lg w-1/3 h-32 flex flex-row justify-center items-center">
        <div className=" flex flex-row items-baseline gap-7">
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
        </div>
        </div>
            
            
            <Button className=" hover:bg-white hover:text-black" onClick={onSignup}>
                SignUp
            </Button>
            
           
        </div>
        <FooterToUseOnIntro/>
        </div>
        </>
    )

}
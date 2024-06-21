"use client";

import TransitionLink from "@/app/ui/TransitionLink";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";


export default function VerifyEmailPage({params}: any) {

    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    const [code , setCode] = useState({
        Usercode:"",
        typeOfVerification:params.specificFieldToChange

    })

    async function verifyUserEmail(){
        try {
            await axios.patch(('/api/users/verifyemail/'+ params.specificFieldToChange), {...code})
            setVerified(true);
        } catch (error:any) {
            setError(true);
            
            
        }

    }


  

   

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Verify {params.specificFieldToChange}</h1>
            {/* <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2> */}
            
            <label htmlFor="profileName">Profile Name</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="profileName"
                type="text"
                value={code.Usercode}
                onChange={(e) => setCode({ ...code, Usercode: e.target.value })}
                placeholder="Code to Enter"
                required
            />
            <button
            onClick={verifyUserEmail}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Verify Email</button>



            {verified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <TransitionLink href={"/login"} label={"Go to Login"} />
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                    
                </div>
            )}
        </div>
    )

}
"use client";
import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import SearchToUse from "../Assets/Search";
import EngineToUse from "../Assets/Engine";
import ProfileToUse from "../Assets/Profile";
import CentralFunctionalComponent from "./CentralComponents";
import FooterToUseOnIntro from "../ui/Footer";
import HeaderToUseOnAccount from "../ui/HeaderInAccount";
import { animatePageIn, animatePageOut } from "@/utils/animate";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    async function logout(){
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            animatePageOut("/login",router)
            
        } catch (error:any) {
            
            toast.error(error.message)
        }
    }
    useEffect(() => {
        getUserDetails();
        
    }, []);

    async function getUserDetails(){
        animatePageIn()
        const res = await axios.get('/api/users/me')
        
        setData(res.data.data._id)
       
    }

    return (

        
        <>

            <div className="flex flex-col  overflow-x-hidden">
            <HeaderToUseOnAccount/>
            <div className="flex flex-col justify-center items-center h-screen  ">

                <CentralFunctionalComponent/>

                
                
            </div>

            <FooterToUseOnIntro/>
           
            </div>

        



        </>
        
       
    )
}
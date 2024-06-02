"use client";
import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {toast} from "react-hot-toast";
import {useRouter} from "next/navigation";
import SearchToUse from "../Assets/Search";
import EngineToUse from "../Assets/Engine";
import ProfileToUse from "../Assets/Profile";
import { animatePageOut } from "@/utils/animate";


export default function CentralFunctionalComponent() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    useEffect(() => {
        getUserDetails(); // Call getUserDetails when the component mounts
    }, []);

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data._id)
    }

    function redirectPost(){
        animatePageOut("/profilePost",router)

    }
    function redirectSearch(){
        animatePageOut("/SearchPage",router)

    }
    function redirectConf(){
        animatePageOut(("/profile/" + data) ,router)

    }

    return (

        
        <>

        <div className="flex flex-row justify-center items-center w-11/12 h-fit-content flex-wrap gap-3 max-[1037px]:w-6/12 ">

            

            <div onClick={redirectPost} className="flex justify-center hover:cursor-pointer items-center border-4  border-black hover:border-white rounded-lg animate-slide-in-bottom delay-100"><ProfileToUse/></div>
            
            <div onClick={redirectSearch} className="flex justify-center hover:cursor-pointer items-center border-4 border-black hover:border-white rounded-lg animate-slide-in-bottom delay-200"> <SearchToUse/></div>
            <div onClick={redirectConf} className="flex justify-center items-center border-4 hover:cursor-pointer border-black hover:border-white rounded-lg animate-slide-in-bottom delay-300"><EngineToUse/></div>

        </div>  
        

        
        
        
        
       



        </>
        
       
    )
}
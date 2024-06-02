"use client"
/* eslint-disable react/jsx-no-undef */
import axios from "axios"
import { useEffect, useState } from "react"
import loadingIMAGE from "../../Assets/loading.gif"
import Image from "next/image"
import AccordionToUpdate from "./accordionToUpdateInfo"
import HeaderToUseOnAccount from "@/app/ui/HeaderInAccount"
import FooterToUseOnIntro from "@/app/ui/Footer"
import { useRouter } from "next/navigation"
import { animatePageIn } from "@/utils/animate"

export default function UserProfile({params}: any) {
    
    const [userData,setUserData] = useState({})
    const [load,setLoad] = useState(false)
    const router = useRouter()

    async function getAccountInfo(){
        try{
            animatePageIn()
            const content = await axios.patch("/api/users/getAccountInfo",{_id:params.id})
            
            setUserData(content.data.message)
            setLoad(content)
            console.log(content.data.message.username)
           

        }catch(error:any){

            console.log("Error")

        }
    }

    useEffect(()=>{

        getAccountInfo()
    
       
    },[])
    
    let ObjOfContents =new Array("username","email","password")
    
    
    return (
        <div className=" overflow-x-hidden">
         <HeaderToUseOnAccount/>
        {load ?
                
            <div className="flex flex-col h-fit items-center justify-center min-h-screen py-2">
            
            <h1>Hello Welcome Back {userData.username}</h1>
            <hr />
                
            {ObjOfContents.map((key,index)=>(
                <AccordionToUpdate typeOfInfo={key} id={params.id}/>
            ))}
            

            </div>: 
            <div className="flex flex-col h-screen w-screen justify-center items-center">
                <Image width={200} height={200}  src={loadingIMAGE} alt={"not working"} />
            </div>


            
             }
            <FooterToUseOnIntro/>
        </div>
    )
}
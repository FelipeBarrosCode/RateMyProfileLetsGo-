"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import FormToUpdateProfile from "./FormToUpdateDB"
import { ScrollArea } from "@/components/ui/scroll-area"

interface searchParams {
    profileName: string,
    realName: string,
    platform: string,
    age: string,
    chanceOfFake: string,
    botChance: string,
    profilePurpouse: string,
    politicalPosition: string,
    urlLink: string,
    commentsAboutProfile: string[],
   

}


interface PropsInter{
    id:string,
    userAge:number,
    fakeProbability:number,
    comment:string,
    profilePurpouse:string,
    politicalPosition:number,
    like:number,
    botProbability:number,
    URLprofile:string

}
import { Progress } from "@/components/ui/progress"
import axios from "axios"
import CommentaryComponent from "./CommentBox"
import Link from "next/link"
import FooterToUseOnIntro from "../ui/Footer"
import HeaderToUseOnAccount from "../ui/HeaderInAccount"

export default function ProfileRatePage() {
    const conetentInSearchParam = useSearchParams()
    

    const [dataToUse,setDataToUse] = useState<PropsInter[]>([])

    const [link, setLink] = useState<string>()

    
    useEffect(()=>{

        getUserInfo()

    },[])
    async function getUserInfo(){


        try{

            const variable:any = conetentInSearchParam.get("urlLink")
            
            const responseFast = await axios.patch("http://localhost:3000/api/users/InfoAboutSpecificUser", {
                urlLink:variable
            });
            
            console.log(responseFast)
            
            setDataToUse(responseFast.data.object)

            //setComments(responseFast.data)
            


        }catch(error:any){



        }

        setLink(conetentInSearchParam.get("urlLink") as string)

    }
  


    
    

    
    return (
        <>
        <div className="overflow-x-hidden">
        <div className="flex flex-col justify-center items-center w-screen overflow-x-hidden">
        <HeaderToUseOnAccount/>
        <div className="flex flex-col gap-4 w-2/3 overflow-x-hidden">
        <h1 className="text-2xl font-bold overflow-x-hidden">{conetentInSearchParam.get("profileName")}</h1>



        <h1>But the real Name is {conetentInSearchParam.get("realName")}</h1>
        <h1>The goal of this profile is {conetentInSearchParam.get("profilePurpouse")}</h1>

        <h1>Chance Of Fake</h1>
        <Progress className=" w-12/12 " value={Number(conetentInSearchParam.get("chanceOfFake"))}/>
        <h1>Chance Of Bot</h1>
        <Progress className="  w-12/12" value={Number(conetentInSearchParam.get("botChance"))}/>

        <h1>What People Say About this Profile</h1>
        <br />
        <ScrollArea className="h-[40%] w-[w-40%] rounded-md border p-4">


        {Object.entries(dataToUse).map(([key, value] )=>(

            
            <CommentaryComponent age={value.userAge}
            chanceOfFake={value.fakeProbability}
            commentsAboutProfile={value.comment}
            profilePurpouse={value.profilePurpouse}
            politicalPosition={value.politicalPosition}
            like={value.like}
            key={key} chanceOfBot={value.botProbability} url={value.URLprofile} _id={value.id}/>
        ))}
        </ScrollArea>

        
        <Link href={conetentInSearchParam.get("urlLink")|| "http://localhost:3000/SearchPage"}>Visit the profile {conetentInSearchParam.get("profileName")}</Link>

        



        </div>


        

        <FormToUpdateProfile identify={link}/>
        <FooterToUseOnIntro/>
        </div>
        </div>
        </>
    )



}
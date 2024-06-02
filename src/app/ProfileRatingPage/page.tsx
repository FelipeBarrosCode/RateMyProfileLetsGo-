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
import { Progress } from "@/components/ui/progress"
import axios from "axios"
import CommentaryComponent from "./CommentBox"
import Link from "next/link"
import FooterToUseOnIntro from "../ui/Footer"
import HeaderToUseOnAccount from "../ui/HeaderInAccount"
export default function ProfileRatePage(contentToBeParsed: searchParams) {

    const [dataToUse,setDataToUse] = useState([])
    
    useEffect(()=>{

        getUserInfo()

    },[])
    const getUserInfo = async ()=>{


        try{

            const variable:any = conetentInSearchParam.get("urlLink")

            const responseFast = await axios.patch("/api/users/InfoAboutSpecificUser", {
                urlLink:variable
            });
            console.log(responseFast.data.object)
            
            setDataToUse(responseFast.data.object)

            //setComments(responseFast.data)
            


        }catch(error:any){



        }

    }
  


    
    const conetentInSearchParam = useSearchParams()

    console.log(conetentInSearchParam.get("realName"))
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


        {Object.entries(dataToUse).map(([key,value] )=>(
            // eslint-disable-next-line react/jsx-key
            <CommentaryComponent age={value.userAge}
            chanceOfFake={value.fakeProbability}
            commentsAboutProfile={value.comment}
            profilePurpouse={value.profilePurpouse}
            politicalPosition={value.politicalPosition}
            like={value.like}
            _id={key} chanceOfBot={value.botProbability} url={value.URLprofile}/>
        ))}
        </ScrollArea>

        
        <Link href={conetentInSearchParam.get("urlLink")|| "http://localhost:3000/SearchPage"}>Visit the profile {conetentInSearchParam.get("profileName")}</Link>

        



        </div>


        

        <FormToUpdateProfile identify={conetentInSearchParam.getAll("urlLink")}/>
        <FooterToUseOnIntro/>
        </div>
        </div>
        </>
    )



}
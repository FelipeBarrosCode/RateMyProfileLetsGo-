
import Link from "next/link"
import { useEffect, useState } from "react"
import { BellRing, Check } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface ProfileData{
    profileName: string,
        realLifeName: string,
        platformThatProfileIsIn: string,
        age: number,
        chanceOfFake: number,
        chanceOfBot: number,
        commentsAboutProfile: string[],
        profilePurpouse:string,
        politicalPosition: number,
        profileLinkURL:string,
        listOfVoterUserName: Map<any,any>, 
        _id:string
        
        
}



export default function PageIcon(post:ProfileData){

    const [politicalPosition, setPoliticalPosition] = useState("");
    let contentToBeUsed
    const test = ()=>{
        console.log("That is the ID that we are looking for" + post._id)
    }

    function setProfilePoliticalOpinion(positionInPercentage:number){

        if(positionInPercentage <= 100 && positionInPercentage >= 80){
            return <p className=" text-blue-600">Extreme Right Wing</p>
        }else if(positionInPercentage < 80 && positionInPercentage >= 60){
            return <p className=" text-blue-400">Right Wing</p>
        }else if(positionInPercentage < 60 && positionInPercentage >= 40){
            return <p className=" text-grey">Reasonable wing</p>
        }else if(positionInPercentage < 40 && positionInPercentage >= 20){
            return <p className=" text-red-400">Left Wing</p>
        }else if(positionInPercentage < 20 && positionInPercentage >= 0){
            return <p className=" text-red-600">Extreme Left Wing</p>
        }


    }


    useEffect(()=>{
        test()
       

        
    },[])
    return(
        <>


        <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle>{post.profileName}</CardTitle>
        <CardDescription>Profile On {post.platformThatProfileIsIn}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        
        <h3>Profile Political Opinion{setProfilePoliticalOpinion(post.politicalPosition)}</h3>
        <h3>Chance Of Fake: {post.chanceOfFake}%</h3>
        <h3>Chance of Bot: {post.chanceOfBot}%</h3>
        <h3>Profile URL: {post.profileLinkURL}</h3>
        <h3>Profile Purpose: {post.profilePurpouse}</h3>
    
      </CardContent>
      <CardFooter>
      <Button asChild className=" hover:bg-white hover:text-black"  >
      <Link href={{
            pathname:"/ProfileRatingPage",
            query:{
                profileName:post.profileName,
                realName:post.realLifeName,
                platform:post.platformThatProfileIsIn,
                age:post.age,
                chanceOfFake:post.chanceOfFake,
                botChance:post.chanceOfBot,
                profilePurpouse:post.profilePurpouse,
                politicalPosition:post.politicalPosition,
                urlLink:post.profileLinkURL,
                commentsAboutProfile:post.commentsAboutProfile,
                id:post._id

            }

        }} >Go to the page about {post.profileName}</Link>
        
          
        </Button>
      </CardFooter>
    </Card>


     

        
        </>
    )

}
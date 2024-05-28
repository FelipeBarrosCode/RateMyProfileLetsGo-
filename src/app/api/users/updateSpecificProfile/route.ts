import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import PostConf from "@/models/postModel";

import { NextRequest, NextResponse } from "next/server";

connect()
export async function PATCH(request : NextRequest){

    const reqBody = await request.json()
    

    let connectToDocument = await PostConf.findOne({profileLinkURL: reqBody.UrlLink.identify[0]})
    
    const tokenId = getDataFromToken(request)
    //Fix this 
    
    console.log(connectToDocument)
    let mapToAdd = new Map()

    console.log(reqBody)
   
    if(connectToDocument.listOfVoterUserName.has(tokenId)){
        return NextResponse.json({message:"You already rated this use try other one"},{status:400})
    }
    

    
    let  amountOfEntries = 0

    
    for(let [key, value] of connectToDocument.listOfVoterUserName){
        amountOfEntries++
        connectToDocument.age += value.userAge
        connectToDocument.chanceOfFake += value.fakeProbability
        connectToDocument.politicalPosition += value.politicalPosition
        mapToAdd.set(key,value)


    }
    
    connectToDocument.age += reqBody.userAge
    connectToDocument.chanceOfFake += reqBody.fakeProbability
    connectToDocument.politicalPosition += reqBody.politicalPosition
    
    connectToDocument.age = connectToDocument.age/amountOfEntries
    connectToDocument.chanceOfFake =  connectToDocument.chanceOfFake/amountOfEntries
    connectToDocument.politicalPosition = connectToDocument.politicalPosition/amountOfEntries

    connectToDocument.commentsAboutProfile.push(reqBody.comment)

    mapToAdd.set(tokenId,reqBody)


    let finalTest = await PostConf.findOneAndUpdate({profileLinkURL: reqBody.UrlLink.identify[0]},{
        age:Math.trunc(connectToDocument.age),
        chanceOfFake:Math.trunc(connectToDocument.chanceOfFake),
        politicalPosition:Math.trunc(connectToDocument.politicalPosition),
        commentsAboutProfile:connectToDocument.commentsAboutProfile,
        listOfVoterUserName:mapToAdd
    })


    

    console.log(finalTest)

    const response = NextResponse.json({message:"OK working"},{status:200})

    return response 



}
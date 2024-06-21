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
    
    
    let mapToAdd = new Map()

    
   
    if(connectToDocument.listOfVoterUserName.has(tokenId)){
        return NextResponse.json({message:"You already rated this use try other one"},{status:400})
    }
    
 

    
    
    let  amountOfEntries = 0

    // outGoingRequest.like =0
    // outGoingRequest.personWhoLiked = new Array()
    // outGoingRequest.personWhoDisliked= new Array()

   
       
   

    if(connectToDocument.listOfVoterUserName.length == 0){
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

    }else{

        connectToDocument.age =0
        connectToDocument.chanceOfFake =0
        connectToDocument.politicalPosition =0

        connectToDocument.age += reqBody.userAge
        connectToDocument.chanceOfFake += reqBody.fakeProbability
        connectToDocument.politicalPosition += reqBody.politicalPosition

    }

   
    
    
    

    if(amountOfEntries !=0){
        connectToDocument.age = connectToDocument.age/amountOfEntries
        connectToDocument.chanceOfFake =  connectToDocument.chanceOfFake/amountOfEntries
        connectToDocument.politicalPosition = connectToDocument.politicalPosition/amountOfEntries

    }else{
        connectToDocument.age = connectToDocument.age/1
        connectToDocument.chanceOfFake =  connectToDocument.chanceOfFake/1
        connectToDocument.politicalPosition = connectToDocument.politicalPosition/1
    }
    

    connectToDocument.commentsAboutProfile.push(reqBody.comment)

    mapToAdd.set(tokenId,reqBody)

    const objBase = mapToAdd.get(tokenId)

    if(!(objBase.has("like"))){
        objBase.like =0
        objBase.personWhoLiked = new Array()
        objBase.personWhoDisliked = new Array()
    }
    

    mapToAdd.set(tokenId,objBase)
    


    let finalTest = await PostConf.findOneAndUpdate({profileLinkURL: reqBody.UrlLink.identify[0]},{
        age:Math.trunc(connectToDocument.age),
        chanceOfFake:Math.trunc(connectToDocument.chanceOfFake),
        politicalPosition:Math.trunc(connectToDocument.politicalPosition),
        commentsAboutProfile:connectToDocument.commentsAboutProfile,
        listOfVoterUserName:mapToAdd
    })


    

    

    const response = NextResponse.json({message:"OK working"},{status:200})

    return response 



}
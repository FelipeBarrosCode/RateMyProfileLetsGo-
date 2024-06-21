"use server"
import  PostConf  from '@/models/postModel';
import  Users  from '@/models/userModel';
import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

import { getDataFromToken } from "@/helpers/getDataFromToken";


connect()




export async function DELETE(request: NextRequest){

    try{const IdFromRequest = getDataFromToken(request)

    const contentToBeUpdated = await PostConf.find({})

    let updateSpecificDocs = []

    for(let objsToCheck of contentToBeUpdated){

        if(objsToCheck.listOfVoterUserName.has(IdFromRequest)){
            objsToCheck.listOfVoterUserName.delete(IdFromRequest)
            updateSpecificDocs.push(objsToCheck)
        }



    }


    updateSpecificDocs.map(async (key, _index) =>(await PostConf.updateOne({_id:key._id},{listOfVoterUserName:key.listOfVoterUserName})))



    
   
    await Users.findByIdAndDelete(IdFromRequest)

    return NextResponse.json({message:"Worked"},{status:200})
    

    }catch(err){
        
        return NextResponse.json({message:err},{status:400})
    }







}


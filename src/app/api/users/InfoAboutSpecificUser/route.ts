
import {connect} from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import PostConf from "@/models/postModel"
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { comment } from "postcss";


connect()




export async function PATCH(request: NextRequest){

    const bodyRequest = await request.json()

    
    console.log(bodyRequest.urlLink)
    let holdvalue = bodyRequest.urlLink
    const specificProfile = await PostConf.findOne({profileLinkURL: holdvalue})
    
    holdvalue = specificProfile.listOfVoterUserName

    return NextResponse.json({
        "object": holdvalue,
        

    })



}


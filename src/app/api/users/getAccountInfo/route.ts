

import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/userModel"
import { getDataFromToken } from "@/helpers/getDataFromToken";


connect()

export async function PATCH(request: NextRequest){

    try{
        
    const bodyRequest = await request.json()
    

    const findUser = await Users.findById(bodyRequest._id)
    console.log("user is " + findUser)

    return NextResponse.json({message:findUser},{status:200})

    }catch(error:any){
        return NextResponse.json({message:"Does Not Work"},{status:400})
    }




}
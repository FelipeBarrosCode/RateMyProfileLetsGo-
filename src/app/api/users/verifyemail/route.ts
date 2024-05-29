import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function PATCH(request : NextRequest) {

    try{
        const reqBody =  request.json()

        console.log(reqBody)

        const finalVerify = await User.findOneAndUpdate({
            codeUser:reqBody.code

        },{isVerified:true,
            codeUser:NaN
        })

        return NextResponse.json({message:"Code Valid Prepare to Use"},{status:200})

    }catch(error:any){
        return NextResponse.json({message:"Code Invalid"},{status:400})
    }
    


    




    
} 
import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

import { NextRequest, NextResponse } from "next/server";

connect()

export async function PATCH(request : NextRequest) {

    try{
        const reqBody =  await request.json()

        
        const finalVerify = await User.findOneAndUpdate({
            codeUser:reqBody.code

        },{
            isVerfied:true,
            codeUser:0
        })

        if(finalVerify == null || finalVerify == undefined ){
            return NextResponse.json({message:"Does not work"},{status:400})
        }

        return NextResponse.json({message:"Code Valid Prepare to Use"},{status:200})

    }catch(error:any){
        return NextResponse.json({message:"Code Invalid"},{status:400})
    }
    


    




    
} 
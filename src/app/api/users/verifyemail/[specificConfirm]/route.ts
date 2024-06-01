import {connect} from "@/dbConfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { parse } from "path";

connect()

export async function PATCH(request : NextRequest) {
    
    console.log("Reaching here")
    
    try{
        const reqBody =  await request.json()

        console.log(reqBody)
    

        let holdData = await User.findOne({codeUser : reqBody.Usercode})
    
        console.log(holdData)
        
        // if(holdData == null || holdData == undefined ){
        //     return NextResponse.json({message:"Does not work"},{status:400})
        // }


        
        if(reqBody.typeOfVerification == "username"){
            
            const finalVerify = await User.findOneAndUpdate({
            codeUser:reqBody.Usercode

            },{

            username:holdData.temporaryHoldOfData,
            codeUser:0

        })
        }else if(reqBody.typeOfVerification == "password"){
            
           
            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(holdData.temporaryHoldOfData, salt)
            
            const finalVerify = await User.findOneAndUpdate({
                codeUser:reqBody.Usercode
    
            },{
    
                password:hashedPassword,
                codeUser:0
            })
    
        }else if(reqBody.typeOfVerification == "email"){
            const finalVerify = await User.findOneAndUpdate({
                codeUser:reqBody.Usercode
    
            },{
    
                email:holdData.temporaryHoldOfData,
                codeUser:0
            })
        }

        

        return NextResponse.json({message:"Code Valid Prepare to Use"},{status:200})

    }catch(error:any){
        console.log("Error coming from Catch")
        return NextResponse.json({message:"Code Invalid"},{status:400})
    }
    


    




    
} 


import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/userModel"
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { mailUserToUpdate } from "@/helpers/mailer";


connect()

export async function PATCH(request: NextRequest) {

    let randomGeneratedCode = await Math.floor(Math.random() * 900000) + 100000
    try {

        const bodyRequest = await request.json()
        

        //     interface Mailer{
        //     email:string,
        //     emailType:string,
        //     userID:string,
        //     randomCode:number


        // }
        let dataToUpdate = await Users.findByIdAndUpdate(bodyRequest._id, {
            codeUser: randomGeneratedCode,
            temporaryHoldOfData:bodyRequest.updatedContent
        })

        if (bodyRequest.InfoToUpdate == "username") {

            await mailUserToUpdate({
                email: dataToUpdate.email,
                emailType: "VerifyUsername",
                userID: bodyRequest._id,
                randomCode: randomGeneratedCode
            })



        } else if (bodyRequest.InfoToUpdate == "email") {

            await mailUserToUpdate({
                email: dataToUpdate.email,
                emailType: "VerifyEmail",
                userID: bodyRequest._id,
                randomCode: randomGeneratedCode
            })

        } else if (bodyRequest.InfoToUpdate == "password") {

            await mailUserToUpdate({
                email: dataToUpdate.email,
                emailType: "VerifyPassword",
                userID: bodyRequest._id,
                randomCode: randomGeneratedCode
            })

        } else {
            throw Error("The data that you want to mpodify is not acessible")
        }

        
        // 

        return NextResponse.json({ message: "Worked Check Your Email" }, { status: 200 })

    } catch (error: any) {
        return NextResponse.json({ message: "Does Not Work" }, { status: 400 })
    }




}
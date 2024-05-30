import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { mailUser } from "@/helpers/mailer";


connect()


export async function POST(request: NextRequest){
    try {


        const reqBody = await request.json()
        const randomGeneratedCode = await Math.floor(Math.random() * 900000) + 100000
        const {username, email, password} = reqBody

        console.log("Request Body" + reqBody);

        
        const user = await User.findOne({email:email})
        console.log("Value in user" + user)  

        if(user != null){
            return NextResponse.json({error: "User already exists"}, {status: 400})
            
        }

        //hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        const getIP = request.headers.get('X-Forwarded-For')



        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            isVerfied:false,
            codeUser:randomGeneratedCode,
            userIP: getIP
            
        })

        const savedUser = await newUser.save()
        // console.log(savedUser);

        //send verification email
        

        await mailUser({email:email, emailType: "VERIFY", userID: savedUser._id, randomCode:randomGeneratedCode})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        
        


    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})

    }
}
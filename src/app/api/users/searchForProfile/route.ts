import { connect } from '@/dbConfig/dbConfig';
import PostConf from '@/models/postModel';
import { NextRequest, NextResponse } from 'next/server';



connect()


export async function GET(request: NextRequest) {

    

    try {
        
        let contentFetched = await PostConf.find({})
        
        
        
        
        


        
        let contentToHandle:any = contentFetched

       

        


        // {
        //     profileName: contentToHandle.profileName,
        //     realLifeName: contentToHandle.realLifeName,
        //     platformThatProfileIsIn: contentToHandle.platformThatProfileIsIn,
        //     age: contentToHandle.age,
        //     chanceOfFake: contentToHandle.chanceOfFake,
        //     chanceOfBot: contentToHandle.chanceOfBot,
        //     commentsAboutProfile: contentToHandle.commentsAboutProfile,
        //     profilePurpouse: contentToHandle.profilePurpouse,
        //     politicalPosition: contentToHandle.politicalPosition,
        //     profileLinkURL:contentToHandle.profileLinkURL,
        // }

        if(contentFetched.length == 0){
            return NextResponse.json({message:"No Objs"
            },{status:500})

        }

        let reponsee = NextResponse.json({contentFetched})

        return reponsee


    } catch (error) {
        
        return NextResponse.json({ error: "not work" })
    }










}
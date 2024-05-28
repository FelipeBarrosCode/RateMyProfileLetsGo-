import { connect } from '@/dbConfig/dbConfig';
import PostConf from '@/models/postModel';
import { NextRequest, NextResponse } from 'next/server';



connect()


export async function GET(request: NextRequest) {

    

    try {
        
        let contentFetched = await PostConf.find({})
        
        
        
        console.log(contentFetched[0])
        console.log(contentFetched[1])


        
        let contentToHandle:any = contentFetched

       

        console.log("Calling")


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

        

        let reponsee = NextResponse.json({contentFetched})

        return reponsee


    } catch (error) {
        console.log("Out of the window")
        return NextResponse.json({ error: "not work" })
    }










}

import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/userModel"
import PostConf from "@/models/postModel"
import { getDataFromToken } from "@/helpers/getDataFromToken";


connect()

export async function GET(request: NextRequest){

    try{
        const outGoingRequest = await request
        
        console.log(request)

        const idIdentify = getDataFromToken(request)
        
        console.log("The user Id is " + idIdentify)

        const findUser =  await Users.findById(idIdentify)



        const arrayWithUsers = findUser.userAccountsSearch

        let arraywithOBJ = []

        console.log(arrayWithUsers)
       
        for(let contentStr of arrayWithUsers ){
    
            let contentToBeAddedToResponse = await PostConf.findOne({profileName:contentStr})

            arraywithOBJ.push(contentToBeAddedToResponse)

            

        }


        return NextResponse.json({message:"Workinhg",
            contentFetched:arraywithOBJ
        },{status:200})


        



    }catch(err:any){
        console.log(err)
        return NextResponse.json({message:"Broke"},{status:400})
    }

}

    
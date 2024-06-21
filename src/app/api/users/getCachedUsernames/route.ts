
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Users from "@/models/userModel"
import PostConf from "@/models/postModel"
import { getDataFromToken } from "@/helpers/getDataFromToken";


connect()

export async function GET(request: NextRequest){

    try{
        const outGoingRequest = await request
        
        

        const idIdentify = getDataFromToken(request)
        
        

        const findUser =  await Users.findById(idIdentify)

        

        const arrayWithUsers = findUser.userAccountsSearch

        let arraywithOBJ = []

        
       
        for(let contentStr of arrayWithUsers ){
    
            let contentToBeAddedToResponse = await PostConf.findOne({profileName:contentStr})

            arraywithOBJ.push(contentToBeAddedToResponse)

            

        }
        

        if(arraywithOBJ[0] == null){
            return NextResponse.json({message:"No Objs"
            },{status:500})

        }


        return NextResponse.json({message:"Workinhg",
            contentFetched:arraywithOBJ
        },{status:200})


        



    }catch(err:any){
        
        return NextResponse.json({message:"Broke"},{status:400})
    }

}

    
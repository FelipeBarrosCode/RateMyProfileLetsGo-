import { connect } from '@/dbConfig/dbConfig';
import { getDataFromToken } from '@/helpers/getDataFromToken';
import PostConf from '@/models/postModel';
import Users from "@/models/userModel"

import { NextRequest, NextResponse } from 'next/server';



connect()


export async function PATCH(request: NextRequest) {

    try{
        const bodyRequest = await request.json()

        let holdIDFromUserLiking: string = getDataFromToken(request)

        const findUser = await Users.findById(holdIDFromUserLiking)
        
        console.log(findUser)

        if(findUser.userAccountsSearch.indexOf(bodyRequest.userSelected) != -1 ){
            return NextResponse.json({message:"Cache kept the same"}, {status:200})
        }
        if(findUser.userAccountsSearch.length >=9){
            findUser.userAccountsSearch.pop()
        }

        findUser.userAccountsSearch.push(bodyRequest.userSelected)

       
            
        await Users.findByIdAndUpdate(holdIDFromUserLiking,{
            userAccountsSearch: findUser.userAccountsSearch
        })

        return NextResponse.json({message:"Cache updated"}, {status:200})


    }catch(error:any){
        return NextResponse.json({error:"somethings is wrong"}, {status:400})
    }

}

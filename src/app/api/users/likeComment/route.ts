
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import PostConf from "@/models/postModel"
import { getDataFromToken } from "@/helpers/getDataFromToken";
import { comment } from "postcss";


connect()


export async function PATCH(request: NextRequest) {


    const bodyRequest = await request.json()


    




    let holdvalue = bodyRequest.urlLink
    let idNumber = bodyRequest._id

    const specificProfile = await PostConf.findOne({ profileLinkURL: holdvalue })

    let fastExhange = specificProfile.listOfVoterUserName.get(idNumber)


    // outGoingRequest.personWhoLiked = []
    //outGoingRequest.personWhoDisliked=[]
    let holdIDFromUserLiking: string = getDataFromToken(request)

    console.log(specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.indexOf(holdIDFromUserLiking))

    let checkForLike = specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.indexOf(holdIDFromUserLiking) >= 0
    let checkForDislike = specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked.indexOf(holdIDFromUserLiking) >= 0
    

    let indexForLike = specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.indexOf(holdIDFromUserLiking)
    let indexForDislike = specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked.indexOf(holdIDFromUserLiking)
    
    function reevaluate(){
        checkForLike = specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.indexOf(holdIDFromUserLiking) >= 0
        checkForDislike = specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked.indexOf(holdIDFromUserLiking) >= 0
        
        indexForDislike = specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked.indexOf(holdIDFromUserLiking)
        indexForLike = specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.indexOf(holdIDFromUserLiking)

    }



    if (bodyRequest.like == true) {
       
        
        reevaluate()
        if (checkForLike) {
           
            fastExhange.like = specificProfile.listOfVoterUserName.get(idNumber).like

        } else {

            fastExhange.like = specificProfile.listOfVoterUserName.get(idNumber).like + 1
            specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.push(holdIDFromUserLiking)
            fastExhange.personWhoLiked = specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked
        }
        reevaluate()
        if (checkForLike && checkForDislike) {
            
            fastExhange.like = specificProfile.listOfVoterUserName.get(idNumber).like + 1
            specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked.splice(indexForDislike,1)
            
            fastExhange.personWhoDisliked = specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked
            
        }

        specificProfile.listOfVoterUserName.set(idNumber, { ...fastExhange })



        let finalTest = await PostConf.findOneAndUpdate({ profileLinkURL: holdvalue }, {
            listOfVoterUserName: specificProfile.listOfVoterUserName
        })



        return NextResponse.json({
            
            likes:fastExhange.like +""
           
        })


    } else {


        reevaluate()
        if (checkForDislike) {

            fastExhange.like = specificProfile.listOfVoterUserName.get(idNumber).like



        } else {
           
            fastExhange.like = specificProfile.listOfVoterUserName.get(idNumber).like - 1

            specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked.push(holdIDFromUserLiking)

            fastExhange.personWhoDisliked = specificProfile.listOfVoterUserName.get(idNumber).personWhoDisliked
        }

        reevaluate()
        if (checkForLike && checkForDislike) {
            
            specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked.splice(indexForLike,1)
            fastExhange.like = specificProfile.listOfVoterUserName.get(idNumber).like - 1
            fastExhange.personWhoLiked= specificProfile.listOfVoterUserName.get(idNumber).personWhoLiked
        }


        specificProfile.listOfVoterUserName.set(idNumber, { ...fastExhange })



        let finalTest = await PostConf.findOneAndUpdate({ profileLinkURL: holdvalue }, {
            listOfVoterUserName: specificProfile.listOfVoterUserName
        })



        return NextResponse.json({
            
            likes:fastExhange.like
           
        })













    }
}


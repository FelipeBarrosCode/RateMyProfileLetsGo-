import axios from "axios";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useState } from "react"
import toast from "react-hot-toast";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useRouter } from "next/navigation";
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils";
import { animatePageOut } from "@/utils/animate";

interface ContentSolve{
    identify: string | undefined
}

export default function FormToUpdateProfile(identifyProps: ContentSolve) {
    const router = useRouter();
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);



    function setProfilePoliticalOpinion(positionInPercentage: number) {

        if (positionInPercentage <= 100 && positionInPercentage >= 80) {
            return <p className=" text-blue-600">Extreme Right Wing</p>
        } else if (positionInPercentage < 80 && positionInPercentage >= 60) {
            return <p className=" text-blue-400">Right Wing</p>
        } else if (positionInPercentage < 60 && positionInPercentage >= 40) {
            return <p className=" text-grey">Reasonable wing</p>
        } else if (positionInPercentage < 40 && positionInPercentage >= 20) {
            return <p className=" text-red-400">Left Wing</p>
        } else if (positionInPercentage < 20 && positionInPercentage >= 0) {
            return <p className=" text-red-600">Extreme Left Wing</p>
        }


    }


    const [post, setPost] = useState({


        userAge: 50,
        fakeProbability: 50,
        botProbability: 50,
        comment: "",
        profilePurpouse: "",
        politicalPosition: 50,
        UrlLink: identifyProps.identify



    })
    async function onPost(){
        try {
            setLoading(true);
            const response = await axios.patch("/api/users/updateSpecificProfile", post);
            
        
            animatePageOut("/SearchPage",router)
        } catch (error: any) {
            

            toast.error(error.message);
        } finally {
            setLoading(false);
            router.push("/SearchPage")
        }
    }

    useEffect(() => {
        if (post.comment.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [post]);

   



   

    return (
        <>


            <Accordion type="single" collapsible className="w-8/12 overflow-x-hidden">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Add Information about this profile</AccordionTrigger>
                    <AccordionContent >
                        <div className="flex flex-col gap-3 justify-center  items-center left-1/4">
                        <label htmlFor="userAge">User Age : {post.userAge} years</label>
                        <input
                            className=" appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                            id="userAge"
                            type="range"
                            min="0"
                            max="100"

                            value={post.userAge}
                            onChange={(e) => setPost({ ...post, userAge: parseInt(e.target.value) })}
                           
                        />
                        

                        <label htmlFor="fakeProbability">Fake Probability : {post.fakeProbability}%</label>
                        <input
                            className="appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                            id="fakeProbability"
                            type="range"
                            min="0"
                            max="100"
                            value={post.fakeProbability}
                            onChange={(e) => setPost({ ...post, fakeProbability: parseInt(e.target.value) })}
                            placeholder="Fake Probability"
                        />

                        <label htmlFor="botProbability">Bot Probability: {post.botProbability}%</label>
                        <input
                            className=" appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                            id="botProbability"
                            type="range"
                            min="0"
                            max="100"
                            value={post.botProbability}
                            onChange={(e) => setPost({ ...post, botProbability: parseInt(e.target.value) })}
                            placeholder="Bot Probability"
                        />

                        <label htmlFor="comment">Comment</label>
                        <textarea
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                            id="comment"
                            value={post.comment}
                            onChange={(e) => setPost({ ...post, comment: e.target.value })}
                            placeholder="Comment"
                        ></textarea>



                        <label htmlFor="politicalPosition">Political Position {setProfilePoliticalOpinion(post.politicalPosition)}</label>
                        <input
                            className=" appearance-none accent-white accent-border-2 border bg-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                            type="range"
                            id="politicalPosition"
                            min="0"
                            max="100"
                            value={post.politicalPosition}
                            onChange={(e) => setPost({ ...post, politicalPosition: parseInt(e.target.value) })}
                            placeholder="Political Position"
                        />

                        <button
                            onClick={onPost}
                            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Post About Profile</button>
                            </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </>
    )



}
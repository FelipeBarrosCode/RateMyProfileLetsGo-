import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { animatePageOut } from "@/utils/animate";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";


interface UpdateConfiguration{
    typeOfInfo:string,
    id:string
}



export default function AccordionToUpdate(content:UpdateConfiguration) {
    
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);



   const router = useRouter()


    const [post, setPost] = useState({

        InfoToUpdate: content.typeOfInfo,
        updatedContent:"",
        _id:content.id



    })
    const onPost = async () => {
        try {
            setLoading(true);
            const response = await axios.patch("/api/users/updateInfo", post);
            console.log("Post Created", response.data);
            animatePageOut("/profile" ,router )

        } catch (error: any) {
            console.log("Post failed", error.message);

            
        } finally {
            setLoading(false);
           
        }
    }

    

    return (
        <>


            <Accordion type="single" collapsible className="w-8/12">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Update {post.InfoToUpdate} </AccordionTrigger>
                    <AccordionContent >
                        <div className="flex flex-col gap-3 justify-center  items-center left-1/4">
                            <label htmlFor="changeUpdate">Update : {post.InfoToUpdate}</label>
                            <input
                                className=" appearance-none accent-white accent-border-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-white-600 text-black"
                                id="changeUpdate"
                                type="text"


                                value={post.updatedContent}
                                onChange={(e) => setPost({ ...post, updatedContent: e.target.value})}

                            />

                            <Button className=" hover:bg-white hover:text-black" onClick={onPost}>
                                Submit
                            </Button>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </>
    )



}
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


export default function AccordionToDelete(content:UpdateConfiguration) {
    
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);



   const router = useRouter()


    const [post, setPost] = useState({

        InfoToUpdate: content.typeOfInfo,
        updatedContent:"",
        _id:content.id



    })
    async function onAction(){
       if(post.InfoToUpdate == "Delete"){
        try {
            setLoading(true);
            const response = await axios.delete("/api/users/deleteUser");
            
            animatePageOut("/" ,router )

        } catch (error: any) {
            

            
        } finally {
            setLoading(false);
           
        }
       }else if(post.InfoToUpdate == "Logout"){
        try {
            setLoading(true);
            const response = await axios.get("/api/users/logout");
            
            animatePageOut("/" ,router )

        } catch (error: any) {
            

            
        } finally {
            setLoading(false);
           
        }
       }
    }

    

    return (
        <>


            <Accordion type="single" collapsible className="w-8/12 text-red-600">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-red-600 fill-red-600">Update {post.InfoToUpdate} </AccordionTrigger>
                    <AccordionContent >
                        <div className="flex flex-col gap-3 justify-center  items-center left-1/4">
                            <label htmlFor="changeUpdate">Do Following Action : {post.InfoToUpdate}</label>
                            

                            <Button className=" hover:bg-white hover:text-red-600" onClick={onAction}>
                                {post.InfoToUpdate}
                            </Button>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>


        </>
    )



}
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function MovementIcons(){

    const words = "Get Information about who you Follow"
    const SubWords = "Get Started Today" 

    return(<>


        <div className="  h-96 w-screen flex flex-col justify-center items-center gap-5">

            <div> 
                <TextGenerateEffect className="text-4xl max-[656px]:text-xl" words={words} />
            </div>
            <div>
            <TextGenerateEffect className="text-2xl max-[656px]:text-sm " words={SubWords} />
            </div>
               
            <div className="animate-slide-in-bottom delay-1000">
                <TransitionLink href={"/signup"} label={"Sign Up"}/>
            </div>


        </div>
    
    
    </>)
}
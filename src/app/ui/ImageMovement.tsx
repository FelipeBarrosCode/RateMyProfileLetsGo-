import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function MovementIcons(){


    return(<>


        <div className="  h-96 w-screen z-10 flex flex-col justify-center items-center gap-5">

            <div><h1 className=" text-4xl max-[656px]:text-xl">Get Information about who you Follow</h1></div>
            <div><p className="text-2xl max-[656px]:text-sm ">Get Started Today</p></div>
            <div>
                <Button asChild className=" hover:bg-white hover:text-black">
                    <Link href="/signup">Sign Up</Link>
                </Button>
            </div>


        </div>
    
    
    </>)
}
import Exclamation from "../Assets/Exclamation";
import Eye from "../Assets/Eye";
import Robot from "../Assets/Robot";



export default function BodyMainPage(){
    return(<>

        <div className="w-screen h-max flex-row flex  justify-between items-baseline pl-8 pr-8">

            <div className="flex flex-col gap-2 justify-center items-center "> <Robot/> <h2>Check for Bots</h2></div>
            <div className="flex flex-col gap-2 justify-center items-center"><Eye/> <h2>Check who is following you</h2></div>
            <div className="flex flex-col gap-2 justify-center items-center"><Exclamation/> <h2>Check if you are being fooled by a fake</h2></div>

        </div>
    
    
    </>)
}
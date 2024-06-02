import { animatePageOut } from "@/utils/animate";
import TransitionLink from "./TransitionLink";
    import { useRouter } from "next/navigation";

export default function HeaderToUseOnAccount() {

    const router = useRouter()


    function fastRedirect() {
        animatePageOut("/profile", router)
    }
    return (<>

        <div className=" flex flex-row pl-8 pr-8 justify-between items-center w-screen h-14 max-[656px]:pl-4 max-[656px]:pr-4">

            <div>
                <h2 className=" hover:cursor-pointer " onClick={fastRedirect}>Rate My Profile</h2>
            </div>
            <div className="flex flex-row gap-3">
                <TransitionLink href={"https://github.com/FelipeBarrosCode"} label={"GitHub"} />
                <TransitionLink href={"https://www.linkedin.com/in/felipe-barros-moura-773595261/"} label={"Linkedin"} />
            </div>


        </div>




    </>)
}
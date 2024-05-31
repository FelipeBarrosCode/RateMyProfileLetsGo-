"use client"

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/utils/animate"
import { Button } from "@/components/ui/button"

interface Props {
    href: string,
    label: string
}
const TransitionLink = ({ href, label }: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = () => {
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    }

    return (<Button className=" hover:bg-white hover:text-black" onClick={handleClick}>
        {label}
    </Button>)
}

export default TransitionLink


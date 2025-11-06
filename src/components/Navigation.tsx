import { Link, useLocation } from "react-router-dom"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import Logo from "./Logo"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "project",
        path: "/project",
    },
]

export const DesktopNavigation = () => {
    const pathname = useLocation().pathname
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-lg font-medium hover:text-accent transition-all`} key={index} to={link.path}>{link.name}</Link>
            ))}
        </nav>
    )
}

export const MobileNavigation = () => {
    const pathname = useLocation().pathname
    return (
        <Sheet>
            <SheetTrigger asChild>
                <FontAwesomeIcon className="text-xl" icon={faBars} />
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-16 justify-center items-center">
                <SheetHeader className="hidden">
                    <SheetTitle></SheetTitle>
                    <SheetDescription>
                    </SheetDescription>
                </SheetHeader>
                <Logo />
                <nav className="flex flex-col gap-8 text-center">
                    {links.map((link, index) => (
                        <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize text-lg font-medium hover:text-accent transition-all`} key={index} to={link.path}>{link.name}</Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
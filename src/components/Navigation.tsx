import { Link, useLocation } from "react-router-dom"

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
    return (
        <nav className="">
            {/* {links.map((link, index) => (
                <Link className="capitalize" key={index} to={link.path}>{link.name}</Link>
            ))} */}
        </nav>
    )
}
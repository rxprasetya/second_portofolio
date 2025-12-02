
import { Link } from "react-router-dom";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const links = [
    {
        name: "GitHub",
        path: "https://github.com/rxprasetya",
        icon: <FaGithub />
    },
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/rafid-artur-prasetya/",
        icon: <FaLinkedinIn />
    }
]

const Socials = () => {
    return (
        <div className="flex gap-4">
            {links.map((link, index) => (
                <Link className="w-9 h-9 border border-primary rounded-full flex items-center justify-center text-primary text-2xl hover:bg-primary hover:text-background hover:transition-all duration-500" key={index} to={link.path} target={`_blank`}>
                    <Tooltip>
                        <TooltipTrigger>
                            {link.icon}
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="font-albert-sans font-semibold">{link.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </Link>
            ))}
        </div>
    )
}

export default Socials
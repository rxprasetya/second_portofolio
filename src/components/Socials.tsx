
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

const links = [
    {
        name: "GitHub",
        path: "https://github.com/rxprasetya",
        icon: faGithub
    },
    {
        name: "LinkedIn",
        path: "https://www.linkedin.com/in/rafid-artur-prasetya-4a0473272/",
        icon: faLinkedinIn
    }
]

const Socials = () => {
    return (
        <div className="flex gap-4">
            {links.map((link, index) => (
                <Link className="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-2xl hover:bg-accent hover:text-primary hover:transition-all duration-500" key={index} to={link.path} target={`_blank`}>
                    <Tooltip>
                        <TooltipTrigger>
                            <FontAwesomeIcon icon={link.icon} />
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
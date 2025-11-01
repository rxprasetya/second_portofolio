import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import picture from "../assets/img/profile4.webp"
import { motion } from "motion/react"

const projects = [
  {
    title: "Project 01",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora animi in quisquam blanditiis rerum molestias similique iste exercitationem distinctio, ab obcaecati. Sed eius deleniti, consequuntur fugit dolorem incidunt obcaecati at?",
    stacks: [faReact, faCss3Alt],
    path: "https://fe-sebaran-penjualan.vercel.app/",
    photo: picture
    ,
  }
]
const Project = () => {
  return (
    <>
      {projects.map((project, index) => (
        <section key={index} className="flex h-full items-center justify-center">
          <div className="flex-1 flex flex-col gap-3 order-2 xl:order-0">
            <h1 className="text-8xl font-aboreto">{index < 9 && "0"}{index + 1}</h1>
            <h1 className="text-5xl">{project.title}</h1>
            <p className="text-lg text-muted-foreground text-justify">{project.desc}</p>
            <div className="flex items-center gap-2 text-accent text-3xl">
              {project.stacks.map((icon, i) => (
                <FontAwesomeIcon key={i} icon={icon} />
              ))}
            </div>
            <hr />
            <Link className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center text-lg ml-auto hover:text-accent transition-all duration-300" to={project.path} target="_blank">
              <Tooltip>
                <TooltipTrigger>
                  <FontAwesomeIcon icon={faChevronRight} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-albert-sans font-semibold">Live Demo</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
              duration: 0.4,
              ease: "easeInOut"
            }
          }} className="flex-1 flex items-center justify-center order-1 xl:order-0">
            <img className="h-[192px] md:h-[256px] lg:h-[384px] xl:h-[448px] object-contain rounded-md" src={project.photo} alt={`Portrait of ${project.title}`} />
          </motion.div>
        </section>
      ))}
    </>
  )
}

export default Project
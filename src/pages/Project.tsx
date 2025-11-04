import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faReact } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import picture from "../assets/img/profile4.webp";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Project 01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora animi in quisquam blanditiis rerum molestias similique iste exercitationem distinctio.",
    stacks: [faReact],
    path: "https://fe-sebaran-penjualan.vercel.app/",
    photo: picture,
  },
  {
    title: "Project 02",
    desc: "Another example project showcasing interactive UI animations and data visualization with React and Framer Motion.",
    stacks: [faReact, faCss3Alt],
    path: "https://fe-sebaran-penjualan.vercel.app/",
    photo: picture,
  },
];

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="h-full flex flex-col justify-center">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
        <div className="flex-1 flex flex-col gap-4 order-2 lg:order-0">
          <h1 className="text-6xl lg:text-8xl font-aboreto">
            {currentIndex < 9 && "0"}{currentIndex + 1}
          </h1>
          <h1 className="text-4xl lg:text-5xl text-accent min-h-[64px]">{currentProject.title}</h1>
          <p className="text-lg text-muted-foreground text-justify">
            {currentProject.desc}
          </p>
          <div className="flex items-center gap-2 text-3xl">
            {currentProject.stacks.map((icon, i) => (
              <FontAwesomeIcon key={i} icon={icon} />
            ))}
          </div>
          <hr />
          <Link
            className="px-4 py-1 bg-secondary rounded-full flex items-center justify-center text-base mr-auto ml-0 lg:mr-0 lg:ml-auto hover:text-accent transition-all duration-300"
            to={currentProject.path}
            target="_blank"
          >
            <Tooltip>
              <TooltipTrigger className="flex items-center justify-center gap-2">
                <span className="text-lg">
                  Tap to see
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-albert-sans font-semibold">Live Demo</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        </div>

        <div className="flex-1 flex w-full items-center justify-end order-1 lg:order-0">
          <img
            className="w-full max-h-[412px] object-cover rounded-xl"
            src={currentProject.photo}
            alt={`Preview of ${currentProject.title}`}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }} className="w-full flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNext}
          disabled={currentIndex === projects.length - 1}
        >
          Next
        </Button>
      </motion.div>
    </section>
  );
};

export default Project;

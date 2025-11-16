import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss, faCss3Alt, faHtml5, faLaravel, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import buahin from "../assets/img/mockup_buahin.webp";
import stockin from "../assets/img/mockup_stockin.webp";
import ticketin from "../assets/img/mockup_ticketin.webp";
import sebarin from "../assets/img/mockup_mapin.webp";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Buah.in",
    desc: "A dashboard website built using the AdminLTE template and Laravel. It is used to manage the sales of processed fruit products, such as fruit chips, fruit juices, and more.",
    icons: [
      {
        name: "HTML5",
        icon: faHtml5
      },
      {
        name: "CSS3",
        icon: faCss3Alt
      },
      {
        name: "Bootstrap 5",
        icon: faBootstrap
      },
      {
        name: "Laravel",
        icon: faLaravel
      }
    ],
    path: "https://github.com/rxprasetya/erp-penjualan-olahan-buah",
    photo: buahin,
  },
  {
    title: "Stock.in",
    desc: "A dashboard website built using the Mazzer template and Laravel. It is used to forecast stock in a grocery store using the Trend Moment method.",
    icons: [
      {
        name: "HTML5",
        icon: faHtml5
      },
      {
        name: "CSS3",
        icon: faCss3Alt
      },
      {
        name: "Bootstrap 5",
        icon: faBootstrap
      },
      {
        name: "Laravel",
        icon: faLaravel
      }
    ],
    path: "https://github.com/rxprasetya/peramalan-stok-trend",
    photo: stockin,
  },
  {
    title: "Ticket.in",
    desc: "A information system dashboard website built with AdminLTE template and Laravel. It is used to Booking Transportation Ticket. The system allows users to manage ticket bookings, view schedules, and monitor customer data efficiently.",
    icons: [
      {
        name: "HTML5",
        icon: faHtml5
      },
      {
        name: "CSS3",
        icon: faCss3Alt
      },
      {
        name: "Bootstrap 5",
        icon: faBootstrap
      },
      {
        name: "Laravel",
        icon: faLaravel
      }
    ],
    path: "https://github.com/rxprasetya/SI-Tiket-Transportasi",
    photo: ticketin,
  },
  {
    title: "Sebar.in",
    desc: "A dashboard website built with Mazzer template, Vite and React.js for a Dynamic Cigarette Sales Mapping. Placing sales in certain areas to market products to retailers in that area.",
    icons: [
      {
        name: "HTML5",
        icon: faHtml5
      },
      {
        name: "CSS3",
        icon: faCss3Alt
      },
      {
        name: "Tailwind CSS",
        icon: faCss
      },
      {
        name: "React.js",
        icon: faReact
      },
      {
        name: "Express.js",
        icon: faNodeJs
      },
      {
        name: "MySQL",
        icon: faDatabase
      }
    ],
    path: "https://github.com/rxprasetya/",
    photo: sebarin,
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
    <section className="flex flex-col gap-8">
      <div className="h-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="flex-1 flex flex-col gap-8 order-2 lg:order-0">
          <h1 className="text-6xl lg:text-8xl font-aboreto">
            {currentIndex < 9 && "0"}{currentIndex + 1}
          </h1>
          <h1 className="text-4xl lg:text-5xl text-accent">{currentProject.title}</h1>
          <p className="text-base lg:text-lg text-muted-foreground text-justify">
            {currentProject.desc}
          </p>
          <div className="flex items-center gap-2 text-3xl">
            {currentProject.icons.map((icon: any, i: number) => (
              <Tooltip key={i}>
                <TooltipTrigger>
                  <FontAwesomeIcon className="hover:text-accent transition-all duration-300" key={i} icon={icon.icon} />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-albert-sans font-semibold">{icon.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <hr />
          <Link
            className="px-4 py-1 bg-secondary rounded-full flex items-center justify-center text-base ml-auto hover:text-accent transition-all duration-300"
            to={currentProject.path}
            target="_blank"
          >
            <Tooltip>
              <TooltipTrigger className="flex items-center justify-center gap-2">
                <span className="text-base lg:text-lg">
                  Tap to see
                </span>
                <FontAwesomeIcon icon={faChevronRight} />
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-albert-sans font-semibold">Live Demo</p>
              </TooltipContent>
            </Tooltip>
          </Link>
        </motion.div>

        <div className="h-full flex-1 flex lg:flex-col w-full lg:justify-between gap-4 order-1 lg:order-0 box-border py-0 ">
          {/* <div className="w-full h-full flex items-center justify-center"> */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }}
            className="bg-cover bg-center w-full min-h-[256px] xs:min-h-[364px] sm:min-h-[432px] lg:min-h-[396px] xl:min-h-[400px] 2xl:min-h-[512px] drop-shadow-[0px_16px_72px] drop-shadow-accent/30" style={{ backgroundImage: `url(${currentProject.photo})` }} />
          {/* </div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
            }} className="hidden w-full lg:flex justify-end gap-2">
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
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
        }} className="lg:hidden w-full flex justify-between gap-2">
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
    </section >
  );
};

export default Project;
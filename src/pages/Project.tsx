import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import buahin from "../assets/img/mockup_buahin.webp";
import stockin from "../assets/img/mockup_stockin.webp";
import ticketin from "../assets/img/mockup_ticketin.webp";
import sebarin from "../assets/img/mockup_mapin.webp";
import simpanin from "../assets/img/mockup_simpanin.webp";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaBootstrap, FaChevronRight, FaCss3Alt, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";

const projects = [
  {
    title: "Buah.in",
    desc: "A dashboard website built using the AdminLTE template and Laravel. It is used to manage the sales of processed fruit products, such as fruit chips, fruit juices, and more.",
    icons: [
      {
        name: "HTML5",
        icon: <FaHtml5 />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />
      },
      {
        name: "Bootstrap 5",
        icon: <FaBootstrap />
      },
      {
        name: "Laravel",
        icon: <FaLaravel />
      }
    ],
    github: "https://github.com/rxprasetya/erp-penjualan-olahan-buah",
    demo: "",
    photo: buahin,
  },
  {
    title: "Stock.in",
    desc: "A dashboard website built using the Mazzer template and Laravel. It is used to forecast stock in a grocery store using the Trend Moment method.",
    icons: [
      {
        name: "HTML5",
        icon: <FaHtml5 />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />
      },
      {
        name: "Bootstrap 5",
        icon: <FaBootstrap />
      },
      {
        name: "Laravel",
        icon: <FaLaravel />
      }
    ],
    github: "https://github.com/rxprasetya/peramalan-stok-trend",
    demo: "",
    photo: stockin,
  },
  {
    title: "Ticket.in",
    desc: "A information system dashboard website built with AdminLTE template and Laravel. It is used to Booking Transportation Ticket. The system allows users to manage ticket bookings, view schedules, and monitor customer data efficiently.",
    icons: [
      {
        name: "HTML5",
        icon: <FaHtml5 />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />
      },
      {
        name: "Bootstrap 5",
        icon: <FaBootstrap />
      },
      {
        name: "Laravel",
        icon: <FaLaravel />
      }
    ],
    github: "https://github.com/rxprasetya/SI-Tiket-Transportasi",
    demo: "",
    photo: ticketin,
  },
  {
    title: "Sebar.in",
    desc: "A dashboard website built with Mazzer template, Vite and React.js for a Dynamic Cigarette Sales Mapping. Placing sales in certain areas to market products to retailers in that area.",
    icons: [
      {
        name: "HTML5",
        icon: <FaHtml5 />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />
      },
      {
        name: "React.js",
        icon: <FaReact />
      },
      {
        name: "Express.js",
        icon: <SiExpress />
      },
      {
        name: "MySQL",
        icon: <SiMysql />
      }
    ],
    github: "https://github.com/rxprasetya/",
    demo: "",
    photo: sebarin,
  },
  {
    title: "Simpan.in",
    desc: "A full-stack dashboard built with Vite, React.js, Shadcn UI, Tailwind CSS, integrated with a backend using Node.js. Includes product/category management, smart filtering, and real-time data handling.",
    icons: [
      {
        name: "HTML5",
        icon: <FaHtml5 />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />
      },
      {
        name: "React.js",
        icon: <FaReact />
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />
      },
      {
        name: "MySQL",
        icon: <SiMysql />
      }
    ],
    github: "https://github.com/rxprasetya/fe-management-inventory",
    demo: "https://fe-management-inventory.vercel.app",
    photo: simpanin,
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
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          className="flex-1 flex flex-col gap-4 order-2 lg:order-0">
          <h1 className="text-6xl lg:text-8xl font-aboreto">
            {currentIndex < 9 && "0"}{currentIndex + 1}
          </h1>
          <h1 className="text-4xl lg:text-5xl text-primary">{currentProject.title}</h1>
          <p className="text-base lg:text-lg text-muted-foreground text-justify">
            {currentProject.desc}
          </p>
          <div className="flex items-center gap-4 text-3xl">
            {currentProject.icons.map((icon: any, i: number) => (
              <Tooltip key={i}>
                <TooltipTrigger>
                  <div className="hover:text-primary transition-all duration-300">
                    {icon.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-albert-sans font-semibold">{icon.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
          <hr />
          <div className="flex items-center gap-4">
            <Link
              className="p-2 bg-secondary/90 rounded-full flex items-center justify-center text-2xl hover:text-primary transition-all duration-300"
              to={currentProject.github}
              target="_blank"
            >
              <Tooltip>
                <TooltipTrigger className="flex items-center justify-center gap-2">
                  <FaGithub />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-albert-sans font-semibold">Visit GitHub</p>
                </TooltipContent>
              </Tooltip>
            </Link>
            {currentProject.demo &&
              <Link
                className="px-4 py-1 bg-secondary/90 rounded-full flex items-center justify-center text-base hover:text-primary transition-all duration-300 group"
                to={currentProject.demo}
                target="_blank"
              >
                <Tooltip>
                  <TooltipTrigger className="flex items-center justify-center gap-2">
                    <span className="text-base lg:text-lg">
                      Tap to see
                    </span>
                    <div className="group-hover:rotate-90 transition-all duration-300">
                      <FaChevronRight />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-albert-sans font-semibold">Live Demo</p>
                  </TooltipContent>
                </Tooltip>
              </Link>
            }
          </div>
        </motion.div>

        <div className="h-full flex-1 flex lg:flex-col w-full lg:justify-between gap-4 order-1 lg:order-0 box-border py-0 ">
          {/* <div className="w-full h-full flex items-center justify-center"> */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            className="bg-cover bg-center w-full min-h-64 xs:min-h-[364px] sm:min-h-[432px] lg:min-h-[396px] xl:min-h-[400px] 2xl:min-h-[512px] drop-shadow-[0px_16px_72px] drop-shadow-primary/30" style={{ backgroundImage: `url(${currentProject.photo})` }} />
          {/* </div> */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, ease: "easeInOut" },
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
          transition: { duration: 0.4, ease: "easeInOut" },
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
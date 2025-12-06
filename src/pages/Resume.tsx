import { useState } from "react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "motion/react"
import { SiExpress, SiMysql } from "react-icons/si"
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaLaravel, FaNodeJs, FaReact } from "react-icons/fa"

const links = [
  {
    id: 1,
    title: "Experience",
    desc: "My journey in software engineering and frontend development has shaped my ability to build fast, user-focused interfaces and maintain scalable codebases. I focus on creating smooth user experiences, collaborating with teams, and continuously improving through modern engineering practices.",
    data: [
      {
        period: '10/2018 - 03/2019',
        company: 'PPPPTK BOE/VEDC Malang',
        position: 'Software Engineer Intern',
      },
      {
        period: '05/2022 - 02/2025',
        company: 'Institut Teknologi Nasional Malang',
        position: 'Teaching Assistant - Database Laboratory',
      },
      {
        period: '02/2024 - 06/2024',
        company: 'Kampus Merdeka - Educourse.id',
        position: 'Frontend Developer',
      },
      {
        period: '03/2024 - 04/2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support Intern',
      },
      {
        period: '04/2025 - Present',
        company: 'Freelance',
        position: 'Fullstack Developer',
      },
    ]
  },
  {
    id: 2,
    title: "Education",
    desc: "A summary of my educational background in software engineering and informatics, where I built a strong foundation in programming, system design, and modern web development practices.",
    data: [
      {
        period: '2018 - 2021',
        institution: 'SMK Negeri 1 Pasuruan',
        degree: 'Software Engineering',
      },
      {
        period: '2021 - 2025',
        institution: 'Institut Teknologi Nasional Malang',
        degree: 'Bachelor of Informatics Engineering',
      },
      {
        period: '08/2024 - 09/2024',
        institution: 'English Madany',
        degree: 'Basic English Course',
      },
      {
        period: '08/2024 - 09/2024',
        institution: 'English Madany',
        degree: 'Intermediate English Course',
      }
    ]
  },
  {
    id: 3,
    title: "Skills",
    desc: "A collection of technical skills I use in software engineering and frontend development, focusing on building responsive interfaces, writing clean code, and developing scalable applications.",
    data: [
      {
        icons: [
          {
            name: "HTML5",
            icon: <FaHtml5 />
          },
          {
            name: "CSS3",
            icon: <FaCss3 />
          },
          {
            name: "Javascript",
            icon: <FaJsSquare />
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
            name: "Express.js",
            icon: <SiExpress />
          },
          {
            name: "Laravel",
            icon: <FaLaravel />
          },
          {
            name: "MySQL",
            icon: <SiMysql />,
          },
          {
            name: "GitHub",
            icon: <FaGithub />
          },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "About Me",
    desc: "Passionate about building responsive and user-friendly websites, with experience creating personal projects that emphasize mobile-first design, smooth user experiences, and basic server-side logic with database integration.",
    data: [
      {
        name: "Rafid Artur Prasetya",
        experience: "1+ Year",
        nationality: "Indonesian",
        phone: "(+62) 877 6506 1946",
        email: "rafidarthurprasetya@gmail.com",
        languages: ["Bahasa Indonesia", "English"]
      }
    ]
  },
]

const Resume = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl lg:text-3xl">Why hire me?</h1>
      <p className="text-base lg:text-lg text-muted-foreground text-center">{links[currentIndex].desc}</p>
      <div className="container mx-auto">
        <Tabs defaultValue={`${links[currentIndex].id}`} className="flex flex-col lg:flex-row gap-8 md:gap-16">
          <TabsList className="flex flex-col w-full lg:max-w-[380px] mx-auto lg:mx-0 gap-4">
            {links.map((link) => (
              <TabsTrigger key={link.id} value={`${link.id}`} onClick={() => setCurrentIndex(link.id - 1)}>{link.title}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={`${links[0].id}`} className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}>
              <ScrollArea className="h-[312px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {links[0].data.map((row: any, index: number) => (
                    <li key={index} className="bg-secondary  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-center sm:text-start">
                      <span className="text-primary text-base lg:text-lg">{row.period}</span>
                      <h4 className="text-base lg:text-xl mb-5">{row.position}</h4>
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-primary"></span>
                        <p className="text-sm lg:text-base text-muted-foreground">{row.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </TabsContent>

          <TabsContent value={`${links[1].id}`} className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}>
              <ScrollArea className="h-[312px]">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  {links[1].data.map((row: any, index: number) => (
                    <li key={index} className="bg-secondary py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 text-center sm:text-start">
                      <span className="text-primary text-base lg:text-lg">{row.period}</span>
                      <h4 className="text-base lg:text-xl mb-5">{row.degree}</h4>
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-primary"></span>
                        <p className="text-sm lg:text-base text-muted-foreground">{row.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </TabsContent>

          <TabsContent value={`${links[2].id}`} className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut"
                }
              }}>
              <ScrollArea className="h-[312px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                  {(links[2].data[0] as any).icons.map((icon: any, index: number) => (
                    <li key={index}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-32 bg-secondary rounded-xl flex justify-center items-center hover:text-primary">
                          <div className="text-6xl hover:transition-all duration-300">
                            {icon.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="font-albert-sans font-semibold">{icon.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </TabsContent>

          <TabsContent value={`${links[3].id}`} className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                  ease: "easeInOut"
                },
              }}
            >
              <ScrollArea className="h-[312px]">
                <ul className="grid grid-cols-1 mx-auto lg:mx-0 gap-4">
                  {Object.entries(links[3].data[0]).map(([key, value], index) => (
                    <li
                      key={index}
                      className="flex justify-center items-center lg:justify-start gap-4"
                    >
                      <span className="text-muted-foreground capitalize">{key}</span>{" "}
                      <span className="text-xl">
                        {
                          Array.isArray(value)
                            ? value.join(", ") // ✅ handle arrays
                            : typeof value === "object"
                              ? JSON.stringify(value) // ✅ prevent crash if somehow object
                              : value // ✅ handle strings/numbers
                        }
                      </span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

export default Resume
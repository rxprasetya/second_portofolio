import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "motion/react";

const links = [
  {
    id: 1,
    title: "Experience",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt inventore neque ab, omnis quasi laudantium voluptates commodi praesentium optio dignissimos nulla quisquam, ex sapiente dolore! Necessitatibus recusandae perferendis provident quas.",
    data: [
      {
        period: 'Mar 2024 - Apr 2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support',
      },
      {
        period: 'Mar 2024 - Apr 2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support',
      },
      {
        period: 'Mar 2024 - Apr 2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support',
      },
      {
        period: 'Mar 2024 - Apr 2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support',
      },
      {
        period: 'Mar 2024 - Apr 2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support',
      },
      {
        period: 'Mar 2024 - Apr 2024',
        company: 'PT. Cheil Jedang Indonesia',
        position: 'IT Support',
      },
    ]
  },
  {
    id: 2,
    title: "Education",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt inventore neque ab, omnis quasi laudantium voluptates commodi praesentium optio dignissimos nulla quisquam, ex sapiente dolore! Necessitatibus recusandae perferendis provident quas.",
    data: [
      {
        period: '2021 - 2025',
        institution: 'Institut Teknologi Nasional Malang',
        degree: 'Bachelor of Informatics Engineering',
      }
    ]
  },
  {
    id: 3,
    title: "Skills",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt inventore neque ab, omnis quasi laudantium voluptates commodi praesentium optio dignissimos nulla quisquam, ex sapiente dolore! Necessitatibus recusandae perferendis provident quas.",
    data: [
      {
        icons: [
          {
            name: "React.js",
            icon: faReact
          },
          {
            name: "React.js",
            icon: faReact
          },
          {
            name: "React.js",
            icon: faReact
          },
          {
            name: "React.js",
            icon: faReact
          },
          {
            name: "React.js",
            icon: faReact
          },
          {
            name: "React.js",
            icon: faReact
          },
          {
            name: "React.js",
            icon: faReact
          },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "About Me",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt inventore neque ab, omnis quasi laudantium voluptates commodi praesentium optio dignissimos nulla quisquam, ex sapiente dolore! Necessitatibus recusandae perferendis provident quas.",
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
    <section className="flex flex-col h-full items-center justify-center gap-4">
      <h1 className="text-2xl lg:text-3xl">Why hire me?</h1>
      <p className="text-base lg:text-lg text-muted-foreground text-center">{links[currentIndex].desc}</p>
      <div className="container mx-auto">
        <Tabs defaultValue={links[currentIndex].id} className="flex flex-col lg:flex-row gap-8 md:gap-16">
          <TabsList className="flex flex-col w-full lg:max-w-[380px] mx-auto lg:mx-0 gap-4">
            {links.map((link) => (
              <TabsTrigger key={link.id} value={link.id} onClick={() => setCurrentIndex(link.id - 1)}>{link.title}</TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={links[0].id} className="w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" } }}>
              <ScrollArea className="h-[348px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {links[0].data.map((row: any, index: number) => (
                    <li key={index} className="bg-secondary  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent text-base lg:text-lg">{row.period}</span>
                      <h4 className="text-base lg:text-xl mb-5">{row.position}</h4>
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-accent"></span>
                        <p className="text-sm lg:text-base text-muted-foreground">{row.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </TabsContent>

          <TabsContent value={links[1].id} className="w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" } }}>
              <ScrollArea className="h-[348px]">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {links[1].data.map((row: any, index: number) => (
                    <li key={index} className="bg-secondary py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent text-base lg:text-lg">{row.period}</span>
                      <h4 className="text-base lg:text-xl mb-5">{row.degree}</h4>
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-full bg-accent"></span>
                        <p className="text-sm lg:text-base text-muted-foreground">{row.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </motion.div>
          </TabsContent>

          <TabsContent value={links[2].id} className="w-full">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" } }}>
              <ScrollArea className="h-[348px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
                  {(links[2].data[0] as any).icons.map((icon: any, index: number) => (
                    <li key={index}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[128px] bg-secondary rounded-xl flex justify-center items-center">
                          <FontAwesomeIcon className="text-6xl hover:text-accent hover:transition-all duration-300" icon={icon.icon} />
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

          <TabsContent value={links[3].id} className="w-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.4, ease: "easeInOut" },
              }}
            >
              <ScrollArea className="h-[348px]">
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
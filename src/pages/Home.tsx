import { motion } from "motion/react"
import profile from "./../assets/img/profile4.webp"
import { Button } from "@/components/ui/button"
import Socials from "../components/Socials"

const Home = () => {
    return (
        <section className="flex h-full items-center justify-center gap-6">
            <div className="flex-1 flex flex-col gap-3 order-2 xl:order-0">
                <h4 className="text-xl">Software Engineering</h4>
                <h1 className="text-5xl">Hello, I'm</h1>
                <h1 className="text-5xl text-accent">Rafid Artur Prasetya</h1>
                <p className="text-lg text-muted-foreground text-justify">
                    I'm passionate about creating responsive, clean, and user-friendly websites. I've developed a personal portfolio and several small projects that focus on mobile-friendly design and smooth user experiences, and basic server-side logic with database integration.
                </p>
                <div className="flex items-center gap-8">
                    <Button className="font-albert-sans rounded-full uppercase" size="lg" variant="outline">download cv</Button>
                    <Socials />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
                <motion.div
                    className="absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <img className="w-[198px] h-[198px] md:w-[298px] md:h-[298px] xl:w-[398px] xl:h-[398px] object-contain rounded-full order-1 xl:order-0 mix-blend-luminosity" src={profile} alt="Portrait of Rafid Artur Prasetya" />
                </motion.div>

                <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                    className={`w-[216px] h-[216px] md:w-[318px] md:h-[318px] xl:w-[420px] xl:h-[420px]`} fill={`transparent`} viewBox={`0 0 406 406`} xmlns={`http://www.w3.org/2000/svg`}>
                    <motion.circle cx={`203`} cy={`203`} r={`200`} stroke={`#00FF99`} strokeWidth={`4`} strokeLinecap={`round`} strokeLinejoin={`round`} initial={{ strokeDasharray: "24 10 0 0" }} animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360]
                    }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }} />
                </motion.svg>
            </div>
        </section>
    )
}

export default Home
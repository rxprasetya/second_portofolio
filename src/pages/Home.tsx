import { motion } from "motion/react"
import profile from "./../assets/img/profile.webp"
import { Button } from "@/components/ui/button"
import Socials from "../components/Socials"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <section className="flex flex-col lg:flex-row h-full items-center justify-center gap-6">
            <div className="flex-1 flex flex-col text-center h-full lg:text-start gap-2 lg:gap-4 order-2 lg:order-0">
                <h4 className="text-xl">Software Engineering</h4>
                <h1 className="text-4xl lg:text-5xl">Hello, I'm</h1>
                <h1 className="text-4xl lg:text-5xl text-accent">Rafid Artur Prasetya</h1>
                <p className="text-base lg:text-lg text-muted-foreground lg:text-justify">
                    I'm passionate about creating responsive, clean, and user-friendly websites. I've developed a personal portfolio and several small projects that focus on mobile-friendly design and smooth user experiences, and basic server-side logic with database integration.
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <Link to={`/resume`}>
                        <Button className="font-albert-sans rounded-full uppercase" size="lg" variant="outline">
                            Let's Dive Into It
                        </Button>
                    </Link>
                    <Socials />
                </div>
            </div>
            <div className="h-full flex-1 flex items-center justify-center">
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
                    <div className="w-[298px] h-[298px] lg:w-[398px] lg:h-[398px] rounded-full overflow-hidden">
                        <div className="w-[102.5%] h-[110%] bg-cover bg-center" style={{ backgroundImage: `url(${profile})` }} />
                    </div>
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
                    className={`w-[318px] h-[318px] lg:w-[420px] lg:h-[420px]`} fill={`transparent`} viewBox={`0 0 406 406`} xmlns={`http://www.w3.org/2000/svg`}>
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
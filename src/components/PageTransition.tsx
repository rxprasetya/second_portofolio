import { AnimatePresence, motion } from "motion/react"
import type { ReactNode } from "react"
import { useLocation } from "react-router-dom"

type PageTransitionProps = {
    children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const pathname = useLocation().pathname
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: {
                            delay: 0.4,
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                    className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
                />
                {children}
            </div>
        </AnimatePresence>
    )
}

export default PageTransition
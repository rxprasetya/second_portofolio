import { Link } from "react-router-dom"
import { DesktopNavigation, MobileNavigation } from "./Navigation"
import { ModeToggle } from "../common/mode-toggle"
import Logo from "../common/Logo"
import { motion } from "motion/react"

export const Header = () => {
    return (
        <header className="py-4 px-4 sm:px-0 fixed left-0 top-0 right-0 z-50 bg-background lg:bg-transparent container mx-auto">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 0.4,
                        duration: 0.4,
                        ease: "easeInOut"
                    }
                }}
                className="flex items-center justify-between">
                <div className="lg:hidden inline-flex">
                    <MobileNavigation />
                </div>

                <Link to={'/'}>
                    <Logo />
                </Link>

                <div className="hidden lg:flex gap-8">
                    <DesktopNavigation />
                    <ModeToggle />
                </div>

                <div className="lg:hidden inline-flex">
                    <ModeToggle />
                </div>
            </motion.div>
        </header>
    )
}
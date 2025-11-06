import { Link } from "react-router-dom"
import { DesktopNavigation, MobileNavigation } from "./Navigation"

export const Header = () => {
    return (
        <header className="py-4 px-4 sm:px-0 fixed left-0 top-0 right-0 z-50 bg-primary container mx-auto">
            <div className="flex items-center justify-between">
                <Link to={'/'}>
                    <h1 className="text-3xl font-semibold tracking-wide">
                        Rafid <span className="text-accent">.</span>
                    </h1>
                </Link>

                <div className="hidden lg:flex">
                    <DesktopNavigation />
                </div>

                <div className="lg:hidden inline-flex mt-auto">
                    <MobileNavigation />
                </div>
            </div>
        </header>
    )
}
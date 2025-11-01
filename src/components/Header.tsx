import { Link } from "react-router-dom"
import { DesktopNavigation, MobileNavigation } from "./Navigation"

export const Header = () => {
    return (
        <header className="py-4 fixed left-0 top-0 right-0">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link to={'/'}>
                        <h1 className="text-3xl font-semibold tracking-wide">
                            Rafid <span className="text-accent">.</span>
                        </h1>
                    </Link>

                    <div className="hidden xl:flex">
                        <DesktopNavigation />
                    </div>

                    <div className="xl:hidden">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </header>
    )
}
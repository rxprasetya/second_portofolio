import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/common/theme-provider"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudMoon, faCloudSun } from "@fortawesome/free-solid-svg-icons"

export function ModeToggle() {
    const { setTheme } = useTheme()
    const theme = localStorage.getItem("vite-ui-theme")
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" className="size-8" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>
                    <FontAwesomeIcon className="text-base scale-100 rotate-0 transition-all duration-300 dark:scale-0 dark:-rotate-90" icon={faCloudSun} />
                    <FontAwesomeIcon className="text-base absolute scale-0 rotate-90 transition-all duration-300 dark:scale-100 dark:rotate-0" icon={faCloudMoon} />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p className="text-sm font-semibold">Theme Mode</p>
            </TooltipContent>
        </Tooltip>
    )
}
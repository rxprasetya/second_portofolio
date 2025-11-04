import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "./components/Header"
import type { ReactNode } from "react"
import PageTransition from "./components/PageTransition"

type TemplateProps = {
    children: ReactNode
}

const Template = ({ children }: TemplateProps) => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <PageTransition children={
                <>
                    <Header />
                    <main className="container w-full h-full lg:w-screen lg:h-screen mx-auto box-border py-16 px-4 sm:px-0">
                        {children}
                    </main>
                </>
            } />
        </ThemeProvider>
    )
}

export default Template
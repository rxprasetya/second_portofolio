import { ThemeProvider } from "@/components/common/theme-provider"
import { Header } from "./components/layout/Header"
import { useState, type ReactNode } from "react"
import PageTransition from "./components/common/PageTransition"
import ShrinkSplash from "./pages/Splash"

const Template = ({ children }: { children: ReactNode }) => {
    const [loading, setLoading] = useState<boolean>(true)
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            {loading ?
                <ShrinkSplash onFinish={() => setLoading(false)} />
                :
                <>
                    <Header />
                    <PageTransition children={
                        <main className="container w-full h-full mx-auto box-border pt-32 lg:pt-24 pb-8 px-4 sm:px-0 transition-all duration-300">
                            {children}
                        </main>
                    } />
                </>
            }
        </ThemeProvider>
    )
}

export default Template
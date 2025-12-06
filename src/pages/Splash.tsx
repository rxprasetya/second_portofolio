import { useEffect, useState } from "react"
import { animate, motion, useMotionValue } from "motion/react"

export default function ShrinkSplash({
    onFinish,
}: {
    onFinish: () => void
}) {
    const progress = useMotionValue(0)
    const [progressValue, setProgressValue] = useState(0)
    const [slideOut, setSlideOut] = useState(false)

    useEffect(() => {
        const controls = animate(progress, 100, {
            duration: 3,
            ease: "easeInOut",
            onUpdate(value) {
                setProgressValue(Math.round(value))
            },
            onComplete() {
                setSlideOut(true)

                setTimeout(() => {
                    onFinish()
                }, 800)
            },
        })

        return () => controls.stop()
    }, [])

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={
                slideOut
                    ? {
                        y: "-100%",
                        transition: { duration: 0.8, ease: "easeInOut" },
                    }
                    : { y: 0 }
            }
            className="
                fixed inset-0 
                flex flex-col items-center justify-center gap-4
                bg-primary
                text-black text-3xl font-semibold
                z-50
            "
        >
            <p className="text-white tracking-wider">Syncing the vibes…</p>

            <div className="flex flex-col items-center">
                <p className="text-white text-2xl mb-4">{progressValue}%</p>

                <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white"
                        style={{ width: progressValue + "%" }}
                    />
                </div>
            </div>
        </motion.div>
    )
}
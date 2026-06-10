"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatisticProps extends React.HTMLAttributes<HTMLDivElement> {
    value: number
    label: string
    suffix?: string
    prefix?: string
    duration?: number
}

function Statistic({
    value,
    label,
    suffix = "",
    prefix = "",
    duration = 2,
    className,
    ...props
}: StatisticProps) {
    const ref = React.useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [currentValue, setCurrentValue] = React.useState(0)

    React.useEffect(() => {
        if (isInView) {
            let startTime: number
            let animationFrame: number

            const animate = (timestamp: number) => {
                if (!startTime) startTime = timestamp
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

                // Easing function: cubic-bezier(0.16, 1, 0.3, 1) approximated
                const easeOutQuart = 1 - Math.pow(1 - progress, 4)

                setCurrentValue(Math.floor(easeOutQuart * value))

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate)
                } else {
                    setCurrentValue(value)
                }
            }

            animationFrame = requestAnimationFrame(animate)
            return () => cancelAnimationFrame(animationFrame)
        }
    }, [isInView, value, duration])

    return (
        <div
            ref={ref}
            className={cn("flex flex-col items-center justify-center text-center", className)}
            {...props}
        >
            <div className="flex items-baseline gap-1">
                {prefix && <span className="text-3xl font-bold text-primary">{prefix}</span>}
                <span className="text-5xl md:text-6xl font-black text-text-primary tracking-tighter">
                    {currentValue.toLocaleString("de-DE")}
                </span>
                {suffix && <span className="text-3xl font-bold text-primary">{suffix}</span>}
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-text-secondary uppercase tracking-widest">
                {label}
            </p>
        </div>
    )
}

export { Statistic }

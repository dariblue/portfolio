"use client"

import { useEffect, useRef } from "react"

export default function ScrollReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible")

                        // Calculate index among siblings for staggering if needed
                        // This replicates the original script logic roughly, but simpler:
                        // The logic in script.js was:
                        // const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                        // entry.target.style.animationDelay = `${index * 0.1}s`;

                        const element = entry.target as HTMLElement
                        const parent = element.parentElement
                        if (parent) {
                            const index = Array.from(parent.children).indexOf(element)
                            element.style.animationDelay = `${index * 0.1}s`
                        }

                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -100px 0px",
            },
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current)
        }
    }, [])

    return (
        <div ref={ref} className={`scroll-reveal ${className}`}>
            {children}
        </div>
    )
}

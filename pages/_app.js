import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import AOS from 'aos'

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        // Reduce preloader time for better UX - reduced from 500ms to 200ms
        const timer = setTimeout(() => {
            setLoading(false)
        }, 200)
        
        // Initialize AOS after component mounts - lazy load
        if (typeof window !== 'undefined') {
            // Use requestIdleCallback for better performance
            const initAOS = () => {
                AOS.init({
                    duration: 800,
                    once: true,
                    offset: 100,
                    disable: 'mobile', // Disable on mobile for better performance
                })
            }
            
            if ('requestIdleCallback' in window) {
                requestIdleCallback(initAOS, { timeout: 2000 })
            } else {
                setTimeout(initAOS, 100)
            }
        }
        
        return () => clearTimeout(timer)
    }, [])
    return (
        <>
            {!loading ? (
                <Component {...pageProps} />
            ) : (
                <Preloader />
            )}
        </>
    )
}

export default MyApp

import { useEffect, useState } from "react"

interface UseResponsiveScreenParams {
    mobile: number
    tablet: number
    desktop: number
}

export const useResponsiveScreen = (params?: UseResponsiveScreenParams) => {
    const { mobile, tablet, desktop } = params ?? {
        mobile: 640,
        tablet: 800,
        desktop: 1200
    }

    const [ isMobile, setIsMobile ] = useState(false)
    const [ isTablet, setIsTablet ] = useState(false)
    const [ isDesktop, setIsDesktop ] = useState(false)
    const [ loading, setIsLoading ] = useState(true)
    

    useEffect(() => {
        const mobileMediaQuery = window.matchMedia(`(max-width: ${mobile}px)`) // Adjust the breakpoint as needed
        const tabletMediaQuery = window.matchMedia(`(max-width: ${tablet}px)`)
        const desktopMediaQuery = window.matchMedia(`(max-width: ${desktop}px)`)

        const handleMobileChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches)
        }
        const handleDesktopChange = (event: MediaQueryListEvent) => {
            setIsDesktop(event.matches)
        }
        const handleTabletChange = (event: MediaQueryListEvent) => {
            setIsTablet(event.matches)
        }

        mobileMediaQuery.addEventListener('change', handleMobileChange)
        tabletMediaQuery.addEventListener('change', handleTabletChange)
        desktopMediaQuery.addEventListener('change', handleDesktopChange)

        setIsMobile(mobileMediaQuery.matches)
        setIsDesktop(desktopMediaQuery.matches)
        setIsTablet(tabletMediaQuery.matches)
        setIsLoading(false)

        return () => {
            mobileMediaQuery.removeEventListener('change', handleMobileChange)
            tabletMediaQuery.removeEventListener('change', handleTabletChange)
            desktopMediaQuery.removeEventListener('change', handleDesktopChange)
        }

    }, [desktop, mobile, tablet])

    return {
        isMobile: isMobile && !isTablet && !isDesktop,
        isTablet: !isMobile && isTablet && !isDesktop,
        isDesktop: !isMobile && !isTablet && isDesktop,
        loading
    }
}

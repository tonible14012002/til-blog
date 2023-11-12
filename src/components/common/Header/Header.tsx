import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { NAVBAR_ROUTES } from "@/config/navbar"
import { ROUTES } from "@/constants/routes"
import clsx from "clsx"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { MobileNav } from "./MobileNav"
import { useResponsiveScreen } from "@/hooks/useResponsiveScreen"
import { Toggle } from "@/components/ui/toggle"
import { SubscribeLetterDialog } from "./SubscribeLetterDialog"
import { useDebounce } from "@dwarvesf/react-hooks"

export const Header = () => {

    const { pathname } = useRouter()
    const [ openMobileNav, setOpenMobileNav ] = useState(false)
    const debouncOpenMobileNav = useDebounce(openMobileNav, 50)
    const { isMobile, isTablet, isDesktop } = useResponsiveScreen({
        mobile: 640,
        tablet: 800,
        desktop: 1000
    })

    return (
        <div className="relative bg-background z-10 container flex justify-between items-center h-full">
            <Link className="text-left flex gap-3 text-lg items-center font-extrabold"
                href={ROUTES.HOME}
            >
                <Avatar>
                    <AvatarImage src="/avatar.jpg"/>
                </Avatar>
                <p>Nam Anh</p>
            </Link>
            {isMobile ? (
                <>
                    <Toggle
                        pressed={openMobileNav}
                        onPressedChange={setOpenMobileNav}
                        className="w-10 px-0 h-10 text-primary-700"
                    >
                        <Menu/>
                    </Toggle>
                    {(openMobileNav || debouncOpenMobileNav) && (
                        <div
                            className={clsx(
                                "w-full border-none bg-background p-4 z-50",
                                "fixed -z-10",
                                "inset-0 top-[72px]",
                                {
                                    "animate-in": openMobileNav,
                                    "animate-out": !openMobileNav,
                                    "fade-out-0": !openMobileNav,
                                    "fade-in-100": openMobileNav,
                                    // "zoom-out-95": !openMobileNav,
                                    // "zoom-in-95": openMobileNav,
                                    "slide-out-to-top-[5%]": !openMobileNav,
                                    "slide-in-from-top-[5%]": openMobileNav,
                                }
                            )}
                        >
                            <MobileNav 
                                onItemClick={() => setOpenMobileNav(false)}
                            />
                        </div>
                    )}
                </>
            ): (
                <div className="flex">
                    {NAVBAR_ROUTES.map((props) => (
                        <Link key={props.name} href={props.path}>
                            <Button variant="link"
                                className={clsx({
                                    "text-primary-700": pathname === props.path
                                })}
                            >
                                {props.name}
                            </Button>
                        </Link>
                    ))}
                    <SubscribeLetterDialog/>
                </div>
            )}
        </div>
    )
}

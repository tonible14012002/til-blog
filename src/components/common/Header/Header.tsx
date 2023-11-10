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

export const Header = () => {

    const { pathname } = useRouter()
    const [ openMobileNav, setOpenMobileNav ] = useState(false)
    const { isMobile } = useResponsiveScreen({
        mobile: 640,
        tablet: 800,
        desktop: 1200
    })

    return (
        <div className="container flex justify-between items-center h-full">
            <Link className="text-left flex gap-3 text-lg items-center font-extrabold"
                href={ROUTES.HOME}
            >
                <Avatar>
                    <AvatarImage src="/avatar.jpg"/>
                </Avatar>
                <p>Nam Anh</p>
            </Link>
            {isMobile ? (
                <div className="sm:hidden block">
                    <Dialog open={openMobileNav} onOpenChange={setOpenMobileNav}>
                        <DialogTrigger>
                            <Toggle pressed={openMobileNav} className="w-10 px-0 h-10 text-primary-700">
                                <Menu/>
                            </Toggle>
                        </DialogTrigger>
                        <DialogContent
                            blur={false}
                            className={clsx(
                                "w-full max-w-full h-full mt-[72px] border-none bg-background",
                            )}
                            // Allow click outside without closing dialog
                            onPointerDownOutside={(e) => e.preventDefault()}
                        >
                            <DialogClose className="w-10 h-10 absolute right-4 -top-14" />
                            <MobileNav 
                                onItemClick={() => setOpenMobileNav(false)}
                            />
                        </DialogContent>
                    </Dialog>
                </div>
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

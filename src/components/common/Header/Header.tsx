import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { NAVBAR_ROUTES } from "@/config/navbar"
import { ROUTES } from "@/constants/routes"
import clsx from "clsx"
import { Check, Loader2, Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode, useState } from "react"

const MOBILE_NAV_HEIGHT = 72

export const Header = () => {

    const { pathname } = useRouter()
    const [ openMobileNav, setOpenMobileNav ] = useState(false)

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
            <div className="hidden sm:flex">
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
            <div className="sm:hidden block">
                <Dialog open={openMobileNav} onOpenChange={setOpenMobileNav}>
                    <DialogTrigger asChild>
                        <div>
                            <Button className="w-10 px-0 h-10 text-primary-700" variant="ghost">
                                <Menu/>
                            </Button>
                        </div>
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
                        <div className="space-y-px">
                            {NAVBAR_ROUTES.map(r => (
                                <button className="text-left block w-full h-fit py-3 transition" key={r.name}
                                    onClick={() => setOpenMobileNav(false)}
                                >
                                    <Link href={r.path} className="block h-full w-full">
                                        {r.name}
                                    </Link>
                                </button>
                            ))}
                            <Button className="w-full !mt-4" size="lg">
                                Login
                            </Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

interface SubscribeLetterDialog {
    trigger?: ReactNode
}

const SubscribeLetterDialog = (props: SubscribeLetterDialog) => {
    const { trigger } = props

    const [ loading, setLoading ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const [ open, setOpen ] = useState(false)

    return (
        <Dialog
            open={loading? loading: open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                {trigger ?? (
                    <Button className="ml-4">
                        Subscribe
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="!w-[600px]">
                <DialogTitle>
                    Subscribe to the newsletter
                </DialogTitle>
                <form className="mt-2 flex gap-2" 
                    onSubmit={async (e) => {
                        e.preventDefault()
                        setLoading(true)
                        await new Promise((r) => setTimeout(() => {
                            r(0)
                            setLoading(false)
                            setSuccess(true)
                        }, 1000))
                    }}
                >
                    <Input
                        placeholder="Enter your mail"
                        disabled={loading}
                    />
                    <Button
                        type="submit"
                        disabled={loading}
                    >
                        {success && !loading? "Subscribed": "Subscribe"}
                        {success && !loading && (
                            <Check size={14} className="ml-2"/>
                        )}
                        {loading && (
                            <Loader2 size={14} className="ml-2 animate-spin"/>
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { NAVBAR_ROUTES } from "@/config/navbar"
import { ROUTES } from "@/constants/routes"
import clsx from "clsx"
import { Check, Loader2, Menu } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export const Header = () => {

    const { pathname } = useRouter()

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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div>
                            <Button className="w-10 px-0 h-10 text-primary-700" variant="ghost">
                                <Menu/>
                            </Button>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent collisionPadding={16} sideOffset={16} className="min-w-[140px]">
                        {NAVBAR_ROUTES.map((props) => (
                            <DropdownMenuItem key={props.name} >
                                <Link href={props.path} className={clsx("w-full", {"text-primary-700": pathname === props.path})}>
                                    {props.name}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

const SubscribeLetterDialog = () => {

    const [ loading, setLoading ] = useState(false)
    const [ success, setSuccess ] = useState(false)
    const [ open, setOpen ] = useState(false)

    return (
        <Dialog
            open={loading? loading: open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                <Button className="ml-4">
                    Subscribe
                </Button>
            </DialogTrigger>
            <DialogContent>
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
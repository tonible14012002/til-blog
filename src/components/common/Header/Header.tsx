import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { NAVBAR_ROUTES } from "@/config/navbar"
import { ROUTES } from "@/constants/routes"
import clsx from "clsx"
import { Check, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export const Header = () => {

    const { pathname } = useRouter()

    return (
        <div className="container flex justify-between items-center h-full">
            <Link className="text-left flex gap-2 items-center text-xl md:text-2xl font-bold tracking-tighter"
                href={ROUTES.HOME}
            >
                <Avatar>
                    <AvatarImage src="/avatar.jpg"/>
                </Avatar>
                <h3>MAROON TIL</h3>
            </Link>
            <div className="">
                {NAVBAR_ROUTES.map((props) => (
                    <Link  key={props.name} href={props.path}>
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
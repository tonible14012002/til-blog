import { ReactNode, useState } from "react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

interface SubscribeLetterDialog {
    trigger?: ReactNode
}

export const SubscribeLetterDialog = (props: SubscribeLetterDialog) => {
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
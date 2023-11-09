import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog"
import { AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"

export const UnderConstructModal = () => {
    const [ open, setOpen ] = useState(false)
    useEffect(() => setOpen(true), [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 border-none !w-[600px]">
                <Alert>
                    <AlertTitle>
                        Oops
                    </AlertTitle>
                    <AlertDescription>
                        This website is still in constructing, Please comeback later!
                    </AlertDescription>
                    <DialogClose asChild>
                        <Button className="w-full mt-3">
                            I Understand
                        </Button>
                    </DialogClose>
                </Alert>
            </DialogContent>
        </Dialog>
    )
}
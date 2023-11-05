import { Separator } from "@/components/ui/separator"
import { Dot, Facebook, Instagram, Twitter } from "lucide-react"



export const Footer = () => {
    return (
        <div className="py-4 container space-y-2 mt-8">
            <div className="flex gap-3 text-neutral-500 justify-center">
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </div>
            <div className="flex gap-1 justify-center font-medium text-sm text-mute-foreground">
                <p>Nam Anh Bui</p>
                <Dot/>
                <p>© 2023</p>
            </div>
        </div>
    )
}
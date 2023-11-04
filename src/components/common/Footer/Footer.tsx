import { Dot, Facebook, Instagram, Twitter } from "lucide-react"



export const Footer = () => {
    return (
        <div className="py-8 mt-2 container space-y-2">
            <div className="flex gap-3 text-neutral-500 justify-center">
                <Facebook/>
                <Instagram/>
                <Twitter/>
            </div>
            <div className="flex gap-1 justify-center font-medium text-sm text-mute-foreground">
                <h3>Nam Anh Bui</h3>
                <Dot/>
                <h3>© 2023</h3>
            </div>
        </div>
    )
}
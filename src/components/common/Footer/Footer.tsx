import { Dot, Facebook, Instagram, Twitter } from "lucide-react"



export const Footer = () => {
    return (
        <div className="py-3 mt-10 container space-y-2">
            <h3 className="text-lg font-bold text-center">Follow me</h3>
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
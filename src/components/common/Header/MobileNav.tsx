import { NAVBAR_ROUTES } from "@/config/navbar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLockBodyScroll } from '@dwarvesf/react-hooks'

export interface MobileNavProps {
    onItemClick?: () => void
}

export const MobileNav = (props: MobileNavProps) => {
    
    const { onItemClick } = props

    useLockBodyScroll()
    
    return (
        <div className="space-y-px">
            {NAVBAR_ROUTES.map(r => (
                <button className="text-left block w-full h-fit py-3 transition" key={r.name}
                    onClick={onItemClick}
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
    )
}
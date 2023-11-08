import { Header } from "../Header"
import { Footer } from "../Footer"
import { PropsWithChildren } from "react"
import { fontSans } from "@/pages/_app"
import clsx from "clsx"

export const Layout = ({children}: PropsWithChildren) => {

    return (
        <main
            className={clsx(
                "w-full bg-background flex flex-col min-h-screen space-y-2",
                fontSans.className
            )}
        >
            <div className="w-full py-4 sm:py-8">
                <Header/>
            </div>
            <main className="container flex-1">
                {children}
            </main>
            <footer className="shrink-0">
                <Footer/>
            </footer>
        </main>
    )
}
import { BlogCard } from "@/components/Blog/BlogCard";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/constants/routes";
import { Til, allTils } from "contentlayer/generated";
import Link from "next/link";


interface TilPageProps {
    tils: Til[]
}

export default function TilPage ({tils}: TilPageProps) {
    return (
        <div className="mt-8">
            <section className="lg:px-20">
                <h1 className="drop-shadow-md">Til</h1>
                <p className="sm mt-5 text-mute-foreground">
                    This site contain notes, summary of knownledge i learned
                </p>
                <Separator className="my-10 sm:my-8"/>
            </section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-8 lg:px-20">
                {tils.map((tilProps) => {
                        return(
                        <Link
                            key={tilProps.slug}
                            href={ROUTES.TIL_POST(tilProps.slug)}
                            className="block">
                            <BlogCard
                                {...tilProps}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
  return { props: { tils: allTils } }
}
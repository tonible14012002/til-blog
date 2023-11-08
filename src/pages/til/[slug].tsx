import { BlogWrapper } from "@/components/Blog/BlogWrapper"
import { allTils } from "contentlayer/generated"
import type { Til } from "contentlayer/generated"

interface TilPostProps {
    til: Til
}

export default function TilPost (props: TilPostProps) {
    const { til } = props
    return (
        <BlogWrapper
            title={til.title}
            tags={til.tags}
            cover={til.cover}
            publishedAt={til.publishedAt}
            mdx={til.body}
            readingTime={til.readingTime}
        />
    )
}

export async function getStaticPaths () {
    return {
        paths: allTils.map((til) => ({params: {slug:til.slug}})),
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: {slug: string}}) {
  const til = allTils.find((til) => til.slug === params.slug)
  return { props: { til } }
}
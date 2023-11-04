import { useMDXComponent } from "next-contentlayer/hooks"
import { allBlogs } from "contentlayer/generated"
import type { Blog } from "contentlayer/generated"

interface BlogPostProps {
    blog: Blog
}

export default function BlogPost (props: BlogPostProps) {
    const { blog } = props

    return (
        <div className="prose"
            dangerouslySetInnerHTML={{__html: blog.body.html}}
        />
    )
}

export async function getStaticPaths () {
    return {
        paths: allBlogs.map((blog) => ({params: {slug:blog.slug}})),
        fallback: false
    }
}

export async function getStaticProps({ params }: { params: {slug: string}}) {
  const blog = allBlogs.find((blog) => blog.slug === params.slug)
  return { props: { blog } }
}
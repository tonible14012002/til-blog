import { BlogWrapper } from "@/components/Blog/BlogWrapper"
import { allBlogs } from "contentlayer/generated"
import type { Blog } from "contentlayer/generated"

interface BlogPostProps {
    blog: Blog
}

export default function BlogPost (props: BlogPostProps) {
    const { blog } = props
    return (
        <BlogWrapper
            title={blog.title}
            tags={blog.tags}
            cover={blog.cover}
            publishedAt={blog.publishedAt}
            mdx={blog.body}
            readingTime={blog.readingTime}
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
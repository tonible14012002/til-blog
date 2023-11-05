import { BlogCard } from "@/components/Blog/BlogCard";
import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/constants/routes";
import { Blog, allBlogs } from "contentlayer/generated";
import Link from "next/link";


interface BlogPageProps {
    blogs: Blog[]
}

export default function BlogPage ({blogs}: BlogPageProps) {
    return (
        <div className="mt-8 text-center">
            <section>
                <h1 className="drop-shadow-md">Blog</h1>
                <p className="sm mt-5 text-mute-foreground">
                    Welcome to my personal hashnote for everyday learn
                </p>
                <Separator className="my-8"/>
            </section>
            <div className="grid grid-cols-2 gap-8 px-20">
                {blogs.map((blogProps) => {
                        return(
                        <Link
                            key={blogProps.slug}
                            href={ROUTES.BLOG_POST(blogProps.slug)}
                            className="block">
                            <BlogCard
                                {...blogProps}
                            />
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
  return { props: { blogs: allBlogs } }
}
import { format } from "date-fns"
import { BlogTag } from "../BlogTag"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { Dot } from "lucide-react"
import { MDX } from "contentlayer/core"
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Mdx } from "@/components/ui/mdx-component"


interface  BlogWrapperProps {
    publishedAt: string
    title: string
    cover: string
    tags: string[]
    mdx: MDX
    readingTime: {
        text: string
    }
}

export const BlogWrapper = (props: BlogWrapperProps) => {
    const { title, publishedAt, mdx, tags, readingTime, cover } = props
    return (
        <div className="mt-8 max-w-blog mx-auto">
            <div className="space-y-2">
                <div className="flex gap-0.5 text-mute-foreground ">
                    <p className="w-fit text-sm lg:text-base">Published at {format(new Date(publishedAt), "MMM dd, yyyy")}</p>
                    <Dot/> 
                    <p>{readingTime.text}</p>
                </div>
                <h1 className="drop-shadow-md">{title}</h1>
                <div className="flex gap-2 mt-4">
                    {tags?.map(t => (
                        <BlogTag
                            key={t}
                            label={t}
                            size="md"
                        />
                    ))}
                </div>
            </div>
            <div className="mt-8">
                <AspectRatio ratio={ 16 / 9 } className="rounded-lg overflow-hidden border">
                <Image
                    alt="random"
                    src={cover}
                    fill
                    className="w-full h-full object-cover hover:scale-105 transition bg-neutral-400"
                />
                </AspectRatio>
            </div>
            <div className="lg:prose prose-sm mt-8">
                <Mdx code={mdx.code}/>
            </div>
        </div>
    )
}
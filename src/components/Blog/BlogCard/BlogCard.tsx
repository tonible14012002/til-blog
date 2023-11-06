import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { BlogTag } from "../BlogTag"
import { format } from "date-fns"

interface BlogCardProps {
  title: string
  tags: string[]
  publishedAt: string
  description: string
  cover: string
}

export const BlogCard = (props: BlogCardProps) => {
  const { title, tags, publishedAt, description, cover } = props

  return (
      <div className="text-left flex flex-col">
        <AspectRatio ratio={ 16 / 9 } className="rounded-lg overflow-hidden border">
          <Image
            alt="random"
            src={cover}
            fill
            className="w-full h-full object-cover hover:scale-105 transition"
          />
        </AspectRatio>
        <div className="space-y-2 mt-2">
          <h3 className="font-extrabold line-clamp-2">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-mute-foreground">
            {description}
          </p>
          <div className="flex gap-2 flex-wrap">
            {tags.map(tag => (
              <BlogTag key={tag} label={tag}/>
            ))}
          </div>

          <p className="text-sm text-mute-foreground">
            {format(new Date(publishedAt), 'MMM d, yyyy')}
          </p>
          
        </div>
      </div>
    )
}
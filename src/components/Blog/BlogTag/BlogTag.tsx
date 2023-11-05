import { Tag, TagProps } from "@/components/ui/tag"

interface BlogTagProps {
    label: string
    className?: string
    size?: TagProps['size']
}

export const BlogTag = ({label, className, size}: BlogTagProps) => {
    return (
        <Tag
            className={className}
            variant={getBlogTagColor(label)}
            size={size}
        >
                {label}
        </Tag>
    )
}

const getBlogTagColor = (label: string) => ({
    "Web": "secondary",
    "Engineering": "default",
    "Django": "destructive",
    "Go": "success",
    "NextJs": "black" ,
    "AI": "warning",
}[label] as TagProps['variant'])
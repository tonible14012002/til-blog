import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      <div className="space-y-4 text-center">
        <h3 className="text-left text-6xl font-bold">
          Lattest
        </h3>
        <p className="text-left text-lg text-mute-foreground">
          Welcome to my personal hashnote for everything I &apos;ve learned.
        </p>
        <div className="flex gap-3 w-full">
          <button className="rounded-full bg-primary-700 text-white p-1.5">
            <Facebook size={20}/>
          </button>
          <button className="rounded-full bg-primary-700 text-white p-1.5">
            <Instagram size={20}/>
          </button>
          <button className="rounded-full bg-primary-700 text-white p-1.5">
            <Linkedin size={20}/>
          </button>
          <button className="rounded-full bg-primary-700 text-white p-1.5">
            <Mail size={20}/>
          </button>
        </div>
      </div>
      <Separator className="my-8"/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 gap-y-10">
        {Array(5).fill(null).map((_, index) => (
          <button className="text-left flex flex-col" key={index}>
            <AspectRatio ratio={ 16 / 9 } className="rounded-xl overflow-hidden">
              <Image
                alt="random"
                src="/avatar.jpg"
                layout="fill"
                className="w-full h-full object-cover hover:scale-105 transition"
              />
            </AspectRatio>
            <div className="space-y-2">
              <h3
                className="text-lg font-bold mt-4"
              >
                This is my first blog
              </h3>
              <div className="flex gap-2">
                <Badge>
                  Frontend
                </Badge>
                <Badge variant="destructive">
                  Backend
                </Badge>
                <Badge variant="warning">
                  Engineer
                </Badge>
              </div>
              <p className="text-sm text-mute-foreground">2 Jan, 2023</p>
              <p className="line-clamp-2 text-sm text-mute-foreground">Flow is now available for Apple Watch. Today we’re talking about our latest updates, the release of Flow for Apple Watch, and what’s next.</p>
              <Link href="/" className="flex gap-1 items-center text-sm font-medium text-primary-700 hover:gap-2 transition-all">
                Read more <ArrowRight size={12} className="translate-y-px"/>
              </Link>
            </div>
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-700">
          See all posts
          <ArrowRight size={12}/>
        </Link>
      </div>
    </div>
  )
}

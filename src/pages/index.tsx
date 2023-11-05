import { UnderConstructAlert } from "@/components/common/UnderConstructAlert/UnderConstructAlert";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      <UnderConstructAlert/>
      <Link href={ROUTES.BLOG}>
        <Button className="mt-4 flex gap-2 hover:gap-3 transition-all" variant="link">
          See all posts
          <ArrowRight size={14} />
        </Button>
      </Link>
    </div>
  )
}

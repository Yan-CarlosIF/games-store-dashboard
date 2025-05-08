"use client";

import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components/ui/button";

interface LabelProps {
  icon: IconName;
  url: string;
  content: string;
}

export default function Label({ icon, url, content }: LabelProps) {
  const router = useRouter();
  const params = usePathname();

  return (
    <div className="relative flex items-center justify-between">
      {params === url && (
        <div className="absolute right-[240px] flex h-8 w-2 rounded-[8px] bg-green-400"></div>
      )}
      <Button
        onClick={() => router.push(url)}
        className={twMerge(
          "font-barlow flex h-10 w-[200px] cursor-pointer justify-start gap-6 bg-white text-gray-800 shadow-none transition-colors duration-200 ease-in-out hover:bg-green-300/30 hover:font-semibold hover:text-green-500",
          params === url && "bg-green-300/30 font-semibold text-green-500",
        )}
      >
        <DynamicIcon name={icon} />
        {content}
      </Button>
    </div>
  );
}

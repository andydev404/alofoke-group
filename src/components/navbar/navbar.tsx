"use client";

import { cn } from "@/lib/utils";
import { IChannelItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar({ channels }: { channels: IChannelItem[] }) {
  const pathname = usePathname();
  return (
    <nav className="bg-neutral-950/50 border overflow-y-auto overflow-x-auto border-neutral-100/10 backdrop-blur-lg h-full rounded-lg px-4 lg:px-0 py-4">
      <ul className="lg:gap-y-8 overflow-auto gap-4 flex lg:flex-col items-center justify-between">
        {channels.map((channel, i) => (
          <li key={channel.id} className="min-w-[70px]">
            <Link
              href={`/channel/${channel.id}`}
              className="flex justify-center"
            >
              <Image
                src={channel.snippet.thumbnails.high.url}
                alt={channel.snippet.title}
                width={70}
                height={70}
                className={cn(
                  "rounded-full border hover:border-red-600 border-transparent transition-all shadow-lg hover:shadow-red-600/50",
                  {
                    "shadow-red-600/50 border-red-600":
                      pathname === `/channel/${channel.id}`,
                  }
                )}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

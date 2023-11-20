"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import YouTube from "react-youtube";

type Props = {
  imageUrl: string;
  title: string;
  id: string;
};

const iframeSize = {
  height: "390",
  width: "640",
};

export function VideoCard({ imageUrl, title, id }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <figure>
            <Image
              src={imageUrl}
              alt={title}
              width={350}
              height={300}
              className="rounded-lg transition-all shadow-lg hover:shadow-red-600/50 hover:scale-105 border border-transparent hover:border-red-600"
            />
          </figure>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-[700px] p-0 m-0 bg-transparent border-none">
        <YouTube
          videoId={id}
          opts={{
            ...iframeSize,
            playerVars: {
              autoplay: 1,
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
}

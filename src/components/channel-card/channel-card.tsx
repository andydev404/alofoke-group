import { EyeIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SanitizedHtml } from "@/components/ui/sanitized-html";
import { formatNumber } from "@/lib/utils";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
  totalViews: string;
  totalSubscribers: string;
  desc: string;
  as?: "link" | "div";
};

export function ChannelCard(props: Props) {
  const {
    title,
    imageUrl,
    totalViews,
    totalSubscribers,
    id,
    desc,
    as = "link",
  } = props;

  const ChannelCardContent = () => {
    return (
      <>
        <div className="flex flex-col lg:flex-row items-center gap-3 mb-2">
          <Image
            src={imageUrl}
            alt={title}
            width={70}
            height={70}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <SanitizedHtml html={desc} />
        <div className="flex items-center gap-6 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <EyeIcon width={20} className="text-red-600" />
            <span>{formatNumber(Number(totalViews))}</span>
          </div>
          <div className="flex items-center gap-2">
            <UserGroupIcon width={20} className="text-red-600" />
            <span>{formatNumber(Number(totalSubscribers))}</span>
          </div>
        </div>
      </>
    );
  };

  if (as === "div") {
    return <ChannelCardContent />;
  }

  return (
    <Link
      href={`/channel/${id}`}
      className="bg-neutral-950/50 border border-neutral-100/10 transition hover:border-neutral-100/40 backdrop-blur-lg inline-block p-10 rounded-lg"
    >
      <ChannelCardContent />
    </Link>
  );
}

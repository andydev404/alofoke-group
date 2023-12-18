import { Metadata, ResolvingMetadata } from "next";
import { ChannelCard } from "@/components/channel-card";
import { ChannelService } from "@/services/channel.service";
import { VideoCard } from "@/components/video-card";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;

  const channelService = new ChannelService();
  const channel = (await channelService.findById(id))?.data.items[0];

  return {
    title: channel.snippet.title,
  };
}

export default async function ChannelPage({ params: { id } }: Props) {
  const channelService = new ChannelService();
  const channel = (await channelService.findById(id))?.data.items[0];
  const channelVideos = (await channelService.findVideosByChannelId(id)).data
    .items;

  return (
    <div className="lg:pl-12 pb-12">
      <ChannelCard
        key={channel.id}
        id={channel.id}
        title={channel.snippet.title}
        desc={channel.snippet.description}
        totalViews={channel.statistics.viewCount}
        totalSubscribers={channel.statistics.subscriberCount}
        imageUrl={channel.snippet.thumbnails.high.url}
        as="div"
      />
      <h2 className="text-2xl font-bold mt-12 mb-8">Ultimos 12 videos</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {channelVideos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            id={video.id.videoId}
            imageUrl={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
          />
        ))}
      </section>
      <p className="text-sm text-white mt-8 text-center">
        Creado por{" "}
        <a
          href="https://twitter.com/andydev404"
          className="text-red-600"
          target="_blank"
        >
          Andy Santana
        </a>
      </p>
    </div>
  );
}

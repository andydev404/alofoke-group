import { ChannelCard } from "@/components/channel-card";
import { CHANNELS_ID } from "@/constants";
import { ChannelService } from "@/services/channel.service";

export default async function Home() {
  const channelService = new ChannelService();
  const channelsResponse = await Promise.all(
    CHANNELS_ID.map((id) => channelService.findById(id))
  );
  const channels = channelsResponse.map((res) => res.data.items).flat();
  return (
    <div className="pb-12">
      <h1 className="text-center text-5xl font-bold mt-4 mb-10">
        Alofoke <span className="font-thin">Group</span>
      </h1>
      <section className="px-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {channels.map((channel) => (
          <ChannelCard
            key={channel.id}
            id={channel.id}
            title={channel.snippet.title}
            desc={channel.snippet.description}
            totalViews={channel.statistics.viewCount}
            totalSubscribers={channel.statistics.subscriberCount}
            imageUrl={channel.snippet.thumbnails.high.url}
          />
        ))}
      </section>
    </div>
  );
}

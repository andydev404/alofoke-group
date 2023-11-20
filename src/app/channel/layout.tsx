import { Navbar } from "@/components/navbar/navbar";
import { CHANNELS_ID } from "@/constants";
import { ChannelService } from "@/services/channel.service";

async function ChannelLayout({ children }: { children: React.ReactNode }) {
  const channelService = new ChannelService();
  const channelsResponse = await Promise.all(
    CHANNELS_ID.map((id) => channelService.findById(id))
  );
  const channels = channelsResponse.map((res) => res.data.items).flat();

  return (
    <>
      <aside className=" lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-32 lg:flex-col py-10">
        <Navbar channels={channels} />
      </aside>
      <main className="lg:pl-32">{children}</main>
    </>
  );
}

export default ChannelLayout;

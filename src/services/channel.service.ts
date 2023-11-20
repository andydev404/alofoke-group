import { YoutubeClient } from "@/lib/youtube-client";
import { IChannel, IChannelVideo } from "@/types";
import { AxiosResponse } from "axios";

export class ChannelService {
  private readonly urlPath = "/channels";

  /*
   *==================
   * GET requests
   *==================
   */

  findById(id: string): Promise<AxiosResponse<IChannel>> {
    const searchParams = new URLSearchParams();
    searchParams.append("part", "snippet");
    searchParams.append("part", "statistics");
    searchParams.set("id", id);
    searchParams.set("key", String(process.env.YOUTUBE_API_KEY));

    return YoutubeClient.get<IChannel>(this.urlPath, {
      params: searchParams,
    });
  }

  findVideosByChannelId(id: string): Promise<AxiosResponse<IChannelVideo>> {
    const searchParams = new URLSearchParams();
    searchParams.set("channelId", id);
    searchParams.set("maxResults", "12");
    searchParams.set("order", "date");
    searchParams.set("type", "video");
    searchParams.set("videoEmbeddable", "true");
    searchParams.set("key", String(process.env.YOUTUBE_API_KEY));
    searchParams.set("part", "snippet");

    return YoutubeClient.get<IChannelVideo>("/search", {
      params: searchParams,
    });
  }
}

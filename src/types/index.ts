export interface IChannel {
  items: IChannelItem[];
}

export interface IChannelVideo {
  items: IVideo[];
}

export interface IChannelItem {
  kind: string;
  etag: string;
  id: string;
  snippet: ISnippet;
  statistics: IStatistics;
}

export interface ISnippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: Date;
  thumbnails: IThumbnailsVideo;
  country: string;
}

export interface IThumbnailsVideo {
  high: { url: string; width: number; height: number };
}

export interface IStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface IVideo {
  id: {
    videoId: string;
  };
  snippet: ISnippet;
}

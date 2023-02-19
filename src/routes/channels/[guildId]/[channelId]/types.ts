export type ChannelPage {
    title: string;
    content: string;
}

export type ChannelRequest {
    params: {
        guildId: string;
        channelId: string;
    }
}
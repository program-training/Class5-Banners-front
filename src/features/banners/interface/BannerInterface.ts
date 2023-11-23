export interface BannerInterface {
    title: string;
    _id: string;
    image: {
        url: string;
        alt: string;
    };
    text: string;
    createdAt: Date;
    author: string;
}

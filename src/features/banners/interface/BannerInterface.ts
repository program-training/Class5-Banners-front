export interface BannerInterface {
    _id: string;
    image: {
        url: string;
        alt: string;
    };
    text: string;
    createdAt: Date;
    author: string;
}

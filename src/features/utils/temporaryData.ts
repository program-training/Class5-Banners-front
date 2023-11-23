import { BannerInterface } from "../banners/interface/BannerInterface";

export const banners: BannerInterface[] = [
    {
        _id: "1",
        image: {
            url: "https://example.com/image1.jpg",
            alt: "Banner 1",
        },
        text: "First banner",
        createdAt: new Date("2023-11-20"),
        author: "John Doe",
    },
    {
        _id: "2",
        image: {
            url: "https://example.com/image2.jpg",
            alt: "Banner 2",
        },
        text: "Second banner",
        createdAt: new Date("2023-11-18"),
        author: "Jane Smith",
    },
    {
        _id: "3",
        image: {
            url: "https://example.com/image3.jpg",
            alt: "Banner 3",
        },
        text: "Third banner",
        createdAt: new Date("2023-11-15"),
        author: "Alice Johnson",
    },
    // Add more objects as needed
];

export default banners;

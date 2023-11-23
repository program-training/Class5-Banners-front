import { BannerInterface } from "../banners/interface/BannerInterface";
import { ProductInterface } from "../banners/interface/ProductInterface";

export const banners: BannerInterface[] = [
    {
        _id: "1",
        title: "Product 1",
        image: {
            url: "https://via.placeholder.com/50",
            alt: "Banner 1",
        },
        text: "On Sale",
        createdAt: "2023-11-20",
        author: "John Doe",
    },
    {
        _id: "2",
        title: "Product 2",

        image: {
            url: "https://via.placeholder.com/50",
            alt: "Banner 2",
        },
        text: "Best Price",
        createdAt: "2023-11-18",
        author: "Jane Smith",
    },
    {
        _id: "3",
        title: "Product 3",

        image: {
            url: "https://via.placeholder.com/50",
            alt: "Banner 3",
        },
        text: "50% OFF!!!",
        createdAt: "2023-11-15",
        author: "Alice Johnson",
    },
    // Add more objects as needed
];

export const sampleProducts: ProductInterface[] = [
    {
        ID: 1,
        title: "Product 1",
        description: "Description for Product 1",
        image: "https://via.placeholder.com/150",
    },
    {
        ID: 2,
        title: "Product 2",
        description: "Description for Product 2",
        image: "https://via.placeholder.com/150",
    },
    {
        ID: 3,
        title: "Product 3",
        description: "Description for Product 3",
        image: "https://via.placeholder.com/150",
    },
    // Add more products as needed
];

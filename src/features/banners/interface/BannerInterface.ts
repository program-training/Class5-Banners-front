export interface BannerInterface {
    _id: string;
    productID: string;
    title: string;
    description: string;
    imageURL: string;
    productURL: string;
    note: string;
    category: string;
    authorID: string;
    createdAt: string;
    updatedAt: string;
}
export const banner: BannerInterface = {
    _id: "656448077c49d67c8df87e5f",
    productID: "7",
    title: "Phone Case",
    description: "Protective case for iPhone 12",
    category: "Electronics",
    imageURL:
        "https://cdn.discordapp.com/attachments/1061944547246088242/1175873553091022889/meir_asulin_phone_case__._Protective_case_for_iPhone_12_10d77e32-9445-4e40-bee0-5233d2eff0bc.png",
    note: "",
    productURL: "https://erp-server-v2.onrender.com/api/shop_inventory/7",
    authorID: "1",
    createdAt: "2023-11-27T07:40:56.011Z",
    updatedAt: "2023-11-27T07:40:56.011Z",
};

console.log(banner.createdAt);

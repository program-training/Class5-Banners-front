import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Product } from "../types/interfaces";
type Props = { selectedProduct: Product };
const BannerCard = ({ selectedProduct }: Props) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia
                component="img"
                height="140"
                image={selectedProduct.image}
                alt={selectedProduct.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {selectedProduct.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {selectedProduct.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default BannerCard;

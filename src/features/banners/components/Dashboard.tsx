import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts";

export default function Dashboard() {
    const series = [{ data: [50, 256, 98, 522, 425, 396, 85, 456, 52] }];

    return (
        <Box sx={{ width: "100%" }}>
            <BarChart height={300} series={series} />
        </Box>
    );
}

import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts";

export default function Dashboard() {
    const series = [{ data: [50, 256, 98, 522, 425, 396, 85, 456, 52] }];
    let height = 0;
    series[0].data.forEach(() => {
        height += 50;
    });

    return (
        <Box sx={{ width: "100%" }}>
            <BarChart height={height} series={series} layout="horizontal" />
        </Box>
    );
}

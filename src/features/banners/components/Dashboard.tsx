import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts";

export default function Dashboard() {
  const series = [
    { data: [10, 256, 98, 522, 425, 396, 85, 456, 52] },
    { data: [10, 45, 345, 45, 45, 33, 346, 3, 888] },
  ];
  let height = 0;
  if (series[0].data && series[1].data) {
    series[0].data.forEach(() => {
      height += 50;
    });
    series[1].data.forEach(() => {
      height += 50;
    });
  }

  return (
    <Box sx={{ width: "100%" }}>
      <BarChart height={height} series={series} layout="horizontal" />
    </Box>
  );
}

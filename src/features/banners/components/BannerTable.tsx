import { Delete, Edit } from "@mui/icons-material";
import {
    TableContainer,
    Box,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
} from "@mui/material";
import { ProductInterface } from "../interface/interfaces";
import { Dispatch, SetStateAction } from "react";
type Props = {
    data: ProductInterface[];
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
    setSelectedBanner: Dispatch<SetStateAction<number | null>>;
};

export const BannerTable = ({
    data,
    setOpenDialog,
    setSelectedBanner,
}: Props) => {
    const handleOpenDeleteDialog = (bannerId: number) => {
        setSelectedBanner(bannerId);
        setOpenDialog(true);
    };

    return (
        <TableContainer component={Box} mt={5} width="80%" alignSelf="center">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Creator</TableCell>
                        <TableCell align="center">Creation Date</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Delete</TableCell>
                        <TableCell align="center">Edit</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((banner) => (
                        <TableRow key={banner.ID}>
                            <TableCell align="center">
                                {/* Display banner image here */}
                                <img
                                    src={banner.image}
                                    alt="Banner"
                                    width="50"
                                    height="50"
                                />
                            </TableCell>
                            <TableCell align="center">
                                {banner.creatorName}
                            </TableCell>
                            <TableCell align="center">
                                {banner.dateOfCreation}
                            </TableCell>
                            <TableCell align="center">{banner.note}</TableCell>
                            <TableCell align="center">
                                <IconButton
                                    onClick={() =>
                                        handleOpenDeleteDialog(banner.ID)
                                    }
                                >
                                    <Delete />
                                </IconButton>
                            </TableCell>
                            <TableCell align="center">
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

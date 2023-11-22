import { Delete, Edit } from "@mui/icons-material";
import {
    styled,
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
// Styled components for TableCell and TableRow
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    textAlign: "center",
    padding: theme.spacing(1),
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
        backgroundColor: theme.palette.action.selected,
    },
}));

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
                        <StyledTableCell align="center">Image</StyledTableCell>
                        <StyledTableCell align="center">
                            Creator
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Creation Date
                        </StyledTableCell>
                        <StyledTableCell align="center">Status</StyledTableCell>
                        <StyledTableCell align="center">Delete</StyledTableCell>
                        <StyledTableCell align="center">Edit</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((banner) => (
                        <StyledTableRow key={banner.ID}>
                            <StyledTableCell align="center">
                                {/* Display banner image here */}
                                <img
                                    src={banner.image}
                                    alt="Banner"
                                    width="50"
                                    height="50"
                                />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {banner.creatorName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {banner.dateOfCreation}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {banner.note}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <IconButton
                                    onClick={() =>
                                        handleOpenDeleteDialog(banner.ID)
                                    }
                                >
                                    <Delete />
                                </IconButton>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <IconButton>
                                    <Edit />
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

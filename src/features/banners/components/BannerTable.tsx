// add column Title

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
import { Dispatch, SetStateAction } from "react";
import { BannerInterface } from "../interface/BannerInterface";
type Props = {
    data: BannerInterface[];
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
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

export const BannerTable = ({ data, setOpenDialog }: Props) => {
    const handleOpenDeleteDialog = () => {
        setOpenDialog(true);
    };

    return (
        <TableContainer component={Box} mt={5} width="80%" alignSelf="center">
            <Table>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Image</StyledTableCell>
                        <StyledTableCell align="center">Title</StyledTableCell>
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
                        <StyledTableRow key={banner._id}>
                            <StyledTableCell align="center">
                                {/* Display banner image here */}
                                <img
                                    src={banner.image.url}
                                    alt={banner.image.alt}
                                    width="50"
                                    height="50"
                                />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {banner.title}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {banner.author}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {String(banner.createdAt)}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {banner.text}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <IconButton
                                    onClick={() => handleOpenDeleteDialog()}
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

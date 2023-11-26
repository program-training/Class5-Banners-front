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
import { useNavigate } from "react-router-dom";

type Props = {
  data: BannerInterface[];
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};

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
  const rows = [
    "Image",
    "Title",
    "Creator",
    "Creation Date",
    "Status",
    "Delete",
    "Edit",
  ];
  const navigate = useNavigate();
  const handleOpenDeleteDialog = () => {
    setOpenDialog(true);
  };

  return (
    <TableContainer component={Box} mt={5} width="80%" alignSelf="center">
      <Table>
        <TableHead>
          <TableRow>
            {rows.map((item, i) => (
              <StyledTableCell align="center" key={i}>
                {item}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((banner) => (
            <StyledTableRow
              onClick={() => navigate(`banners/products/${banner.productID}`)}
              key={banner._id}
            >
              <StyledTableCell align="center">
                <img
                  src={banner.imageURL}
                  alt={banner.title}
                  width="50"
                  height="50"
                />
              </StyledTableCell>
              <StyledTableCell align="center">{banner.title}</StyledTableCell>
              <StyledTableCell align="center">
                {banner.authorID}
              </StyledTableCell>
              <StyledTableCell align="center">
                {String(banner.createdAt)}
              </StyledTableCell>
              <StyledTableCell align="center">
                {banner.description}
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => handleOpenDeleteDialog()}>
                  <Delete />
                </IconButton>
              </StyledTableCell>
              <StyledTableCell align="center">
                <IconButton onClick={() => navigate(`edit/${banner._id}`)}>
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

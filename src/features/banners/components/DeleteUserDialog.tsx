import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
type Props = {
    openDialog: boolean;
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
    
    const handleDeleteBanner = () => {
        axios.delete(`${import.meta.env.VITE_BASE_URL}/api/`)
        setOpenDialog(false);
    };

    return (
        <Dialog open={!!openDialog} onClose={() => setOpenDialog(false)}>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this banner?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDialog(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDeleteBanner} color="secondary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteUserDialog;

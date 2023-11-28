import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from "@mui/material";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { useAppSelector } from "../../../redux/hooks";
type Props = {
    openDialog: boolean;
    setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
    const { token } = useAppSelector((state) => state.user);
    const handleDeleteBanner = () => {
        axios
            .delete(
                `${import.meta.env.VITE_SERVER_HOST}:${
                    import.meta.env.VITE_SERVER_PORT
                }/api/users`,
                {
                    headers: { Authorization: `${token}` },
                }
            )
            .then((res) => console.log(res.data));
        setOpenDialog(false);
    };

    return (
        <Dialog open={!!openDialog} onClose={() => setOpenDialog(false)}>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this account?
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

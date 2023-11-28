import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    CircularProgress,
    Alert,
} from "@mui/material";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { useAppSelector } from "../../../redux/hooks";
type Props = {
    openDialog: string | null;
    setOpenDialog: Dispatch<SetStateAction<string | null>>;
};
const DeleteBannerDialog = ({ openDialog, setOpenDialog }: Props) => {
    const [status, setStatus] = useState<'none' | 'pending' | 'success' | 'error'>('none')

    const user = useAppSelector((state) => state.user);

    const handleDeleteBanner = () => {
        setStatus('pending')
        axios.delete(`${import.meta.env.VITE_BASE_URL}/api/banners/${openDialog}`,
        {headers: {
            Authorization: `${user.token}`,
        }})
        .then(() => setOpenDialog(null))
        .catch(err => {
            console.error(err);
            setStatus('error')
        })
    };

    return (
        <Dialog open={!!openDialog} onClose={() => setOpenDialog(null)}>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this banner?
                </DialogContentText>
                {status === 'error' && <DialogContent>
                    <Alert severity="error">an internal server error had occurred. try again later.</Alert>
                </DialogContent>}
                {status === 'pending' && <CircularProgress />}
            </DialogContent>
            {status !== 'pending' &&  <DialogActions>
                <Button onClick={() => setOpenDialog(null)} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleDeleteBanner} color="secondary">
                    Delete
                </Button>
            </DialogActions>}
        </Dialog>
    );
};

export default DeleteBannerDialog;

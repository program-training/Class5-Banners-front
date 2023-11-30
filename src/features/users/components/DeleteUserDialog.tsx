import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { deleteUserReq } from "../../users/user-slice";
type Props = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
  const dispatch = useAppDispatch();
  const handleDeleteBanner = () => {
    dispatch(deleteUserReq());
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
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
<<<<<<< HEAD:src/features/banners/components/DeleteUserDialog.tsx
import { useAppDispatch } from "../../../redux/hooks";
import { deleteUserReq } from "../../users/user-slice";
=======
import { useAppSelector } from "../../../redux/hooks";
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5:src/features/users/components/DeleteUserDialog.tsx
type Props = {
  openDialog: boolean;
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
};
const DeleteUserDialog = ({ openDialog, setOpenDialog }: Props) => {
<<<<<<< HEAD:src/features/banners/components/DeleteUserDialog.tsx
  const dispatch = useAppDispatch();
  const handleDeleteBanner = () => {
    dispatch(deleteUserReq());
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
=======
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
>>>>>>> bb61d090f79a84011913d86b12b9516dec1a8cb5:src/features/users/components/DeleteUserDialog.tsx
};

export default DeleteUserDialog;

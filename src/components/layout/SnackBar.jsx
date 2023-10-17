import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useContext } from "react";
import { AddCartTheme } from "../../Contexts/AddCartContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackBar() {
  const ctxAddCart = useContext(AddCartTheme);
  // const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    ctxAddCart.setOpen(false);
    ctxAddCart.setAdded(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={ctxAddCart.open}
        autoHideDuration={1200}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Your Product Added In Cart.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={ctxAddCart.added}
        autoHideDuration={1200}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Your Product Is Already In Cart.
        </Alert>
      </Snackbar>
    </Stack>
  );
}
export default SnackBar;

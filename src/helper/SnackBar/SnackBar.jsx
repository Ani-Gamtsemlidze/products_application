import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useProducts } from "../../Contexts/AddCartContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackBar() {
  const { open, handleCloseSnackBar, added } = useProducts();

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        autoHideDuration={1200}
        onClose={handleCloseSnackBar}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Your Product Added In Cart.
        </Alert>
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={added}
        autoHideDuration={1200}
        onClose={handleCloseSnackBar}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Your Product Is Already In Cart.
        </Alert>
      </Snackbar>
    </Stack>
  );
}
export default SnackBar;

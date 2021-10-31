import React from "react";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "20px/15px",
  boxShadow: 24,
  p: 4,
  padding: "5px",
  pb: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const InputLabelProps = {
  shrink: true,
  style: {
    fontWeight: "600",
  }
}

export default function NewClassModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <IconButton
          onClick={onClose}
          sx={{ width: "fit-content", alignSelf: "flex-end" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
          Tạo lớp học mới
        </Typography>
        <TextField
          label="Tên lớp"
          InputLabelProps={InputLabelProps}
          margin="dense"
          size="small"
          sx={{ width: "80%" }}
        ></TextField>
        <TextField
          label="Mô tả"
          InputLabelProps={InputLabelProps}
          margin="dense"
          size="small"
          multiline="true"
          inputProps={{ style: {height: "100px"} }}
          sx={{ width: "80%" }}
        ></TextField>
        <TextField
          label="Giảng viên"
          InputLabelProps={InputLabelProps}
          margin="dense"
          size="small"
          sx={{ width: "80%" }}
        ></TextField>
        <TextField
          label="Số lượng sinh viên tối đa"
          InputLabelProps={InputLabelProps}
          margin="dense"
          size="small"
          sx={{ width: "80%" }}
        ></TextField>
      </Box>
    </Modal>
  );
}

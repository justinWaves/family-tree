import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ChildDialog({
  onSubmit,
  onCancel,
  isOpen,
  childTreeState,
}) {
  const [tempFormData, setTempFormData] = useState(childTreeState);

  const handleFormSubmit = () => {
    onSubmit(tempFormData);
  };

  //   const handleText1Change = ({ target }) => {
  //     setTempFormData([
  //       { ...tempFormData[0], name: target.value },
  //       { ...tempFormData[1] },
  //     ]);
  //   };

  //   const handleText2Change = ({ target }) => {
  //     setTempFormData([
  //       { ...tempFormData[0] },
  //       { ...tempFormData[1], name: target.value },
  //     ]);
  //   };

  console.log(tempFormData);

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogTitle>Add Children</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter names of children 👨‍👩‍👦‍👦</DialogContentText>

        {/* <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Enter Parent 1"
          type="email"
          fullWidth
          variant="standard"
          value={tempFormData[0].name}
          onChange={handleText1Change}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name2"
          label="Enter Parent 2"
          type="email"
          fullWidth
          variant="standard"
          value={tempFormData[1].name}
          onChange={handleText2Change}
        /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} className="text-violet-700">
          Not now
        </Button>
        <Button className="bg-violet-700 text-white" onClick={handleFormSubmit}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

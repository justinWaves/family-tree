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

  const handleTextChange = ({ target }) => {
    setTempFormData([{ ...tempFormData[0], name: target.value }]);
  };

  // const addedChildren = () => {
  //   return (
  //     <TextField
  //       className="my-5"
  //       autoFocus
  //       margin="dense"
  //       id="name"
  //       label="Enter Child's Name"
  //       type="email"
  //       fullWidth
  //       variant="standard"
  //       value={tempFormData[1].name}
  //       onChange={handleTextChange}
  //     />
  //   );
  // };

  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogTitle>Add Children</DialogTitle>
      <DialogContent>
        <DialogContentText>Enter names of children 👨‍👩‍👦‍👦</DialogContentText>

        <TextField
          className="my-5"
          autoFocus
          margin="dense"
          id="name"
          label="Enter Child's Name"
          type="email"
          fullWidth
          variant="standard"
          value={tempFormData[0].name}
          onChange={handleTextChange}
        />
        {/* {addedChildren} */}
      </DialogContent>
      <DialogActions>
        <div className="flex flex-col">
          <div>
            <Button className="bg-pink-500 hover:bg-violet-500 text-white px-3 rounded mb-5 transition-all">
              <p className="mr-3">👼 </p>
              <p className="animate-pulse text-pink-100">Add Child</p>
              <p className="ml-3">👼 </p>
            </Button>
          </div>
          <div>
            <Button
              onClick={onCancel}
              className="text-violet-700 hover:bg-violet-100"
            >
              Not now
            </Button>
            <Button
              className="bg-violet-700 text-white hover:text-violet-700 hover:bg-violet-300"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}

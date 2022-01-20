import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface Parent {
  id: number;
  name: string;
  hasKids: boolean;
}

interface RootParentTypes extends Array<Parent> {}

export default function InitModal({}) {
  const initRootValues = [
    { id: 0, name: "", hasKids: null },
    { id: 1, name: "", hasKids: null },
  ];

  const [open, setOpen] = useState<boolean>(true);
  const [rootParents, setRootParents] =
    useState<RootParentTypes>(initRootValues);

  const handleModalOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSubmit = (): void => {
    const parentState = [...rootParents];
    setRootParents([
      { ...parentState[0], name: rootParents[0].name },
      { ...parentState[1], name: rootParents[1].name },
    ]);
    setOpen(false);
  };

  return (
    <div className="pt-10">
      <Button
        variant="outlined"
        onClick={handleModalOpen}
        className="text-violet-700 border-violet-700"
      >
        Change Root Parents
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Root Parents</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Every Tree has a root. Go as far back as you want to create your
            family tree, grandparents, great grandparents, super great
            grandparents etc.
          </DialogContentText>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Parent 1"
            type="email"
            fullWidth
            variant="standard"
            value={rootParents[0].name}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name2"
            label="Enter Parent 2"
            type="email"
            fullWidth
            variant="standard"
            value={rootParents[1].name}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="text-violet-700">
            Not now
          </Button>
          <Button className="bg-violet-700 text-white" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

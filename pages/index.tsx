import React, { useState } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Tree from "../components/Tree";
import RootDialog from "../components/RootDialog";
import { Button } from "@mui/material";
import ChildDialog from "../components/ChildDialog";

const IndexPage: NextPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [isChildDialogOpen, setIsChildDialogOpen] = useState(false);
  const [treeState, setTreeState] = useState([{ name: "" }, { name: "" }]);
  const [childTreeState, setChildTreeState] = useState([{}]);

  const handleSubmit = (newFormData) => {
    setTreeState(newFormData);
    console.log(newFormData);
    setIsDialogOpen(false);
  };

  const handleButtonClick = () => {
    setIsDialogOpen(true);
  };
  const handleCancel = () => {
    setIsDialogOpen(false);
    setIsChildDialogOpen(false);
  };

  const handleOpenChildDialog = () => {
    setIsChildDialogOpen(true);
  };

  return (
    <>
      <RootDialog
        isOpen={isDialogOpen}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        treeState={treeState}
      />

      <ChildDialog
        isOpen={isChildDialogOpen}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        childTreeState={childTreeState}
      />

      <Layout title="Family Tree ">
        <div className="w-screen h-screen bg-blue-100">
          <div className="flex flex-col items-center p-10 ">
            <h1 className="text-5xl font-bold "> 🌴👨‍👩‍👦 Family Tree 👨‍👩‍👧‍👧🌴</h1>
            <Button
              variant="outlined"
              onClick={handleButtonClick}
              className="text-violet-700 border-violet-700 mt-10"
            >
              Change Root Humans
            </Button>
            <Tree state={treeState} childDialogIsOpen={handleOpenChildDialog} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

import React, { useState } from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Tree from "../components/Tree";
import RootDialog from "../components/RootDialog";
import { Button } from "@mui/material";

const IndexPage: NextPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [treeState, setTreeState] = useState([{ name: "" }, { name: "" }]);

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
  };

  return (
    <>
      <RootDialog
        isOpen={isDialogOpen}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        treeState={treeState}
      />
      <Layout title="Home | Next.js + TypeScript Example">
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
            <Tree state={treeState} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

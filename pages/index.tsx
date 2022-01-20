import * as React from "react";
import Layout from "../components/Layout";
import { NextPage } from "next";
import Tree from "../components/Tree";

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div className="w-screen h-screen bg-blue-100">
        <div className="flex flex-col items-center p-10 ">
          <h1 className="text-5xl font-bold "> 🌴👨‍👩‍👦 Family Tree 👨‍👩‍👧‍👧🌴</h1>
          <Tree />
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

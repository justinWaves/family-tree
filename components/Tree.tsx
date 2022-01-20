import React, { useState } from "react";
import InitModal from "./InitModal";

function Tree() {
  const [rootParents, setRootParents] = useState([
    { id: 0, name: "", hasKids: null, hasParter: null },
    { id: 1, name: "", hasKids: null, hasParter: null },
  ]);

  return (
    <>
      <InitModal />
      <div className=" h-60  mt-20 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-auto items-center rounded-lg  cursor-pointer flex flex-col justify-between ">
        <div className="flex flex-row  ">
          <div className="rounded-full h-40  w-40 bg-black m-4 animate-none">
            <img
              src="https://avatars.dicebear.com/api/big-smile/:joe.svg"
              alt=""
              className=""
            />
          </div>
          <div className="rounded-full h-40  w-40 bg-black m-4 animate-none">
            <img
              src={`https://avatars.dicebear.com/api/big-smile/:seed.svg`}
              alt=""
              className=""
            />
          </div>
        </div>
        <p className="text-2xl animate-pulse pb-10 px-10 ">
          click to add children
        </p>
      </div>
    </>
  );
}

export default Tree;

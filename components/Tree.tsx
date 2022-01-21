import React, { useState } from "react";

interface Parent {
  id: number;
  name: string;
  hasKids: boolean;
}

interface RootParentTypes extends Array<Parent> {}

function Tree({ state }) {
  const rootHumans = state.map(({ id, name }) => (
    <li key={id}>
      <div className="rounded-full h-40  w-40 bg-black m-4 ">
        <img
          src={`https://avatars.dicebear.com/api/big-smile/:${name}.svg`}
          alt=""
          className=""
        />
        <h1 className="text-black flex justify-center text-xl pt-1">{name}</h1>
      </div>
    </li>
  ));

  console.log(state);

  return (
    <div className=" h-64  mt-20 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-auto items-center rounded-lg  cursor-pointer flex flex-col justify-between ">
      <ul className="flex flex-row">{rootHumans}</ul>

      <p className="text-2xl animate-pulse pb-10 px-10 pt-5 ">
        click to add children
      </p>
    </div>
  );
}

export default Tree;

import React from "react";
import Link from "next/link";
import SearchBar from "../SearchBar";

const inicio = () => {
  return (
    <div>
      <div className=" container dream ">
        <h1 className="text-center font1">e-commerce Unid</h1>
        <p className="text-center font2">
          donde encontraras lo que nececites
        </p>

        <div className="mid">
        <SearchBar/>

        </div>
      </div>
    </div>
  );
};

export default inicio;

import React from "react";
import notFound from "../../assets/notFoundT.png";

export default function NoMatch() {
  return (
    <div className="flex justify-center pt-5">
      <img src={notFound} alt="notFoundPicture" className="w-5/6 h-1/2 p-4" />
    </div>
  );
}

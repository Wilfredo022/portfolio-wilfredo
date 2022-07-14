import React from "react";
import { Navbar } from "../components/Navbar";

export const LayoutPort = ({ children }) => {
  return (
    <div className="layoutPort-container">
      {children}
      <Navbar />
    </div>
  );
};

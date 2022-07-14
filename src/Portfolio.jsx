import { Port_Router } from "./Router/Port_Router";
import { BrowserRouter } from "react-router-dom";

export const Portfolio = () => {
  return (
    <>
      <BrowserRouter>
        <Port_Router />
      </BrowserRouter>
    </>
  );
};

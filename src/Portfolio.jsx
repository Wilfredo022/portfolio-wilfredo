import { Port_Router } from "./Router/Port_Router";
import { BrowserRouter, HashRouter } from "react-router-dom";

export const Portfolio = () => {
  return (
    <>
      {/* <BrowserRouter> */}
      <HashRouter>
        <Port_Router />
      </HashRouter>
      {/* </BrowserRouter> */}
    </>
  );
};

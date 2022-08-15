import { Routes, Route } from "react-router-dom";
import {
  Contact,
  Home,
  Projects,
  Services,
  Skills,
} from "../portfolio/components/";
import { LayoutPort } from "../portfolio/layout/LayoutPort";

export const Port_Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/portfolio-wilfredo/*"
          element={
            <LayoutPort>
              <Home />
            </LayoutPort>
          }
        />
        <Route
          path="/"
          element={
            <LayoutPort>
              <Home />
            </LayoutPort>
          }
        />

        <Route
          path="/services/*"
          element={
            <LayoutPort>
              <Services />
            </LayoutPort>
          }
        />

        <Route
          path="/skills/*"
          element={
            <LayoutPort>
              <Skills />
            </LayoutPort>
          }
        />

        <Route
          path="/projects/*"
          element={
            <LayoutPort>
              <Projects />
            </LayoutPort>
          }
        />
        <Route
          path="/contact/*"
          element={
            <LayoutPort>
              <Contact />
            </LayoutPort>
          }
        />
        <Route
          path="/*"
          element={
            <LayoutPort>
              <Home />
            </LayoutPort>
          }
        />
      </Routes>
    </>
  );
};

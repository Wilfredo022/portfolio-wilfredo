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
          index
          element={
            <LayoutPort>
              <Home />
            </LayoutPort>
          }
        />

        <Route
          path="skills"
          element={
            <LayoutPort>
              <Skills />
            </LayoutPort>
          }
        />

        <Route
          path="projects"
          element={
            <LayoutPort>
              <Projects />
            </LayoutPort>
          }
        />
        <Route
          path="studies"
          element={
            <LayoutPort>
              <Services />
            </LayoutPort>
          }
        />
        <Route
          path="contact"
          element={
            <LayoutPort>
              <Contact />
            </LayoutPort>
          }
        />
      </Routes>
    </>
  );
};

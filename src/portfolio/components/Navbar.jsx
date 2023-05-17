import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="container">
        <NavLink to="/">
          <span className="icon-nav">
            <ion-icon name="home-outline"></ion-icon>
          </span>
        </NavLink>

     {/*    <span className="modal">Inicio</span> */}
      </div>

      <div className="container">
        <NavLink to="/skills">
          <span className="icon-nav">
            <ion-icon name="code-slash-outline"></ion-icon>
          </span>
        </NavLink>
        {/* <span className="modal">Habilidades</span> */}
      </div>

      <div className="container">
        <NavLink to="/projects">
          <span className="icon-nav">
            <ion-icon name="briefcase-outline"></ion-icon>
          </span>
        </NavLink>
       {/*  <span className="modal">Proyectos</span> */}
      </div>

      <div className="container">
        <NavLink to="/services">
          <span className="icon-nav">
            <ion-icon name="shield-checkmark-outline"></ion-icon>
          </span>
        </NavLink>
        {/* <span className="modal">Servicios</span> */}
      </div>

      <div className="container">
        <NavLink to="/contact">
          <span className="icon-nav">
            <ion-icon name="mail-outline"></ion-icon>
          </span>
        </NavLink>
        {/* <span className="modal">Contacto</span> */}
      </div>
    </nav>
  );
};

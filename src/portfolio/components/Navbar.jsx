import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="container">
        <NavLink to="/">
          <i className="fas fa-house"></i>
        </NavLink>

        <span className="modal">Inicio</span>
      </div>

      <div className="container">
        <NavLink to="/skills">
          <i className="fas fa-code"></i>
        </NavLink>
        <span className="modal">Habilidades</span>
      </div>

      <div className="container">
        <NavLink to="/projects">
          <i className="fas fa-briefcase"></i>
        </NavLink>
        <span className="modal">Proyectos</span>
      </div>

      <div className="container">
        <NavLink to="/services">
          <i className="fa-solid fa-laptop-code"></i>
        </NavLink>
        <span className="modal">Servicios</span>
      </div>

      <div className="container">
        <NavLink to="/contact">
          <i className="fas fa-address-book"></i>
        </NavLink>
        <span className="modal">Contacto</span>
      </div>
    </nav>
  );
};

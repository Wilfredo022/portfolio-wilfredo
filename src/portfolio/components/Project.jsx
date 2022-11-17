import { useState } from "react";

export const Project = ({ project }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div key={project.title} className='projects__card'>
      <div className='projects__card-img'>
        <img src={project.img} alt={project.title} width='200px' />
      </div>
      <div className='card-title'>
        <h3>{project.title}</h3>
        <button onClick={handleClick} className='btn-card'>
          {show ? (
            <ion-icon name='caret-up-outline'></ion-icon>
          ) : (
            <ion-icon name='caret-down-outline'></ion-icon>
          )}
        </button>
      </div>

      {show && (
        <div
          className={
            show
              ? "projects__card-info card-active animate__animated animate__pulse"
              : "projects__card-info"
          }
        >
          <p>{project.description}</p>

          <div className='projects__card-info-tech'>
            {project.tech.map((t) => {
              return <span key={t}>{t}</span>;
            })}
          </div>
          <div className='projects__card-links'>
            {project.web !== null && (
              <a href={project.web} target='_blank'>
                <span>
                  <ion-icon name='desktop-outline'></ion-icon>
                </span>
                Visitar
              </a>
            )}

            {project.gitHub !== null && (
              <a href={project.gitHub} target='_blank'>
                <span>
                  <ion-icon name='logo-github'></ion-icon>
                </span>
                GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export const Projects = () => {
  const data = [
    {
      title: "Red social Level",
      description:
        "Interfaz web de una red social, donde puedes crear publicaciones, buscar amigos, y personalizar tu perfil de usuario.",
      img: "./projects/login-level.png",
      web: "https://social-level.netlify.app",
      gitHub: null,
      tech: ["React", "Javascript", "Sass", "Firebase", "Redux"],
    },
    {
      title: "Journal App",
      description:
        "Aplicación web donde puedes guardar tus experiencias diarias y tener tus vivencias en un lugar seguro.",
      img: "./projects/journal.png",
      web: "https://journal-app-wil.netlify.app/",
      gitHub: "https://github.com/Wilfredo022/journalApp",
      tech: ["React", "Javascript", "MUI", "Firebase", "Redux"],
    },
    {
      title: "Website Wilfredo",
      description:
        "Website propio donde doy a conocer mis proyectos, servicios y enlaces de contacto.",
      img: "./projects/portfolio.png",
      web: null,
      gitHub: "https://github.com/Wilfredo022/portfolio-wilfredo",
      tech: ["React", "Javascript", "Sass"],
    },
  ];
  return (
    <div className="container-section animate__animated animate__slideInUp">
      <h1 className="title">Proyectos</h1>

      <div className="projects__container">
        {data.map((project) => {
          return (
            <div key={project.title} className="projects__card">
              {/* <div className="projects__card-title">
                
              </div> */}
              <div className="projects__card-img">
                <img src={project.img} alt={project.title} width="200px" />
              </div>

              <div className="projects__card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="projects__card-info-tech">
                  {project.tech.map((t) => {
                    return <span key={t}>{t}</span>;
                  })}
                </div>
                <div className="projects__card-links">
                  {project.web !== null && (
                    <a href={project.web} target="_blank">
                      <span>
                        <ion-icon name="desktop-outline"></ion-icon>
                      </span>
                      Visitar
                    </a>
                  )}

                  {project.gitHub !== null && (
                    <a href={project.gitHub} target="_blank">
                      <span>
                        <ion-icon name="logo-github"></ion-icon>
                      </span>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

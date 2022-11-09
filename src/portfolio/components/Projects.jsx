import { Project } from "./Project";

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
      title: "Minicraft",
      description:
        "Mini juego de apilar cubos y hacer construcciones, parecido a minecraft, puedes apilar o eliminar cubos, ademas de guardar el progreso en la memoria del navegador o restaurar el plano sin cubos",
      img: "./projects/minicraft.webp",
      web: "https://minicraft.netlify.app/",
      gitHub: null,
      tech: ["React", "Javascript", "Css", "Three.js"],
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
    <div className='container-section animate__animated animate__slideInUp'>
      <h1 className='title'>Proyectos</h1>

      <div className='projects__container'>
        {data.map((project) => {
          return <Project project={project} />;
        })}
      </div>
    </div>
  );
};

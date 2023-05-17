export const Skills = () => {
  const styleFront = {
    backgroundImage: `url("https://i.ibb.co/xmvtJZG/1.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  };

  const styleBack = {
    backgroundImage: `url("https://i.ibb.co/gVtyvTd/2.jpg")`,
  };

  const frontend = [
    {
      skill: "HTML5",
      img: "./html.png",
    },
    {
      skill: "CSS3",
      img: "./css.png",
    },
    {
      skill: "Sass",
      img: "./sass.svg",
    },
    {
      skill: "Jquery",
      img: "./jquery.svg",
    },
    {
      skill: "Bootstrap",
      img: "./bootstrap1.png",
    },
    {
      skill: "Javascript",
      img: "./js.png",
    },
    {
      skill: "Typescript",
      img: "./typescript-icon.svg",
    },
    {
      skill: "React",
      img: "./react.svg",
    },
    {
      skill: "Vue",
      img: "./vue.svg",
    },
    {
      skill: "Redux",
      img: "./redux.png",
    },
    {
      skill: "Git",
      img: "./git.png",
    },
    {
      skill: "Github",
      img: "./github1.png",
    },
  ];

  const backend = [
    {
      skill: "Node.js",
      img: "./nodejs.svg",
    },
    {
      skill: "Python",
      img: "./python.svg",
    },
    {
      skill: "Express.js",
      img: "./expresss.png",
    },
    {
      skill: "Firebase",
      img: "./firebase.png",
    },
  ];

  return (
    <div className="container-section animate__animated animate__slideInUp">
      <div className="skills__container">
        <section className="section-frontend" style={styleFront}>
          <h3>Frontend</h3>
          <div className="section-skills">
            {frontend.map((f) => {
              return (
                <div className="section-skill" key={f.skill}>
                  <h4>{f.skill}</h4>
                  <div className='section-skill-container-img'>
                  <img src={f.img} alt={f.skill} width="60px" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-backend" style={styleBack}>
          <h3>Backend</h3>
          <div className="section-skills">
            {backend.map((f) => {
              return (
                <div className="section-skill" key={f.skill}>
                  <h4>{f.skill}</h4>
                  <div className='section-skill-container-img'>
                  <img src={f.img} alt={f.skill} width="60px" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

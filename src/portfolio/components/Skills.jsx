import imgHtml from "/html.png";
import imgCss from "/css.png";
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

  return (
    <div className="container-section animate__animated animate__slideInUp">
      <div className="skills__container">
        <section className="section-frontend" style={styleFront}>
          <h3>Frontend</h3>
          <div className="section-skills">
            <div>
              <h4>
                <i className="fas fa-check-circle"></i> HTML5
              </h4>
              <img src={imgHtml} alt="" width="100px" />
            </div>
            <div>
              <h4>
                <i className="fas fa-check-circle"></i> CSS3
              </h4>
              <img src={imgCss} alt="" width="100px" />
            </div>
            <h4>
              <i className="fas fa-check-circle"></i> CSS / SASS
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Javascript
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Typescript
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Jquery
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Bootstrap
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> React / Redux
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Git / Github
            </h4>
          </div>
        </section>

        <section className="section-backend" style={styleBack}>
          <h3>Backend</h3>
          <div className="section-skills">
            <h4>
              <i className="fas fa-check-circle"></i> NodeJS
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Express
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Firebase
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="container-secction animate__animated animate__slideInUp">
      <h1 className="title">My habilities</h1>

      <div className="skills__container">
        <section className="section-frontend">
          <h3>Frontend</h3>
          <div className="section-skills">
            <h4>
              <i className="fas fa-check-circle"></i> HTML
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> CSS / SASS
            </h4>
            <h4>
              <i className="fas fa-check-circle"></i> Javascript
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
              <i className="fas fa-check-circle"></i> Git
            </h4>
          </div>
        </section>

        <section className="section-backend">
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

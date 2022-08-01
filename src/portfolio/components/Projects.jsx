export const Projects = () => {
  return (
    <div className="container-secction animate__animated animate__slideInUp">
      <h1 className="title">Projects</h1>

      <div className="projects__container">
        <div className="projects__card">
          <div className="projects__card-img">
            <div className="wmovies"></div>
          </div>
          <div className="projects__card-info">
            <h2>Wmovies</h2>
            <p className="card-info-p">
              Website with information about movies and tv shows, using
              <span> themoviedb</span> api.
            </p>

            <div className="card-info-tech">
              <p>created using: </p>
              <span>React</span> <span>Redux</span>
              <span>Sass</span>
            </div>
          </div>

          <div className="projects__buttons">
            <a href="https://wilmovies.netlify.app/" target="_blank">
              See
            </a>

            <a href="https://wilmovies.netlify.app/" target="_blank">
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

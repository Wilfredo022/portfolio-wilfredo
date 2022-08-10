export const Projects = () => {
  const styleWmovies = {
    backgroundImage: `url("https://i.ibb.co/7Nq485Z/wmovies.webp")`,
  };
  const styleJournal = {
    backgroundImage: `url("https://i.ibb.co/jT4PRhz/journal-App.png")`,
  };

  return (
    <div className="container-secction animate__animated animate__slideInUp">
      <h1 className="title">Projects</h1>

      <div className="projects__container">
        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleWmovies}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>Wmovies</h2>
            <p className="card-info-p">
              Website with information about movies and tv shows, using
              <span> themoviedb</span> api.
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>created using: </p>
              <span>React</span> <span>Redux</span>
              <span>Sass</span>
            </div>
            <div className="projects__buttons">
              <a href="https://wilmovies.netlify.app/" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>

              <a href="https://github.com/Wilfredo022/wmovies" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="projects__card">
          {" "}
          {/* project card */}
          <div className="projects__card-img">
            {" "}
            {/* project card img */}
            <div className="wmovies" style={styleJournal}></div>
          </div>
          <div className="projects__card-info">
            {" "}
            {/* project card info */}
            <h2>JournalApp</h2>
            <p className="card-info-p">
              Application you can save your daily experiences
            </p>
            <div className="card-info-tech">
              {" "}
              {/* project card info tech */}
              <p>created using: </p>
              <span>React</span> <span>Redux</span>
              <span>Firebase</span> <span>Material UI</span>
            </div>
            <div className="projects__buttons">
              <a href="https://journal-app-wil.netlify.app/" target="_blank">
                <i className="fas fa-window-maximize"></i>
              </a>

              <a
                href="https://github.com/Wilfredo022/journalApp"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

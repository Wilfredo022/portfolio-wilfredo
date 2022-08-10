export const Home = () => {
  return (
    <div className="home__container">
      <nav>
        <h3>Wilfredo Zapata</h3>
      </nav>

      <div className="home__links-social">
        <div className="home__links-social-networks">
          <a href="https://github.com/Wilfredo022" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </div>

        <div className="home__links-social-networks">
          <a href="https://www.linkedin.com/in/wil3a8a36246/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="home__links-social-networks">
          <a
            href="https://www.facebook.com/wilfredo.zapata.7967"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>

      <div className="home__container-elements animate__animated animate__slideInUp">
        <div className="home__title">
          <h2>
            Hi, I'm <br /> <span>Wilfredo</span> <br /> Frontend developer
          </h2>
        </div>

        <div className="home__button-cv">
          <button type="">
            <a
              href="https://drive.google.com/file/d/19MlZbC33YdXBbz0ZyLFe6oICsYgPt7LE/view"
              download="CV-WilfredoZapata.pdf"
              target="_blank"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
      <div className="home__img animate__animated animate__slideInUp">
        <div className="home__circle">
          <img
            src="https://i.ibb.co/M9qsMct/user.png"
            alt="user"
            width="150px"
            height="150px"
          />
        </div>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="home__container">
      <nav>
        <h3>Wilfredo Zapata</h3>
      </nav>

      <div className="home__container-elements animate__animated animate__slideInUp">
        <div className="home__title">
          <h2>
            Hi, I'm <br /> <span>Wilfredo</span> <br /> Frontend developer
          </h2>
        </div>

        <div className="home__button-cv">
          <button type="">Download CV</button>
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

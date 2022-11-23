export const Home = () => {
  return (
    <div className='home__container'>
      <nav>
        <h3>Wilfredo Zapata</h3>
      </nav>

      <div className='home__links-social'>
        <div className='home__links-social-networks'>
          <a href='https://github.com/Wilfredo022' target='_blank'>
            <span>
              <ion-icon name='logo-github'></ion-icon>
            </span>
          </a>
        </div>

        <div className='home__links-social-networks'>
          <a href='https://www.linkedin.com/in/wilfredo-zapata' target='_blank'>
            <span>
              <ion-icon name='logo-linkedin'></ion-icon>
            </span>
          </a>
        </div>

        <div className='home__links-social-networks'>
          <a
            href='https://www.facebook.com/wilfredo.zapata.7967'
            target='_blank'
          >
            <span>
              <ion-icon name='logo-facebook'></ion-icon>
            </span>
          </a>
        </div>
      </div>

      <div className='home__container-elements animate__animated animate__slideInUp'>
        <div className='home__title'>
          <h2>
            Hola soy
            <br /> <span>Wilfredo</span> <br /> Frontend developer
          </h2>
        </div>

        <div className='home__button-cv'>
          <button type=''>
            <a
              href='https://drive.google.com/file/u/1/d/1qiI0QBdfK6LGmyMsqa5DnSbOzTeIjYvQ/view'
              target='_blank'
            >
              Resumen CV
            </a>
          </button>
        </div>
      </div>
      <div className='home__img animate__animated animate__slideInUp'>
        <div className='home__circle'>
          <img
            src='https://i.ibb.co/M9qsMct/user.png'
            alt='user'
            width='150px'
            height='150px'
          />
        </div>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <div className="services__container animate__animated animate__slideInUp">
      <h1 className="title">Servicios</h1>

      <div className="services__container-info">
        <h2>
          Puedo desarrollar interfaces de usuario altamente intuitivas y con
          diseños únicos y agradables.
        </h2>

        <div className="services__container-card">
          <div className="services__card">
            <span>
              <ion-icon name="bulb-outline"></ion-icon>
            </span>
            <h3>Páginas web estáticas y dinámicas</h3>
          </div>

          <div className="services__card">
            <span>
              <ion-icon name="star-outline"></ion-icon>
            </span>
            <h3>Aplicaciones web</h3>
          </div>

          <div className="services__card">
            <span>
              <ion-icon name="cog-outline"></ion-icon>
            </span>
            <h3>Mantenimiento de páginas y aplicaciones web</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

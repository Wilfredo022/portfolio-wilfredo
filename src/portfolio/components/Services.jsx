export const Services = () => {
  return (
    <div className="services__container animate__animated animate__slideInUp">
      <h1 className="title">Services</h1>

      <div className="services__container-info">
        <h2>
          I can develop highly intuitive user interfaces with unique designs.
        </h2>

        <div className="services__container-card">
          <div className="services__card">
            <i className="fas fa-lightbulb"></i>
            <h3>Dynamic and static Web pages</h3>
          </div>

          <div className="services__card">
            <i className="fas fa-disease"></i>
            <h3>Web applications</h3>
          </div>

          <div className="services__card">
            <i className="fas fa-cogs"></i>
            <h3>Maintenance of web pages</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

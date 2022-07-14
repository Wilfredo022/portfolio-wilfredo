import React from "react";

export const Contact = () => {
  return (
    <div className="container-secction animate__animated animate__slideInUp">
      <div className="header-title">
        <span>Get in touch</span>
        <h1 className="title">Contact me</h1>
      </div>

      <div className="container-contact">
        <div className="sidebar">
          <h3>Talk to me</h3>
          <div className="sidebar-card">
            <i className="fas fa-envelope"></i>
            <p className="sidebar-card-title">Email</p>
            <p className="sidebar-card-info">aguszapata2000@gmail.com</p>
            <a href="">
              Write me <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="sidebar-card">
            <i className="fab fa-linkedin"></i>
            <p className="sidebar-card-title">Linkedin</p>
            <p className="sidebar-card-info">???</p>
            <a href="">
              Write me <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="sidebar-card">
            <i class="fab fa-facebook-messenger"></i>
            <p className="sidebar-card-title">Messenger</p>
            <p className="sidebar-card-info">
              facebook.com/wilfredo.zapata.7967
            </p>
            <a
              href="https://www.facebook.com/wilfredo.zapata.7967"
              target="_blank"
              referrer="noreferrer"
            >
              Write me <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>

        <div className="form-contact">
          <h3>Write me your project</h3>
          <form>
            <input type="text" placeholder="Insert your name" />

            <input type="email" placeholder="Insert your Email" />

            <textarea type="text" placeholder="Write your Project" />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

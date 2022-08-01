import { useState } from "react";
import { isEmail } from "validator";

export const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const [formValues, setFormValues] = useState(initialValues);

  const [valor, setValor] = useState("");

  const { name, email, message } = formValues;

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validEmail = isEmail(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //todo: mejorar validacion de email
    if (name === "" || !validEmail || message === "") {
      return;
    }

    try {
      const send = await fetch(
        "https://formsubmit.co/ajax/aguszapata2000@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        }
      );

      const res = await send.json();

      setFormValues(initialValues);

      setValor("send");
    } catch (error) {
      console.log(error);
    }
  };

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
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHCwfFqrKbHqBFQrcjZjvKPlglcNKThcGjHlznfRnVMglTQWNXcrdWGGxnRdVfxlDrLV"
              target="_blank"
            >
              Write me <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          {/* <div className="sidebar-card">
            <i className="fab fa-linkedin"></i>
            <p className="sidebar-card-title">LinkedIn</p>
            <p className="sidebar-card-info">???</p>
            <a href="">
              Write me <i className="fas fa-arrow-right"></i>
            </a>
          </div> */}
          <div className="sidebar-card">
            <i className="fab fa-facebook-messenger"></i>
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
          <form
            action="https://formsubmit.co/aguszapata2000@gmail.com"
            method="POST"
          >
            <input
              type="text"
              placeholder="Insert your name"
              name="name"
              id="name"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
              required
            />

            <input
              type="email"
              placeholder="Insert your Email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={handleInputChange}
              required
            />

            <textarea
              type="text"
              placeholder="Write your Project"
              name="message"
              id="message"
              autoComplete="off"
              value={message}
              onChange={handleInputChange}
              required
            />

            {/*//TODO: cambiar el color al enviar los datos */}
            <button className={valor} onClick={(e) => handleSubmit(e)}>
              {valor != "send" ? (
                "Send"
              ) : (
                <span>
                  Message sent<i className="fa-solid fa-paper-plane"></i>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

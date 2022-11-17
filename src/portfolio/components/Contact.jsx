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
    <div className='container-secction animate__animated animate__slideInUp'>
      <div className='header-title'>
        {/* <span>Get in touch</span> */}
        <h1 className='title'>Contáctame!</h1>
      </div>

      <div className='container-contact'>
        <div className='sidebar'>
          <h3>Háblame </h3>
          <div className='sidebar-card'>
            <span>
              <ion-icon name='mail-outline'></ion-icon>
            </span>
            <p className='sidebar-card-title'>Email</p>
            <p className='sidebar-card-info'>aguszapata2000@gmail.com</p>
            <a
              href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvlHCwfFqrKbHqBFQrcjZjvKPlglcNKThcGjHlznfRnVMglTQWNXcrdWGGxnRdVfxlDrLV'
              target='_blank'
            >
              Escríbeme!
            </a>
          </div>
          <div className='sidebar-card'>
            <span>
              <ion-icon name='logo-linkedin'></ion-icon>
            </span>
            <p className='sidebar-card-title'>LinkedIn</p>
            <p className='sidebar-card-info'>linkedin.com/in/wilfredo-zapata</p>
            <a
              href='https://www.linkedin.com/in/wilfredo-zapata'
              target='_blank'
            >
              Escríbeme!
            </a>
          </div>
          <div className='sidebar-card'>
            <span>
              <ion-icon name='logo-facebook'></ion-icon>
            </span>
            <p className='sidebar-card-title'>Messenger</p>
            <p className='sidebar-card-info'>
              facebook.com/wilfredo.zapata.7967
            </p>
            <a
              href='https://www.facebook.com/wilfredo.zapata.7967'
              target='_blank'
              referrer='noreferrer'
            >
              Escríbeme!
            </a>
          </div>
        </div>

        <div className='form-contact'>
          <h3>Háblame de tu proyecto</h3>
          <form
            action='https://formsubmit.co/aguszapata2000@gmail.com'
            method='POST'
          >
            <input
              type='text'
              placeholder='Escribe tu nombre'
              name='name'
              id='name'
              autoComplete='off'
              value={name}
              onChange={handleInputChange}
              required
            />

            <input
              type='email'
              placeholder='Escribe tu Email'
              name='email'
              id='email'
              autoComplete='off'
              value={email}
              onChange={handleInputChange}
              required
            />

            <textarea
              type='text'
              placeholder='Háblame de tu proyecto'
              name='message'
              id='message'
              autoComplete='off'
              value={message}
              onChange={handleInputChange}
              required
            />

            <button className={valor} onClick={(e) => handleSubmit(e)}>
              {valor != "send" ? (
                "Enviar"
              ) : (
                <span>
                  Mensaje enviado <i className='fa-solid fa-paper-plane'></i>
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

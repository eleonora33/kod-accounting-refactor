import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Iframe from 'react-iframe';
import './ContactUs.css';
import Navbar from './Navbar';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_public_key')
      .then((result) => {
        console.log('Email sent:', result.text);
        alert("Пораката е успешно испратена!");
      }, (error) => {
        console.log('Email error:', error.text);
        alert("Настана грешка. Обидете се повторно.");
      });

    form.current.reset();
  };

  return (
    <div>
      <div className="contact_section layout_padding" id="contactSection">
        <div className="container-fluid">
          <h1 className="what_taital">Контактирајте нѐ</h1>
          <p className="amet_text">
            Вашата визија е нашата мисија. Стапете во контакт со нас и дозволете ни да го оформиме вашиот финансиски успех и стратегија заедно.
          </p>
          <div className="contact_section2">
            <div className="row">
              <div className="col-md-6 padding_left_0">
                <form className="mail_section" ref={form} onSubmit={sendEmail}>
                  <div className="input_icon_wrapper">
                    <i className="fas fa-user"></i>
                    <input type="text" className="mail_text_1" placeholder="Име и презиме" name="Name" required />
                  </div>

                  <div className="input_icon_wrapper">
                    <i className="fas fa-phone"></i>
                    <input type="text" className="mail_text_1" placeholder="Телефон" name="Phone" />
                  </div>

                  <div className="input_icon_wrapper">
                    <i className="fas fa-envelope"></i>
                    <input type="email" className="mail_text_1" placeholder="Email" name="Email" required />
                  </div>

                  <div className="input_icon_wrapper">
  <i className="fas fa-comment-alt icon"></i>
  <textarea
    className="massage_text"
    placeholder="Вашата порака"
    name="Message"
    rows="5"
    required
  ></textarea>
</div>



                  <div className="send_bt">
                    <button type="submit">Прати</button>
                  </div>
                </form>
              </div>

              <div className="col-md-6 padding_0">
                <div className="map-responsive">
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2964.7151580143577!2d21.42028547583037!3d42.00638827122798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smk!4v1689025525034!5m2!1sen!2smk"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

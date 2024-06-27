import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qe4mnip", "template_a2nf3hs", form.current, {
        publicKey: "hNvyrgXG1ZetWe3EJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <h2 style={{ margin: "20px" }}>GET IN TOUCH</h2>
      <div className="details">
        <div className="details1">
          <div className="mail">
            <i class="fa-solid fa-envelope"></i>
            <div className="mail-content">
              <h5>Email Me</h5>
              <p>mitalibhawsar2017@gmail.com</p>
            </div>
          </div>
          <div className="call">
            <i class="fa-solid fa-phone"></i>
            <div className="call-content">
              <h5>Call Me</h5>
              <p>+91 7828951377</p>
            </div>
          </div>
        </div>
        <div className=" contact-box">
          <form action="" ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Your Name" name="user-name" />
            <input type="email" placeholder="Your Email" name="user_email" />
            <input
              className="subject"
              type="text"
              placeholder="Subject"
              name="subject"
            />
            <textarea
              name="message"
              id=""
              cols="57"
              rows="5"
              placeholder="Message"
            ></textarea>
            <button type="submit" className="submit-btn">
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

import styles from "./ContactForm.module.css";
import { Button } from "../Button/Button";
import { AiFillMessage } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setName(() => event.target[0].value);
    setEmail(() => event.target[1].value);
    setText(() => event.target[2].value);
  }

  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_button}`}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<AiFillMessage fontSize="24px" />}
          />

          <Button
            text="VIA CALL"
            icon={<IoCallOutline fontSize="24px" />}
          />
        </div>
        <Button
          text="VIA EMAIL FORM"
          icon={<HiMail fontSize="24px" />}
          isOutline={true}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea type="text" name="text" rows="8" />
          </div>
          <div
            style={{
              display: "felx",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div>
            {name + " " + email + " " + text}
          </div>
        </form>
      </div>
      <div className={`${styles.contact_iamge}`}>
        <img src="/images/contact.svg" alt="contact-image" />
      </div>
    </section>
  );
};
export default ContactForm;

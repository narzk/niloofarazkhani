
import ContactMeCard from "../components/ContactMeCard";
import style from "./ContactMe.module.scss";

export default function ContactMe() {
  return (
    <div className={style.contactMe} id="contact">
      <div className={style.contactMe__title}>Contact ME!</div>
      <ContactMeCard title="Email Address" info="arazkhanin@gmail.com"/>
    </div>
  );
}

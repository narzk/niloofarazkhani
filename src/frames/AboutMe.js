import style from "./AboutMe.module.scss";
import image from "../assets/profile-niloo.jpg";
import Button from "../components/Button";
import pdf from "../assets/frontend_dev_niloofar_cv.pdf";
import SocialButton from "../components/SocialButton";
import Twitter from "../components/icons/Twitter";
import Linkedin from "../components/icons/Linkedin";
import Google from "../components/icons/Google";
import Hashnode from "../components/icons/Hashnode";
import GitHub from "../components/icons/GitHub";

export default function AboutMe() {
  return (
    <div className={style.aboutMe}>
      <div className={style.aboutMe__container}>
        <div className={style.aboutMe__body}>
        <img src={image} className={style.aboutMe__profile} />
        <div className={style.aboutMe__description}>

      <h1 className={style.aboutMe__title}>About Me</h1>
          <p >
            The saying goes, if you love what you do, you can make it your job,
            and creating is my hobby. If I think back to my whole life, the
            times when I was creating a work, I was fine. If you look at my
            resume you may wonder why I went into the academic field when I am
            interested in creating, and I answer that studying and science open
            my mind to creation and gives me a different perspective to look at
            the world in a more beautiful way. About me, I am very enthusiastic
            about learning new things and exploring nature. It is my passion to
            learn about the world around me and to help people by working in the
            field of programming.
          </p>
        </div>
        </div>

        <div className={style.aboutMe__footer}>
          <div className={style.aboutMe__social}>
            <SocialButton>
              <a href={"#"} className={style.aboutMe__button}>
                <Linkedin />
              </a>
            </SocialButton>
            <SocialButton>
              <a href={"#"} download className={style.aboutMe__button}>
                <Google />
              </a>
            </SocialButton>
            <SocialButton>
              <a href={"#"} download className={style.aboutMe__button}>
                <Twitter />
              </a>
            </SocialButton>
            <SocialButton>
              <a href={"#"} download className={style.aboutMe__button}>
                <Hashnode />
              </a>
            </SocialButton>
            <SocialButton>
              <a href={"#"} download className={style.aboutMe__button}>
                <GitHub />
              </a>
            </SocialButton>
          </div>
          <Button>
            <a href={pdf} download className={style.aboutMe__button}>
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

import style from "./AboutMe.module.scss";
import image from "../assets/profile-niloo.jpg";
import Button from "../components/Button";
import pdf from "../assets/frontend_dev_niloofar_cv.pdf";
import SocialButton from "../components/SocialButton";

export default function AboutMe() {
  return (
    <div className={style.aboutMe}>
      <img src={image} className={style.aboutMe__profile} />
      <div className={style.aboutMe__container}>
        <h1 className={style.aboutMe__title}>About Me</h1>
        <div className={style.aboutMe__body}>
          <div className={style.aboutMe__description}>
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
          </div>
          {/* icons should add */}
          <Button>
            <a href={pdf} download className={style.aboutMe__button}>
              Download CV
            </a>
          </Button>
          <SocialButton>
            <a href={"#"} className={style.aboutMe__button}>
              Li
            </a>
          </SocialButton>
          <SocialButton>
            <a href={"#"} download className={style.aboutMe__button}>
              G
            </a>
          </SocialButton>
          <SocialButton>
            <a href={"#"} download className={style.aboutMe__button}>
              B
            </a>
          </SocialButton>
        </div>
      </div>
    </div>
  );
}

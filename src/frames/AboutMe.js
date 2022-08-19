import style from "./AboutMe.module.scss";
import image from "../assets/profile-niloo.jpg";
import Button from "../components/Button";
import pdf from "../assets/Resume.pdf";
import SocialButton from "../components/SocialButton";
import Twitter from "../components/icons/Twitter";
import Linkedin from "../components/icons/Linkedin";
import Google from "../components/icons/Google";
import Hashnode from "../components/icons/Hashnode";
import GitHub from "../components/icons/GitHub";

export default function AboutMe() {
  return (
    <div className={style.aboutMe} id="about">
      <div className={style.aboutMe__container}>
        <div className={style.aboutMe__body}>
          <img loading="lazy" alt="profile-picture" src={image} className={style.aboutMe__profile} />
          <div className={style.aboutMe__description}>
            <h1 className={style.aboutMe__title}>About Me</h1>
            <p>
              I am a developer with great academic foundation in computer
              science. I have passion in creating new things with my knowledge
              of computer, and find optimal sloutions to problems.
            </p>
            <p>
              My love is technology, nature, art and learning new languages to
              find differnt cultures. It is more than 4 years that I found my
              passion in web development, and I try to learn new things in my
              field every day. I also write about things that I learn in short
              articles,
              <a
                title="blog"
                className={style.here}
                href={"https://niloodeveloper.hashnode.dev/"}
                target={"_blank"}
              >
                Here
              </a>
              .
            </p>
            <p>
              I am available in freelancing!{" "}
              <a
                title="arazkhanin@gmail.com"
                className={style.here}
                target={"_blank"}
                href="mailto: arazkhanin@gmail.com"
              >
                Hire me
              </a>
              .
            </p>
          </div>
        </div>

        <div className={style.aboutMe__footer}>
          <div className={style.aboutMe__social}>
            <SocialButton>
              <a
                title="Linkedin"
                href={
                  "https://www.linkedin.com/in/niloofar-arazkhani-1581025b/"
                }
                target={"_blank"}
                className={style.aboutMe__button}
              >
                <Linkedin />
              </a>
            </SocialButton>

            <SocialButton>
              <a
                title="Twitter"
                href={"https://twitter.com/NiloofarAraz"}
                target={"_blank"}
                className={style.aboutMe__button}
              >
                <Twitter />
              </a>
            </SocialButton>
            <SocialButton>
              <a
                title="gitHub"
                href={"https://github.com/narzk"}
                target={"_blank"}
                className={style.aboutMe__button}
              >
                <GitHub />
              </a>
            </SocialButton>
            <SocialButton>
              <a
                title="hashnode"
                href={"https://niloodeveloper.hashnode.dev/"}
                target={"_blank"}
                className={style.aboutMe__button}
              >
                <Hashnode />
              </a>
            </SocialButton>
            <SocialButton>
              <a
                title="Google Scholar"
                href={
                  "https://scholar.google.com/citations?user=VOXDJ-4AAAAJ&hl=en"
                }
                target={"_blank"}
                className={style.aboutMe__button}
              >
                <Google />
              </a>
            </SocialButton>
          </div>
          <Button>
            <a
              title="resume"
              href={pdf}
              target={"_blank"}
              className={style.aboutMe__button}
            >
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

import style from "./AboutMe.module.scss";
import image from "../assets/profile-niloo.webp";
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
          <div className={style.aboutMe__profile}>
            <img loading="lazy" alt="profile-picture" src={image} />
          </div>
          <div className={style.aboutMe__description}>
            <h1 className={style.aboutMe__title}>About Me</h1>
            <p>
              I am a <mark>developer</mark> with a strong academic background in{" "}
              <mark>computer science</mark>. I am passionate about creating new
              things using my knowledge of computers and finding optimal
              solutions to problems.
            </p>
            <p>
              I love technology, nature, art, and learning new languages to
              explore different cultures. I have been passionate about web
              development for <mark>over 4 years</mark>, and I try to learn
              something new every day. My blog also contains short articles
              about the things I learn.
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
              My Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

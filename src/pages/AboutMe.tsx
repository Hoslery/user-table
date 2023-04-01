import React from "react";
import Typed from "typed.js";

const AboutMe: React.FC = () => {
  const refText = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(refText.current, {
      strings: ["Toropov Egor", "Programmist", "React Developer"],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container">
      <div className="about">
        <div className="about__left">
          <span className="about__topline">Hello</span>
          <h1 className="about__title">
            I'm <span ref={refText} className="about__multiText"></span>
          </h1>
          <p className="about__info">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
            nemo cupiditate harum asperiores obcaecati quod cum consequatur unde
            placeat eos.
          </p>
          <div className="about-btns">
            <a
              href="/cv.pdf"
              download
              target="_blank"
              className="about-btns__btn"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="about__right">
          <div className="about__img">
            <img src={require("../img/me1.webp")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

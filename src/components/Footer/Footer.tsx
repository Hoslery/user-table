import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer__text">Follow Me</p>
      <ul className="footer__list-links">
        <div className="footer__link footer__link-github">
          <a href="https://github.com/Hoslery" className="invisibleLink"></a>
        </div>
        <div className="footer__link footer__link-vk">
          <a href="https://vk.com/toropovvvvvvv" className="invisibleLink"></a>
        </div>
        <div className="footer__link footer__link-tg">
          <a href="https://t.me/toropovvvvvvv" className="invisibleLink"></a>
        </div>
      </ul>
    </div>
  );
};

export default Footer;

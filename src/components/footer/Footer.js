import React from "react";

import "./footer.css";

import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="py-4">
        <div className="d-flex justify-content-center flex-wrap">
          <div className="mx-3">
            <h5>
              <AiOutlineMail /> vivekjavascript@gmail.com
            </h5>
          </div>
          <div className="mx-3">
            <h5>
              <AiOutlinePhone /> +91-9985871216
            </h5>
          </div>
        </div>
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted"
            >
              <BsInstagram fontSize="2rem" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted"
            >
              <BsLinkedin fontSize="2rem" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted"
            >
              <BsGithub fontSize="2rem" />
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 text-muted"
            >
              <BsTwitter fontSize="2rem" />
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">Developed by Vivek Myadaram </p>
      </footer>
    </>
  );
}

export default Footer;

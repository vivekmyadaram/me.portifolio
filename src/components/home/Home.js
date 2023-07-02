import React from "react";
import CountingAnimation from "../animations/CountingAnimation";
import "./Home.css";

import Img1 from "../../images/Hero-bg1.png";
import MyImg from "../../images/me1.jpg";
import Vector1 from "../../images/vector-1.png";
import Resume from "../../images/vivekDev.docx";

import {
  BsCodeSlash,
  BsFillClockFill,
  BsFillCupFill,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { MdOutlineNightsStay } from "react-icons/md";

function Home() {
  const parallex = {
    backgroundImage: `url(${Img1})`,
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <>
      <section style={parallex}>
        <div
          className="container"
          style={{ paddingTop: "5rem", paddingBottom: "5rem" }}
        >
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12 fadeInLeft">
              <h1>
                {" "}
                Hi,{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
                <br /> I'm{" "}
                <span style={{ color: "rgb(203, 178, 106)" }}>Vivek,</span>
              </h1>

              <div className="me my-3">
                <h1>
                  <span>.</span>
                  <div className="message">
                    <div className="word2">Web Developer</div>
                    <div className="word3">React Developer</div>
                    <div className="word3">JavaScript Developer</div>
                  </div>
                </h1>
              </div>

              <p className="my-3">
                FullStack Web Developer
                <br /> <br /> Software developer with strong technical skills
                anchored on extensive engineering coursework and a special focus
                on Front-end Development.
              </p>

              {/* <ul className="nav">
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
              </ul> */}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 text-center fadeInRight">
              <img className="myImg" src={MyImg} alt="vivek19" />
              <div>
                <a
                  style={{ textDecoration: "none" }}
                  rel="noreferrer"
                  target="_blank"
                  href={Resume}
                  download
                >
                  <div className="btns mt-3">
                    <h5>My Resume</h5>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* <Wave /> */}
        </div>
      </section>
      <section>
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 fadeInLeft">
              <img src={Vector1} alt="" style={{ height: "19rem" }} />
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 fadeInRigth">
              <div
                id="target-element"
                className="d-flex flex-wrap justify-content-around my-5 py-5"
              >
                <div className="text-center">
                  <BsFillClockFill
                    color="rgb(203, 178, 106)"
                    className="my-2 workIcon"
                    fontSize="3rem"
                  />
                  <h2>
                    {<CountingAnimation targetValue="2000" duration="2500" />} +
                  </h2>
                  <h5 style={{ color: "rgb(203, 178, 106)" }}>Working Hours</h5>
                </div>
                <div className="text-center">
                  <BsCodeSlash
                    color="rgb(203, 178, 106)"
                    className="my-2"
                    fontSize="3rem"
                  />
                  <h2>
                    {<CountingAnimation targetValue="15000" duration="2500" />}{" "}
                    +
                  </h2>
                  <h5 style={{ color: "rgb(203, 178, 106)" }}>Lines Of Code</h5>
                </div>
                <div className="text-center">
                  <BsFillCupFill
                    color="rgb(203, 178, 106)"
                    className="my-2"
                    fontSize="3rem"
                  />
                  <h2>
                    {<CountingAnimation targetValue="500" duration="2500" />} +
                  </h2>
                  <h5 style={{ color: "rgb(203, 178, 106)" }}>
                    Cups of Coffee
                  </h5>
                </div>
                <div className="text-center">
                  <MdOutlineNightsStay
                    color="rgb(203, 178, 106)"
                    className="my-2"
                    fontSize="3rem"
                  />
                  <h2>
                    {<CountingAnimation targetValue="200" duration="2500" />} +
                  </h2>
                  <h5 style={{ color: "rgb(203, 178, 106)" }}>
                    Sleepless Nights
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* <Wave /> */}
        </div>
      </section>
    </>
  );
}

export default Home;

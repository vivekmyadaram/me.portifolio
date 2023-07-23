import React, { useState } from "react";

import SkillCard from "../cards/SkillCard/Skillcard";
import "./TabPanel.css";

import {
  FaJava,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUserGraduate,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

function TabPanel() {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };

  return (
    <>
      <>
        <section>
          <div
            className="d-flex flex-wrap justify-content-between"
            style={{
              backgroundColor: "#66727d94",
              borderRadius: "5rem",
              backdropFilter: "blur(60%)",
            }}
          >
            <h4
              className={
                showtab === 1
                  ? "active navtabItem mx-auto"
                  : "navtabItem mx-auto"
              }
              onClick={() => handletab(1)}
            >
              My Skills
            </h4>
            <h4
              className={
                showtab === 2
                  ? "active navtabItem mx-auto"
                  : "navtabItem mx-auto"
              }
              onClick={() => handletab(2)}
            >
              Education
            </h4>
            <h4
              className={
                showtab === 3
                  ? "active navtabItem mx-auto"
                  : "navtabItem mx-auto"
              }
              onClick={() => handletab(3)}
            >
              EXPERIENCE
            </h4>
            <h4
              className={
                showtab === 4
                  ? "active navtabItem mx-auto"
                  : "navtabItem mx-auto"
              }
              onClick={() => handletab(4)}
            >
              ADDITIONAL SKILLS
            </h4>
          </div>
          <div className="tab-content my-3" id="pills-tabContent">
            {/* start tab 1*/}
            <div
              className={
                showtab === 1
                  ? "tab-pane fade show active p-3"
                  : "tab-pane fade show p-lg-3 p-2"
              }
              style={{
                backgroundColor: "rgba(102, 114, 125, 0.6)",
                borderRadius: "5rem",
              }}
            >
              <div>
                <h4 className="text-center d-lg-none d-sm-block">
                  Client Side
                </h4>
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillCard docLink="https://react.dev/" icons={<FaReact />} />
                  <SkillCard
                    docLink="https://redux.js.org/"
                    icons={<SiRedux />}
                  />
                  <SkillCard
                    docLink="https://nextjs.org/"
                    icons={<SiNextdotjs />}
                  />
                  <SkillCard docLink="https://mui.com/" icons={<SiMui />} />
                  <SkillCard
                    docLink="https://tailwindcss.com/"
                    icons={<SiTailwindcss />}
                  />
                  <h4 className="mx-5 panelText d-none d-lg-block">
                    Client Side
                  </h4>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="text-center d-lg-none d-sm-block">
                  Server Side
                </h4>
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillCard
                    docLink="https://nodejs.org/en"
                    icons={<FaNodeJs />}
                  />
                  <SkillCard
                    docLink="https://expressjs.com/"
                    icons={<SiExpress />}
                  />
                  <h4 className="mx-5 panelText d-none d-lg-block">
                    Server Side
                  </h4>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="text-center d-lg-none d-sm-block">Database</h4>
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillCard
                    docLink="https://www.mongodb.com/"
                    icons={<SiMongodb />}
                  />
                  <SkillCard
                    docLink="https://www.mysql.com/"
                    icons={<SiMysql />}
                  />
                  <SkillCard
                    docLink="https://www.sqlite.org/index.html"
                    icons={<SiSqlite />}
                  />
                  <SkillCard
                    docLink="https://firebase.google.com/"
                    icons={<SiFirebase />}
                  />
                  <h4 className="mx-5 panelText d-none d-lg-block">Database</h4>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="text-center d-lg-none d-sm-block">Languages</h4>
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillCard
                    docLink="https://www.java.com/en/"
                    icons={<FaJava />}
                  />
                  <SkillCard
                    docLink="https://developer.mozilla.org/en-US/"
                    icons={<SiJavascript />}
                  />
                  <SkillCard
                    docLink="https://www.typescriptlang.org/"
                    icons={<SiTypescript />}
                  />
                  <SkillCard
                    docLink="https://www.python.org/"
                    icons={<FaPython />}
                  />
                  <h4 className="mx-5 panelText d-none d-lg-block">
                    Languages
                  </h4>
                </div>
              </div>
              <hr />
              <div>
                <h4 className="text-center d-lg-none d-sm-block">
                  Tools and CLIs
                </h4>
                <div className="d-flex flex-wrap justify-content-center">
                  <SkillCard
                    docLink="https://www.linux.org/"
                    icons={<FaLinux />}
                  />
                  <SkillCard docLink="https://git-scm.com/" icons={<SiGit />} />
                  <SkillCard
                    docLink="https://www.postman.com/"
                    icons={<SiPostman />}
                  />
                  <h4 className="mx-5 panelText d-none d-lg-block">
                    Tools and CLIs
                  </h4>
                </div>
              </div>
            </div>
            {/* close tab 1*/}

            {/* start tab 2*/}
            <div
              className={
                showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    style={{
                      backgroundColor: "rgba(102, 114, 125, 0.6)",
                      borderRadius: "5rem",
                    }}
                  >
                    <div className="h-100 p-5 my-2 rounded">
                      <h3>
                        <FaUserGraduate fontSize="5rem" /> <br />
                        <b>2013-2017</b>
                      </h3>
                      <h2>
                        <b style={{ color: "rgb(203, 178, 106)" }}>
                          B.Tech <br />
                          (Information Technology)
                        </b>
                      </h2>
                      {/* <h4>Percentage - 88%</h4> */}
                      <h3 style={{ color: "rgb(203, 178, 106)" }}>
                        Jntuh University Jagtial,Telangana
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    style={{
                      backgroundColor: "rgba(102, 114, 125, 0.6)",
                      borderRadius: "5rem",
                    }}
                  >
                    <div className="h-100 p-5 my-2 rounded">
                      <h3>
                        <FaUserGraduate fontSize="5rem" /> <br />
                        <b>2010-2013</b>
                      </h3>
                      <h2>
                        <b style={{ color: "rgb(203, 178, 106)" }}>
                          Diploma in <br />
                          (Computers)
                        </b>
                      </h2>
                      {/* <h4>Percentage - 88%</h4> */}
                      <h3 style={{ color: "rgb(203, 178, 106)" }}>
                        TRR College Of Techhnology, meerpet Hyd,Telangana
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div
                    style={{
                      backgroundColor: "rgba(102, 114, 125, 0.6)",
                      borderRadius: "5rem",
                    }}
                  >
                    <div className="h-100 p-5 my-2 rounded">
                      <h3>
                        <FaUserGraduate fontSize="5rem" /> <br />
                        <b>2009-2010</b>
                      </h3>
                      <h2>
                        <b style={{ color: "rgb(203, 178, 106)" }}>
                          SSC
                          <br />
                        </b>
                      </h2>
                      {/* <h4>Percentage - 88%</h4> */}
                      <h3 style={{ color: "rgb(203, 178, 106)" }}>
                        Govt High School Kistapet,Rajanna
                        Sircilla(dist),Telangana
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* close tab 2*/}

            {/* start tab 3*/}
            <div
              className={
                showtab === 3 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div
                className="p-lg-5"
                style={{
                  backgroundColor: "rgba(102, 114, 125, 0.6)",
                  borderRadius: "5rem",
                }}
              >
                <div className="text-center pt-5">
                  <h2 style={{ color: "rgb(203, 178, 106)" }}>
                    Software Engineer at <br />
                    Shreyan IT Solutions Private Limited, Hyderabad, Telangana.
                  </h2>
                </div>
                <div className="container mt-4 pb-4">
                  <div>
                    <h3 className="text-center">
                      Having 4 years of hands-on experience in building
                      responsive and user-friendly web applications
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* close tab 3*/}

            {/* start tab 4*/}
            <div
              className={
                showtab === 4 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div
                className="p-lg-5"
                style={{
                  backgroundColor: "rgba(102, 114, 125, 0.6)",
                  borderRadius: "5rem",
                }}
              >
                <div className="text-center pt-5">
                  <h2 style={{ color: "rgb(203, 178, 106)" }}>SOFT SKILLS</h2>
                </div>
                <div className="container mt-4 pb-4">
                  <div>
                    <h3> - Communication & Interpersonal skills</h3>
                    <p>
                      Have the ability to successfully express the desired
                      message while keeping the listener engaged.
                    </p>
                  </div>
                  <div>
                    <h3> - Public speaking skills</h3>
                    <p>
                      Have substantial public speaking experience in the form of
                      event hosting and presenting presentations in front of big
                      groups. Participated in several debate and MUN
                      competitions, which aided in the development of these
                      talents.
                    </p>
                  </div>
                  <div>
                    <h3> - Leadership & Management skills</h3>
                    <p>
                      Skilled in organising others to achieve a common objective
                      and motivating the team to achieve the desired result. Can
                      organise and communicate properly in order to help a team
                      or project
                    </p>
                  </div>
                  <div>
                    <h3> - Quick & Visual Learner</h3>
                    <p>
                      I am a strong visual learner who is driven to tackle
                      challenges and find an efficient solution rapidly
                    </p>
                  </div>
                  <div>
                    <h3> - Effective Problem Solver</h3>
                    <p>
                      I have the capability to solve problems and determining
                      the cause of the problem. Identifying, prioritizing, and
                      selecting alternatives for a solution; and implementing a
                      solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* close tab 4*/}
          </div>
        </section>
      </>
    </>
  );
}

export default TabPanel;

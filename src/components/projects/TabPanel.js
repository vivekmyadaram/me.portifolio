import React, { useState } from "react";

import "./TabPanel.css";
import TabPanelCard from "./TabPanelCard";
import Ca from "../../images/CA.jpg";

function TabPanel() {
  const [showtab, setShowtab] = useState(1);

  const handletab = (e) => {
    setShowtab(e);
  };

  return (
    <>
      <>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around mx-auto my-2">
            <h4
              className={showtab === 2 ? "active navtabItem" : "navtabItem"}
              onClick={() => handletab(2)}
            >
              MERN
            </h4>
            <h4
              className={showtab === 3 ? "active navtabItem" : "navtabItem"}
              onClick={() => handletab(3)}
            >
              other
            </h4>
          </div>
          <div className="tab-content my-3" id="pills-tabContent">
            {/* start tab 2*/}
            <div
              className={
                showtab === 2 ? "tab-pane fade show active" : "tab-pane fade"
              }
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <TabPanelCard
                      img={Ca}
                      title="Atom Project"
                      subTitle="React Dev"
                      li1="Fully responsive front end, back end web page setup along with integrated database setup"
                      li2="Created all the components from scratch using react.js and redux"
                      //   code="https://github.com/"
                    />
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
            ></div>
            {/* close tab 3*/}
          </div>
        </div>
      </>
    </>
  );
}

export default TabPanel;

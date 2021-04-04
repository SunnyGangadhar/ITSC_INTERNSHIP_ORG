import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import "../CSS/card.css";

const OcatComponent = () => {
  const { devop } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/ocat/">{`<`} Back</Link>
        <br />
        <h3>{ocat.nameOfProject}</h3>
        <p>{ocat.aboutProject}</p>
        <br />

        <div className="row">
          <div className="col">
            <p>
              <strong> Members:</strong>
              {ocat.members}
            </p>
            <p>
              <strong> Advisor:</strong>
              {ocat.advisor}
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="item-responsive item-responsive-mid">
              <iframe
                title={ocat.nameOfProject}
                src={ocat.mediaLink}
                allow="autoplay; fullscreen"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={ocat.imageLink} alt={`${ocat.nameOfProject} Image`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OcatComponent;

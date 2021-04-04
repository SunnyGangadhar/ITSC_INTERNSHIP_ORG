import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import "../CSS/card.css";

const DevopComponent = () => {
  const { devop } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/veaas/">{`<`} Back</Link>
        <br />
        <h3>{devop.nameOfProject}</h3>
        <p>{devop.aboutProject}</p>
        <br />

        <div className="row">
          <div className="col">
            <p>
              <strong> Members:</strong>
              {devop.members}
            </p>
            <p>
              <strong> Advisor:</strong>
              {devop.advisor}
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="item-responsive item-responsive-mid">
              <iframe
                title={devop.nameOfProject}
                src={devop.mediaLink}
                allow="autoplay; fullscreen"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={devop.imageLink} alt={`${devop.nameOfProject} Image`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevopComponent;

import React from "react";
import { useRouteData } from "react-static";
import { Link } from "@reach/router";
import "../CSS/card.css";

const VeaasItemComponent = () => {
  const { veaas } = useRouteData();

  return (
    <div className="default-content">
      <div className="content">
        <Link to="/veaas/">{`<`} Back</Link>
        <br />
        <h3>{veaas.nameOfProject}</h3>
        <p>{veaas.aboutProject}</p>
        <br />

        <div className="row">
          <div className="col">
            <p>
              <strong> Members:</strong>
              {veaas.members}
            </p>
            <p>
              <strong> Advisor:</strong>
              {veaas.advisor}
            </p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="item-responsive item-responsive-mid">
              <iframe
                title={veaas.nameOfProject}
                src={veaas.mediaLink}
                allow="autoplay; fullscreen"
                allowFullScreen=""
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={veaas.imageLink} alt={`${veaas.nameOfProject} Image`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeaasItemComponent;

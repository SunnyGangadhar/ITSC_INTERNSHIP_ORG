import React, { Fragment } from 'react';

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

const LivePreviewExample = () => {
  const lat = 51.505;
  const lng = -0.09;
  const zoom = 5;

  const position = [ lat, lng ];

  return (
    <Fragment>
      <Map center={position} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </Fragment>
  );
};

export default LivePreviewExample;

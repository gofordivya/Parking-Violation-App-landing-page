import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Container, Row, Col } from "react-bootstrap";
import markerIconPng from "leaflet/dist/images/marker-icon.png"; // Import default icon
import markerShadowPng from "leaflet/dist/images/marker-shadow.png"; // Import default shadow
import "./InteractiveMap.css";

const InteractiveMap = () => {
  useEffect(() => {
    let map = L.map("map").setView([52.3676, 4.9041], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    const defaultIcon = L.icon({
      iconUrl: markerIconPng,
      shadowUrl: markerShadowPng,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    L.marker([52.3676, 4.9041], { icon: defaultIcon })
      .addTo(map)
      .bindPopup("Smart Zone - Amsterdam")
      .openPopup();

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

  return (
    <Container fluid id="interactive-map" className="interactive-map-section">
      <Row>
        <Col>
          <h2>Explore Our Smart Zones</h2>
          <div id="map"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default InteractiveMap;

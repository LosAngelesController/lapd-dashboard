import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoia2VubmV0aG1lamlhIiwiYSI6ImNsZG1oYnpxNDA2aTQzb2tkYXU2ZWc1b3UifQ.PxO_XgMo13klJ3mQw1QxlQ";

function ArrestMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const formulaForZoom = () => {
    if (typeof window != "undefined") {
      if (window.innerWidth > 700) {
        return 10;
      } else {
        return 9.1;
      }
    }
  };
  useEffect(() => {
    var mapparams: any = {
      container: mapContainerRef.current!, // container ID
      style: "mapbox://styles/kennethmejia/clgqr3ha2000001pp5tcl2j2u", // style URL (THIS IS STREET VIEW)
      center: [-118.41, 34], // starting position [lng, lat]
      zoom: formulaForZoom(), // starting zoom
    };

    const map = new mapboxgl.Map(mapparams);

    //     map.addControl(new mapboxgl.AttributionControl(), "bottom-right");
  }, []);
  //   mapref.current = map;

  useEffect(() => {
    if (mapContainerRef.current) {
      // Get the map container element
      const mapContainer = mapContainerRef.current;

      // Get the mapbox copyright element
      const mapboxAttribution = mapContainer.querySelector<HTMLElement>(
        ".mapboxgl-ctrl-attrib-inner"
      );

      // Get the mapbox links elements
      const mapboxLinks = mapContainer.querySelectorAll<HTMLElement>(
        ".mapbox-improve-map"
      );

      // Set the font size for the copyright and links
      if (mapboxAttribution) {
        mapboxAttribution.style.fontSize = "10px";
      }
      mapboxLinks.forEach((link) => {
        link.style.fontSize = "10px";
      });
    }
  }, []);

  const onMapClick = () => {
    window.open("https://2022arrests.lacontroller.io/");
  };

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "400px" }}
      onClick={onMapClick}
    />
  );
}

export default ArrestMap;

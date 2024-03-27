import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./map.css";
import Layout from "../../components/layout";

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const accra = { lng: -0.22571, lat: 5.56454 };
  const [zoom] = useState(12);
  maptilersdk.config.apiKey = "1RziHFb3U1x5VohitdkH";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [accra.lng, accra.lat],
      zoom: zoom,
    });

    new maptilersdk.Marker({ color: "#FF0000" })
      .setLngLat([-0.192897, 5.549032])
      .addTo(map.current);
  }, [accra.lng, accra.lat, zoom]);

  return (
    <Layout>
      <div className="map-wrap">
        <div ref={mapContainer} className="map" />
      </div>
    </Layout>
  );
};
export default Map;

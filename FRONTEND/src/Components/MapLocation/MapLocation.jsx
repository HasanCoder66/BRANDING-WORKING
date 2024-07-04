import React from "react";

const MapLocation = () => {
  return (
    <div className="map ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.1546498133207!2d67.10695977443449!3d24.994860489868195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347270585c7ef%3A0x12730b72e9043d83!2sAl%20Noor%20Society%20Gulzar%20E%20Hijri%20Scheme%2033%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710846127691!5m2!1sen!2s"
        width="100%"
        height="270"
        style={{ border: 0, borderRadius: "10px" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapLocation;

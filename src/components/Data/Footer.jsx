import React from "react";
import "./footer.css";

const Footer = ({ soma }) => {
  return (
    soma > 0 && (
      <footer>
        <div className="soma">
          <span>TOTAL: </span> <p> R$ {soma}</p>
        </div>
      </footer>
    )
  );
};

export default Footer;

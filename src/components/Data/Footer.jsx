import React from "react";
import "./footer.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Footer = ({ soma }) => {
  React.useLayoutEffect(() => {
    if (soma > 0) {
      gsap.to("footer", {
        y: 0,
        opacity: 1,
        duration: 1.4,
      });
      return () => {
        gsap.killTweensOf("footer");
      };
    }
  }, [soma]);

  return (
    soma > 0 && (
      <footer>
        <div className="soma">
          <span>TOTAL: </span> <p> R$ {soma.toFixed(2)}</p>
        </div>
      </footer>
    )
  );
};

export default Footer;

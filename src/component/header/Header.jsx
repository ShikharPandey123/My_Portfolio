import React, { useEffect, useRef } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/avatar.gif";
import { init } from "ityped";
import Headersocials from "./Headersocials";
const Header = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Developer",
        "Programmer",
        "Enthusiast",
      ],
    });
  }, []);
  return (
    <>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Shikhar Pandey</h1>
          <h5 className="text-light">
            {" "}
            <span ref={textRef} id="span1">
              {" "}
            </span>
          </h5>
          <CTA />
          <Headersocials />
          <div className="me">
            <img src={ME} alt=""></img>
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;

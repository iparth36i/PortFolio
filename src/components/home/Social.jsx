import React from "react";
import { SiLeetcode } from "react-icons/si";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/parth-gandhi-478379162/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/iparth36i"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://leetcode.com/iparth36/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i>
          <SiLeetcode />
        </i>
      </a>
    </div>
  );
};

export default Social;

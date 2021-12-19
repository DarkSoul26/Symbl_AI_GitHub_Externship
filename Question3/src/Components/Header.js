import React from "react";
import "./Header.css";
import github_externship from "../Images/github_externship.png";
import symbl_AI from "../Images/symbl_AI.png";
const Header = () => {
  return (
    <div>
      <a href="https://symbl.ai/">
        <img
          className="image"
          draggable="false"
          src={symbl_AI}
          alt="symbl_AI"
          onClick="https://symbl.ai/"
        />
      </a>
      {/* <div style={{ display: "flex", justifyContent: "flex-end",mar }}> */}
      <a href="https://externship.github.in/">
        <img
          className="image"
          draggable="false"
          src={github_externship}
          alt="github_externship"
          onClick="https://externship.github.in/"
        />
      </a>
      {/* </div> */}
    </div>
  );
};

export default Header;

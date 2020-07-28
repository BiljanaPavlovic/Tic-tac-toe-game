import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p>&copy; Made by Biljana Pavlovic 2020.</p>
      <div>
        <a
          href="https://www.linkedin.com/in/biljana-pavlovic-29a0907b/ "
          target="_blanck"
        >
          <img className="soc-ico" src="./img/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/BiljanaPavlovic" target="_blanck">
          <img className="soc-ico" src="./img/github.png" alt="linkedin" />
        </a>
      </div>
    </div>
  );
}

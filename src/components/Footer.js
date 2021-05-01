import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
export default function Footer() {
  return (
    <footer id="footer">
    
      <ul className="copyright">
        <li>
          <a style={{outline: "0"}} href="https://nikogham.dev" target="_blank" rel="noreferrer">
          <StaticImage
            src="../assets/img/niko.png"
            placeholder="blurred"
            width={40}
            alt="logo developer"
          />
          </a>
          
        </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}

import React from "react";
import play from "../../assets/google.png";
import logo2 from "../../assets/logo2.png";
import Apple from "../../assets/Apple.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import messages from "../../assets/messages.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="Footer__content">
      <div className="top__content section__padding">
        <h1>Ready to get started with Straddle?</h1>
        <div className="top__content-playstore">
          <img src={Apple} />
          <Link to="https://play.google.com/store/apps/details?id=com.lagmex.straddle">
            {" "}
            <img src={play} />
          </Link>
        </div>
      </div>
      <hr  id="playline"/>
      <div className="middle__content section__padding">
        <div className="white__logo">
          <Link to="/">
            <img src={logo2} />
          </Link>

          <p>Join our Straddle Community today</p>
        </div>
        <div className="middle__content-container">
          <div className="middle__content-middle">
            <Link to="/Privacy-Policy">
              {" "}
              <p>Privacy Policy</p>
            </Link>
            <Link to="/Term-Of-Use">
              {" "}
              <p>Term Of Use</p>
            </Link>

            <div className="middle__content-socials">
              <Link to="https://twitter.com/StraddleNG">
                <img src={twitter} />
              </Link>
              <Link to="https://www.linkedin.com/company/90968111/admin/feed/posts/">
                <img src={linkedin} />
              </Link>
              <Link to="https://www.instagram.com/straddleng/">
                {" "}
                <img src={instagram} />
              </Link>
              <Link to="https://web.facebook.com/profile.php?id=61555254060447">
                <img src={facebook} />
              </Link>
            </div>
          </div>
          <div className="middle__content-contact">
            <div className="contact" id="number">
            <img src={phone} />
              <p>09072203493</p>
            </div>
            <div className="contact" id="message">
              
              <img src={messages} />
              <p>admin@straddle.site</p>
            </div>
          </div>
        </div>
      </div>

      <hr id="line" />
      <p className="rights section__padding">
        © 2024 Straddle. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;

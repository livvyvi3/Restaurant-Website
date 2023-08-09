import React from "react";

import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">209 Loop Str, Cape Town, 8001</p>
        <p className="p__opensans">+27 65 955 9772</p>
        <p className="p__opensans">+27 65 955 9772</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others.”
        </p>
        <img
          src={images.spoon}
          alt="spoon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon - Fri: </p>
        <p className="p__opensans">10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: </p>
        <p className="p__opensans">10:00 am - 03:00 am</p>

      </div>
    </div>
    <div className="foodter__copyright">
      <p className="p__opensans">
        Copyright &copy; {new Date().getFullYear()} Gerícht. All Rights
        reserved.
      </p>
    </div>
  </div>
);

export default Footer;

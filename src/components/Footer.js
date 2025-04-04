import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";
import * as PiIcons from "react-icons/pi";
import "../App.css";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ color: "white", size: "2em" }}>
        <footer>
          <div className="footerContainer">
            <div className="footerInfo">
              <div className="footerColumn1">
                <h3>Iw-Tour Mechanika Samochodowa</h3>
                <p>
                  ul. Główna 48,
                  <br />
                  42-620, Nakło Śląskie
                  <br />
                  Tel: +48 508 369 998
                </p>
                <Link
                  to="https://goo.gl/maps/7cFbPWgGRpiQd92m6"
                  className="googleMapsLink"
                >
                  <PiIcons.PiMapPinLineBold />
                </Link>
              </div>
              <div className="footerColumn2">
                <h3>Godziny otwarcia</h3>
                <p>
                  Poniedziałek - Piątek: 8:00 - 17:00
                  <br />
                  Sobota i niedziela: Nieczynne
                </p>
              </div>
            </div>
            <div className="footerCopyright">
              <div className="footerCopyrightText">
                <p>Wszelkie prawa zastrzeżone.</p>
              </div>
              <div className="footerCopyrightText">
                <p>Copyright by &#169; 2023 Mariusz Katerla</p>
              </div>
              <div className="footerCopyrightText">
                <p>Realizacja: Mariusz Katerla</p>
              </div>
            </div>
          </div>
        </footer>
      </IconContext.Provider>
    </>
  );
}

export default Footer;

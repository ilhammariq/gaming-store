import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import {
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

export default class FooterComponent extends Component {
  render() {
    return (
      <footer className="text-center text-white bg-gray-800 shadow-lg">
        <div className="pt-9">
          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-4 text-2xl justify-items-center items-center gap-10">
              <a href="#!">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#!">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-white p-4">
          <small>
            © 2021 Copyright:
            <a
              className="text-white ml-2"
              target="blank"
              href="https://instagram.com/ilhammuhammadariq"
            >
              Panda Coding
            </a>
          </small>
        </div>
      </footer>
    );
  }
}

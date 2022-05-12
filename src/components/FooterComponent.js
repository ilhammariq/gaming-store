import React, { Component } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
export default class FooterComponent extends Component {
  render() {
    return (
      <footer className="text-center text-white bg-gray-800 shadow-lg">
        <div className="pt-9">
          <div className="flex justify-center mb-6">
            <div className="grid grid-cols-4 text-2xl justify-items-center items-center gap-10">
              <a href="#!" target="_blank">
                <FaInstagram />
              </a>
              <a href="#!" target="_blank">
                <FaWhatsapp />
              </a>
              <a href="#!" target="_blank">
                <FaFacebook />
              </a>
              <a href="#!" target="_blank">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-white p-4">
          <p>
            © 2021 Copyright:
            <a
              className="text-white ml-2"
              target="blank"
              href="https://instagram.com/ilhammuhammadariq"
            >
              Panda Coding
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

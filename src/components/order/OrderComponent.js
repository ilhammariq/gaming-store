import React, { Component } from "react";

export default class OrderComponent extends Component {
  render() {
    return (
      <div className="grid grid-cols-2 gap-8">
        <div className="p-2">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-5">
              <img
                src="https://play-lh.googleusercontent.com/ha1vofCWS5lFhVe0gabwIetwjT4fUY5d6iDOP10KWRwnXci8lWI3ClxrqjoRuPZidg=s180-rw"
                alt=""
              />
            </div>
            <div className="text-white">
              <p className="text-xl mb-5">Top Up Diamond Mobile Legends</p>
              <ul className="list-decimal ml-8">
                <li>
                  Masukkan <b>ID (SERVER)</b>
                </li>
                <li>
                  Pilih <b>Nominal </b>Diamond
                </li>
                <li>
                  Pilih <b>Metode Pembayaran</b>
                </li>
                <li>
                  Tulis <b>nomor WhatsApp</b> yg benar!
                </li>
                <li>
                  Klik <b>Beli </b>&amp; lakukan Pembayaran
                </li>
                <li>
                  <b>Tunggu 1 Menit</b> diamond masuk otomatis ke akun Anda.
                </li>
              </ul>
            </div>
          </div>
          <div className="shadow-lg p-10">1</div>
        </div>
        <div className="p-2">
          <div className="shadow-lg p-10">1</div>
          <div className="shadow-lg p-10">1</div>
          <div className="shadow-lg p-10">1</div>
          <div className="shadow-lg p-10">1</div>
          <div className="shadow-lg p-10">1</div>
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import arrow from "../assets/images/span_arrow.svg";
import card_img from "../assets/images/Indietro-img.png";
import stars from "../assets/images/star_svg.svg";

function Hero() {
  const [show, setfirst] = useState(false);
  return (
    <>
      <header>
        <div>
          <div className="nav_top ">
            <div className="mail_box    ">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33 9C33 7.35 31.65 6 30 6H6C4.35 6 3 7.35 3 9V27C3 28.65 4.35 30 6 30H30C31.65 30 33 28.65 33 27V9ZM30 9L18 16.5L6 9H30ZM30 27H6V12L18 19.5L30 12V27Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="phn_box  ">
              <svg
                className=" mb_4"
                width="24"
                height="15"
                viewBox="0 0 24 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 13.2638V13.7294C24 13.9194 23.8736 14.1016 23.6485 14.236C23.4235 14.3704 23.1183 14.4458 22.8 14.4458H20.4C14.9896 14.4458 9.80076 13.1627 5.97502 10.8787C2.14928 8.59471 0 5.49695 0 2.2669L0 0.834083C0 0.64408 0.126428 0.461859 0.351472 0.327507C0.576516 0.193154 0.88174 0.117676 1.2 0.117676L6 0.117676C6.31826 0.117676 6.62348 0.193154 6.84853 0.327507C7.07357 0.461859 7.2 0.64408 7.2 0.834083V3.69971C7.2 4.1009 6.828 4.63821 6.36 4.91761L3.792 6.45072C5.616 9.02979 9.072 11.093 13.392 12.182L15.936 10.6632C16.416 10.3766 17.316 10.1545 17.976 10.1545H22.8C23.1162 10.1564 23.4183 10.2327 23.6408 10.3669C23.8632 10.501 23.988 10.6822 23.988 10.871V13.2709L24 13.2638Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <nav className="nav_box">
            <img className=" coursor_pointer" src={logo} alt="logo_svg" />
            <ul
              className={` ${
                show ? "end_0" : "right_100"
              } mobile-view nav_links  `}
            >
              <li className=" nav_link_propty ">
                <a className=" coursor_pointer color_blue" href="">
                  VACATION
                </a>
                <svg
                  className="coursor_pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 7.08334L9.99999 12.9167L4.16666 7.08334"
                    stroke="#26529C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li className=" nav_link_propty">
                <a className=" coursor_pointer color_blue">DESTINATIONS</a>
                <svg
                  className=" coursor_pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 7.08334L9.99999 12.9167L4.16666 7.08334"
                    stroke="#26529C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li className=" nav_link_propty">
                <a className=" coursor_pointer color_blue">PACKAGES</a>
                <svg
                  className=" coursor_pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 7.08334L9.99999 12.9167L4.16666 7.08334"
                    stroke="#26529C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <li className=" nav_link_propty">
                <a className=" coursor_pointer color_blue">CRUISES</a>
                <svg
                  className=" coursor_pointer"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8333 7.08334L9.99999 12.9167L4.16666 7.08334"
                    stroke="#26529C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </li>
              <button className=" login_btn    ">LOGIN / SIGN UP</button>
            </ul>
            <button className=" login_btn_outer  ">LOGIN / SIGN UP</button>
            <div className=" cross_icon ">
              <div className=" ">
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.6562 11.625C10.6562 8.94987 12.8249 6.78125 15.5 6.78125C18.1751 6.78125 20.3437 8.94987 20.3437 11.625C20.3437 14.3001 18.1751 16.4687 15.5 16.4687C12.8249 16.4687 10.6562 14.3001 10.6562 11.625ZM15.5 8.71875C13.8949 8.71875 12.5937 10.0199 12.5937 11.625C12.5937 13.2301 13.8949 14.5312 15.5 14.5312C17.1051 14.5312 18.4062 13.2301 18.4062 11.625C18.4062 10.0199 17.1051 8.71875 15.5 8.71875Z"
                    fill="#26529C"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.61456 15.5C1.61456 7.83129 7.83128 1.61458 15.5 1.61458C23.1687 1.61458 29.3854 7.83129 29.3854 15.5C29.3854 23.1687 23.1687 29.3854 15.5 29.3854C7.83128 29.3854 1.61456 23.1687 1.61456 15.5ZM15.5 3.55208C8.90133 3.55208 3.55206 8.90134 3.55206 15.5C3.55206 18.788 4.88024 21.7659 7.02936 23.9262C7.26237 22.6693 7.72019 21.4841 8.63912 20.5312C10.0137 19.1057 12.2116 18.4062 15.4999 18.4062C18.7882 18.4062 20.9862 19.1057 22.3607 20.5312C23.2797 21.4842 23.7375 22.6693 23.9705 23.9263C26.1197 21.766 27.4479 18.7881 27.4479 15.5C27.4479 8.90134 22.0986 3.55208 15.5 3.55208ZM22.2085 25.3882C22.0769 23.8228 21.737 22.6756 20.966 21.876C20.1271 21.0061 18.5727 20.3437 15.4999 20.3437C12.4271 20.3437 10.8727 21.0061 10.0338 21.876C9.26287 22.6756 8.92296 23.8228 8.79135 25.3881C10.7038 26.6882 13.0132 27.4479 15.5 27.4479C17.9867 27.4479 20.296 26.6882 22.2085 25.3882Z"
                    fill="#26529C"
                  />
                </svg>
              </div>
              <div
                onClick={() => {
                  setfirst(!show);
                }}
                class="menu"
              >
                <img src={arrow} alt="span_arrow" />
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* card---part---here */}
      <div class="container">
        <div class="Indietro-box">
          <img src={card_img} alt="card_img" />
          <h2 class="heading1">AV Club Isola verde Therme e Spa</h2>
          <img src={stars} alt="stars" />
          <a href="" class="loction">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.2917 8.62545C10.2917 7.35928 9.26571 6.33331 8.00048 6.33331C6.73431 6.33331 5.70834 7.35928 5.70834 8.62545C5.70834 9.89068 6.73431 10.9166 8.00048 10.9166C9.26571 10.9166 10.2917 9.89068 10.2917 8.62545Z"
                stroke="#26529C"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99955 18.25C6.90095 18.25 1.125 13.5735 1.125 8.68302C1.125 4.85442 4.20234 1.75 7.99955 1.75C11.7968 1.75 14.875 4.85442 14.875 8.68302C14.875 13.5735 9.09816 18.25 7.99955 18.25Z"
                stroke="#26529C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="heading2">Veneto, Cortina d’Ampezzo</span>
          </a>
        </div>
      </div>
      {/* card---part---here */}
    </>
  );
}

export default Hero;

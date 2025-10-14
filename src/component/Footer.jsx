import React from "react";
import f_logo from "../assets/img/apilogo.png";
// import Acc from "../component/Home_component/Footer_Acc";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="overflow-hidden w-full bg-black text-white px-6 sm:px-10 lg:px-[5%] py-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Logo + About */}
        <div className="max-w-[250px] md:text-left text-center mx-auto md:mx-0">
          <img
            src={f_logo}
            alt="Company Logo"
            className="w-[clamp(100px,15%,120px)] h-auto mx-auto md:mx-0"
          />
          <p className="mt-3 text-sm leading-relaxed font-Pop">
            we’re committed to elevating the construction experience for our
            clients.
          </p>
          {/* Social icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#4b54c9] transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ff6600] transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ff6600] transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#ff6600] transition-colors"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        {/* <Acc title="Quick Link" className="min-w-[200px]"> */}
          <nav>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/home" className="text-[#d16751] font-medium">
                  Home
                </a>
              </li>
              <li>
                <a href="/about_us" className="hover:text-[#d16751]">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-[#d16751]">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-[#d16751]">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
        {/* </Acc> */}

        {/* Services */}
        {/* <Acc title="Quick Services" className="min-w-[200px]"> */}
          <ul className="space-y-2 text-sm">
            <li>General Construction</li>
            <li>Architectural Design</li>
            <li>Site Supervision</li>
            <li>Renovation Services</li>
            <li>Commercial Projects</li>
            <li>Residential Buildings</li>
          </ul>
        {/* </Acc> */}

        {/* Contact */}
        {/* <Acc title="Contact Us" className="min-w-[200px]"> */}
          <ul className="space-y-3 text-sm font-Pop">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <p className="max-w-[180px]">
                123 Health Ave, Wellness City, ST 00000
              </p>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt />
              <p>(800) 123-4567</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope />
              <p>info@generalhospital.com</p>
            </li>
          </ul>
        {/* </Acc> */}
      </div>
    </footer>
  );
}

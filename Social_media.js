import {
  faFacebook,
  faTwitter,
  faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialFollow() {
  return (
    <div class="social-container">
      <h1>Social media: </h1>
      <a href="https://www.facebook.com/"
      class="Facebook follow">
      <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/"
      class="Twitter follow">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/"
      class="Instagram follow">
      <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
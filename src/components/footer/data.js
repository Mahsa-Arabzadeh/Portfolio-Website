"use strict";

import { emailAddress, github, discord } from "../../JS/constants/constants";

export const footerData = {
  email: emailAddress,
  carrier: "Front-End Developer",
  media: [
    {
      imgSrc: "/images/Vectorgithub.svg",
      href: github,
    },
    {
      imgSrc: "/images/Discord.svg",
      href: discord,
    },
  ],
  copyRight: {
    copyRightText: "Copyright 2022. Made by Elias",
  },
};

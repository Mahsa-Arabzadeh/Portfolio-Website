"use strict";

import domGenerator from "dom-generator";
import button from "../buttonComponent/button";
import { emailAddress } from "../../JS/constants/constants";

export default function contactForm() {
  return domGenerator({
    tag: "form",
    attributes: { class: "contact-form" },
    eventListeners: {
      submit: (event) => {
        event.preventDefault();
        sendEmail();
        reset();
        return false;
      },
    },
    children: [
      {
        tag: "div",
        attributes: { class: "top-form" },
        children: [
          {
            tag: "input",
            attributes: {
              class: "name-input",
              type: "text",
              placeholder: "Name",
              required: "",
            },
          },
          {
            tag: "input",
            attributes: {
              class: "email-input",
              type: "email",
              placeholder: "Email",
              required: "",
            },
          },
        ],
      },
      {
        tag: "input",
        attributes: {
          class: "title-input",
          type: "text",
          placeholder: "Title",
          required: "",
        },
      },
      {
        tag: "textarea",
        attributes: { class: "textarea-input", placeholder: "Message" },
      },
      {
        tag: button({
          textContent: "Send",
          eventListeners: {},
          shape: "primary-border",
          type: "submit",
        }),
      },
    ],
  });
}

async function sendEmail() {
  try {
    await loadScript("https://smtpjs.com/v3/smtp.js");

    const form = document.querySelector(".contact-form");
    const userName = form.querySelector(".name-input").value;
    const userEmail = form.querySelector(".email-input").value;
    const userMessage = form.querySelector(".textarea-input").value;

    Email.send({
      secureToken: "50bfcd8c-adbb-46ed-a0f7-00572dc6d979",
      To: "keyheaven2003@gmail.com",
      From: userEmail,
      Subject: "New contact form enquiry",
      Body: `
      Name: ${userName}
      Email: ${userEmail}
      Message: ${userMessage}
      `,
    }).then((message) => alert("Message sent successfully"));
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

function loadScript(url) {
  return fetch(url)
    .then((response) => response.text())
    .then((scriptText) => {
      const scriptElement = document.createElement("script");
      scriptElement.textContent = scriptText;
      document.head.appendChild(scriptElement);
    })
    .catch((error) => {
      console.error("Error loading script:", error);
    });
}

function reset() {
  const form = document.querySelector(".contact-form");
  form.reset();
}

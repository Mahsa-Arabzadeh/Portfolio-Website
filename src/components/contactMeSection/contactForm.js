"use strict";

import domGenerator from "dom-generator";
import button from "../buttonComponent/button";
import { userName } from "../../JS/constants/constants";

export default function contactForm() {
  return domGenerator({
    tag: "form",
    attributes: { class: "contact-form" },
    eventListeners: {
      submit: async (event) => {
        event.preventDefault();
        await sendEmail();
        resetForm();
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

async function loadScript(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch script: ${response.statusText}`);
    }
    const scriptText = await response.text();
    const scriptElement = document.createElement("script");
    scriptElement.type = "text/javascript";
    scriptElement.text = scriptText;
    document.head.appendChild(scriptElement);
  } catch (error) {
    throw new Error(error);
  }
}

async function initEmailJS() {
  try {
    await loadScript(
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
    );
    await emailjs.init({
      publicKey: "x2Lq3viPQ3RwmRq0H",
    });
  } catch (error) {
    throw new Error(error);
  }
}

initEmailJS();

function sendEmail() {
  const name = document.querySelector(".name-input");
  const email = document.querySelector(".email-input");
  const title = document.querySelector(".title-input");
  const message = document.querySelector(".textarea-input");

  emailjs
    .send("service_cw73z64", "template_w6bbo8i", {
      from_name: name.value,
      to_name: userName,
      title: title.value,
      email_id: email.value,
      message: message.value,
    })
    .then(function (res) {
      alert("success", res.status);
    });
}

function resetForm() {
  const form = document.querySelector(".contact-form");
  form.reset();
}

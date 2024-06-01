"use strict";

import domGenerator from "dom-generator";
import button from "../buttonComponent/button";
import { userName, publicKey } from "../../JS/constants/constants";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

export default function contactForm() {
  return domGenerator({
    tag: "form",
    attributes: { class: "contact-form" },
    eventListeners: {
      submit: (event) => {
        event.preventDefault();
        initEmailJS();
        sendEmail();
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
          btnClass: "send-btn",
        }),
      },
    ],
  });
}

function initEmailJS() {
  try {
    emailjs.init({
      publicKey: publicKey,
    });
  } catch (error) {
    throw new Error(error);
  }
}

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
      Swal.fire({
        title: "Email sent!",
        text: "We will contact you as soon as possible.",
        icon: "success",
      });
    });
}

function resetForm() {
  const form = document.querySelector(".contact-form");
  form.reset();
}

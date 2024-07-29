"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export const ContactUs = () => {
  const form = useRef();
  const router = useRouter();

  const [succes, setSucces] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ivylpre", "template_iigtitq", form.current, {
        publicKey: "zr2ejNUPir4nah4Kg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSucces(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      className="w-3/4 flex flex-col gap-2
    "
      ref={form}
      onSubmit={sendEmail}
    >
      <div className="flex flex-col">
        <label>Nombre</label>
        <input className="rounded-md h-10 p-2" type="text" name="user_name" />
      </div>
      <div className="flex flex-col">
        <label>Correo</label>
        <input className="rounded-md h-10 p-2" type="email" name="user_email" />
      </div>
      <div className="flex flex-col">
        <label>Mensaje</label>
        <textarea className="rounded-md h-40 p-2" name="message" />
      </div>
      <Button className="bg-black" type="submit" value="Send">
        Send
      </Button>
      {succes && (
        <strong className="bg-red-900">Enseguida te contactamos.</strong>
      )}
    </form>
  );
};

import { React } from "react";
import { useStore } from "@nanostores/react";
import { Message } from "../../store/message";

export const ContactForm = () => {
  const message = useStore(Message);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.sent) {
      Details.setKey('sent', true)
      const params = {
        email: details.email,
        phone: details.phone,
        message: details.message,
      }
      await fetch('/api/send?' + new URLSearchParams(params))
        .then((res) => {
          console.log(res.status);
        })
    } else {
      return;
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => Message.setKey("message", e.target.value)}
          name="message"
          id="message"
          placeholder="Enter your message"
          type="text"
          rows="4"
          required
        />
        <div>
          <input
            onChange={(e) => Message.setKey("email", e.target.value)}
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            onChange={(e) => Message.setKey("phone", e.target.value)}
            name="phone"
            type="text"
            placeholder="Phone Number"
            required
          />
        </div>
        <button type="submit">{message.sent ? "Sent!" : "Send Details"}</button>
      </form>
    </>
  );
};

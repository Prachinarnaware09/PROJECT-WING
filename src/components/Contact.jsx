import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h1>Contact Me</h1>

      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
};

export default Contact;

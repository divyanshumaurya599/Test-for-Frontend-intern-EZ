import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.message) {
      setStatus("All fields are required");
      return;
    }

    if (!validateEmail(form.email)) {
      setStatus("Invalid email address");
      return;
    }

    try {
      const res = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", form);

      if (res.status === 200) {
        setStatus("Form Submitted");
        setForm({ name: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus("Something went wrong");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        type="text"
        placeholder="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <textarea
        placeholder="Message"
        name="message"
        value={form.message}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>

      {status && <p className="status">{status}</p>}
    </form>
  );
}

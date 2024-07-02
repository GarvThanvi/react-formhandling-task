import { useState } from "react";
import styles from "./ContactForm.module.css";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

export default function () {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/addInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      toast.success("Form submitted successfully!");
      setLoading(false);
      Navigate("/")
    } catch (error) {
      console.log(error);
      toast.error("Error submitting form!");
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.formHeading}>Contact Us</h1>
      <div className={styles.names}>
        <input
          onChange={handleChange}
          className={styles.inputField}
          type="text"
          id="fname"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          className={styles.inputField}
          type="text"
          id="lname"
          placeholder="Last Name"
        />
      </div>

      <input
        onChange={handleChange}
        className={styles.inputEmail}
        type="email"
        id="email"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        className={styles.inputNumber}
        type="tel"
        id="phone"
        placeholder="Phone Number"
      />
      <div>
        <label htmlFor="">Message</label> <br />
        <textarea
          onChange={handleChange}
          name=""
          id="message"
          rows={10}
          cols={48}
        ></textarea>
      </div>
      <button type="submit" className={styles.submitbtn}>
        {loading ? "Loading..." : "Submit"}
      </button>
    </form>
  );
}

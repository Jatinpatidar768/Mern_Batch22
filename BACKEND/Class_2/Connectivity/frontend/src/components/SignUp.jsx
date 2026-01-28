import React, { useState } from "react";
import "./SignUp.css"; // external CSS
import axios from "axios"
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "", // new field
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    // TODO: connect to backend / API
  };

  async function Signup() {
    console.log("Signing up")
    try {
      const data = await axios.post("http://localhost:3300/api/v1/register",formData);
      console.log("api resoponse is ",data)
      
    }

    catch (err) {
      console.log("got error while signing up", err)
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="auth-input"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="auth-input"
        />

        {/* New dropdown field */}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
          className="auth-input"
        >
          <option value="">Select User Type</option>
          <option value="donor">Simple Donor</option>
          <option value="doctor">Doctor</option>
        </select>

        <button type="submit" className="auth-button" onClick={Signup}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

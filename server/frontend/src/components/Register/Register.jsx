
import React, { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration form submitted");
  };

  return (
    <div className="container mt-5">
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="userName"
          placeholder="Username" value={form.userName}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="firstName"
          placeholder="First Name" value={form.firstName}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="lastName"
          placeholder="Last Name" value={form.lastName}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="email"
          type="email" placeholder="Email" value={form.email}
          onChange={handleChange} required />

        <input className="form-control mb-3" name="password"
          type="password" placeholder="Password" value={form.password}
          onChange={handleChange} required />

        <button className="btn btn-primary" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

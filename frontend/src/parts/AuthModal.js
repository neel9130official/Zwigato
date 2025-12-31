
import React, { useState, useEffect } from "react";
import "./AuthModal.css";

const API_BASE = process.env.REACT_APP_API_URL;

function AuthModal({ onClose, onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    mobile: "",
    email: "",
    password: "",
    photo: null,
    photoPreview: null,
  });

  // Cleanup image preview URL
  useEffect(() => {
    return () => {
      if (formData.photoPreview) {
        URL.revokeObjectURL(formData.photoPreview);
      }
    };
  }, [formData.photoPreview]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
        photoPreview: URL.createObjectURL(file),
      });
    }
  };

  // Submit login / signup
  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    let response;

    if (isLogin) {
      response = await fetch(`${API_BASE}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
    } else {
      const form = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key] && key !== "photoPreview") {
          form.append(key, formData[key]);
        }
      });

      response = await fetch(`${API_BASE}/users/signup`, {
        method: "POST",
        body: form,
      });
    }

    // ✅ SAFE RESPONSE PARSING (NO REDECLARATION)
    const contentType = response.headers.get("content-type");
    let data;

    if (contentType && contentType.includes("application/json")) {
      data = await response.json();
    } else {
      const text = await response.text();
      console.error("❌ Non-JSON response:", text);
      throw new Error("Server returned invalid response");
    }

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }

    if (data.token) {
      localStorage.setItem("token", data.token);
      onLogin(data.token, data.user);
      onClose();
    }
  } catch (err) {
    console.error("Auth error:", err);
    setError(err.message);
  }
};


  return (
    <div className="auth-overlay">
      <div className="auth-modal animate-popup">
        <div className="auth-header">
          <h2>{isLogin ? "Welcome Back!" : "Create Account"}</h2>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="photo-upload">
              <label htmlFor="photo">
                <div className="photo-frame">
                  {formData.photoPreview ? (
                    <img src={formData.photoPreview} alt="Preview" />
                  ) : (
                    <span>📷 Upload</span>
                  )}
                </div>
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                hidden
                onChange={handleFileChange}
              />
            </div>
          )}

          {!isLogin && (
            <>
              <input name="name" placeholder="Full Name" onChange={handleChange} required />
              <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
              <input name="address" placeholder="Address" onChange={handleChange} required />
              <input name="mobile" placeholder="Mobile" onChange={handleChange} required />
            </>
          )}

          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <p>New user? <span onClick={() => setIsLogin(false)}>Sign Up</span></p>
          ) : (
            <p>Already registered? <span onClick={() => setIsLogin(true)}>Login</span></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;

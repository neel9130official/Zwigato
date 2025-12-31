import React from "react";
import "./ZwigatoPopup.css";

const ZwigatoPopup = ({ show, title, message, onClose, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-card animate-popup">
        <div className="popup-header">
          <span className="popup-logo">🍽️</span>
          <h2 className="popup-title">{title}</h2>
        </div>
        <p className="popup-message">{message}</p>

        <div className="popup-buttons">
          {onConfirm && (
            <button className="popup-btn confirm-btn" onClick={onConfirm}>
              Login Now
            </button>
          )}
          <button className="popup-btn close-btn" onClick={onClose}>
            Maybe Later 😋
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZwigatoPopup;

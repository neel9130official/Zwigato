import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* --- Brand & Info --- */}
        <div className="footer-section">
          <h3>ZWIGATO</h3>
          <p>
            Order delicious food from your favorite restaurants, delivered fast at your doorstep.
          </p>
        </div>

        {/* --- Company Links --- */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* --- Support Links --- */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Cancellation Policy</a></li>
            <li><a href="#">Delivery FAQs</a></li>
          </ul>
        </div>

        {/* --- Legal Links --- */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>
      </div>

      {/* --- Bottom Line --- */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Zwigato. All rights reserved.  
          &nbsp;|&nbsp; Developed by{' '}
          <a 
            href="https://your-link-here.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="dev-link"
          >
        Neelkanth
          </a>
        </p>
      </div>
    </footer>
  );
}

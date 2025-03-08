import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="container">
      <main>
        <h1>Contact Us</h1>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
        <Link href="/">
          <span className="back-link">Back to Home</span>
        </Link>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 2rem;
          background-color: #282c34;
          color: white;
        }
        main {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        h1 {
          margin-bottom: 2rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        label {
          margin-bottom: 0.5rem;
        }
        input, textarea {
          padding: 0.5rem;
          border: 1px solid #61dafb;
          background-color: #1a1e23;
          color: white;
          border-radius: 4px;
        }
        button {
          padding: 0.8rem 1.5rem;
          background-color: #61dafb;
          color: #282c34;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          transition: opacity 0.3s ease;
        }
        button:hover {
          opacity: 0.9;
        }
        .back-link {
          color: #61dafb;
          text-decoration: underline;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
} 
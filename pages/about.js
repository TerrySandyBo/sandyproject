import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <main>
        <h1>About Us</h1>
        <p>Welcome to our project! This is a sample about page.</p>
        <Link href="/">
          <span className="back-link">Back to Home</span>
        </Link>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #282c34;
          color: white;
        }
        main {
          text-align: center;
        }
        h1 {
          margin-bottom: 2rem;
        }
        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
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
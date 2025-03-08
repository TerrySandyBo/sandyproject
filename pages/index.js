import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Sandy Project</h1>
        <p>Your new website is ready!</p>
        <nav className="navigation">
          <Link href="/about">
            <span className="nav-link">About</span>
          </Link>
          <Link href="/contact">
            <span className="nav-link">Contact</span>
          </Link>
        </nav>
      </header>
      <style jsx>{`
        .App {
          text-align: center;
        }
        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }
        .navigation {
          margin-top: 2rem;
        }
        .nav-link {
          color: #61dafb;
          margin: 0 1rem;
          padding: 0.5rem 1rem;
          border: 1px solid #61dafb;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          background-color: #61dafb;
          color: #282c34;
        }
      `}</style>
    </div>
  );
} 
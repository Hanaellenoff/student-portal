import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Login } from "./Login";

export function Header() {
  return (
    <header>
      <div className="navbar">
        <h2>Student Portal</h2>
        <nav>
          <button>Resume</button>
          <button>
            <Link to="/capstone">Capstone</Link>
          </button>
          <button>Log Out</button>
          <div className="loginlink">
            <Login />
          </div>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Login } from "./Login";

export function Header() {
  return (
    <header>
      <div className="navbar">
        <h1>Student Portal</h1>
        <nav>
          <button>Resume</button>
          <button>Capstone</button>
          <button>Log Out</button>
          <div className="loginlink">
            <Login />
          </div>
        </nav>
      </div>
    </header>
  );
}

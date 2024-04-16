import { Link } from "react-router-dom";

import React from "react";
import { useState } from "react";
import { Login } from "./Login";

export function Header() {
  return (
    <header>
      <div className="navbar">
        <nav>
          <h2>Student Portal</h2>
          <a href="#">
            <button>Resume</button>
          </a>
          <a href="#">
            <button>Capstone</button>
          </a>
          <a href="#">
            <button>Log Out</button>
          </a>

          <div className="loginlink">
            <Login />
          </div>
        </nav>
      </div>
    </header>
  );
}

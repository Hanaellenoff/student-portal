import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Login } from "./Login";

export function Header() {
  return (
    <header>
      <div className="navbar">
<<<<<<< HEAD
        <h1>Student Portal</h1>
        <nav>
          <button>Resume</button>
          <button>Capstone</button>
          <button>Log Out</button>
=======
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

>>>>>>> 0e6f9b106409d1f7b078add6fa4999136253ff48
          <div className="loginlink">
            <Login />
          </div>
        </nav>
      </div>
    </header>
  );
}

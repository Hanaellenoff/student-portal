import React from "react";
import { Login } from "./Login";
import { useState } from "react";
import { LoginModal } from "./LoginModal";

export function Header() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);

  const handleShowLogin = () => {
    setIsLoginVisible(true);
  };

  return (
    <header>
      <div className="navbar">
        <h1>Student Portal</h1>
        <nav>
          <a href="#">
            <button>Resume</button>
          </a>
          <a href="#">
            <button>Capstone</button>
          </a>
          <a href="#">
            <button onClick={handleShowLogin}>Login</button>
          </a>
          <a href="#">
            <button>Log Out</button>
          </a>
        </nav>
      </div>
    </header>
  );
}

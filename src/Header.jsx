import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <div className="navbar">
        <h1>Student Portal</h1>
        <nav>
          <Link className="nav-link" to="/Resume">
            <button onSubmit={}>Resume</button>
          </Link>
          <a href="#">
            <button>Capstone</button>
          </a>
          <a href="#">
            <button>Login</button>
          </a>
          <a href="#">
            <button>Log Out</button>
          </a>
        </nav>
      </div>
    </header>
  );
}
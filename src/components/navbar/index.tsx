import { Link } from "react-router-dom";
import "styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center navbar">
      <div className="flex items-center branding">
        <Link to="/">
          <h4 className="h4">PoP Quiz</h4>
        </Link>
      </div>

      <div className="searchDiv" />

      <ul className="flex items-center pages">
        <Link to="/login">
          <span className="flex flex-col items-center">
            <li>
              <i className="far fa-user" />
            </li>
            <li className="pages-title">Profile</li>
          </span>
        </Link>
      </ul>
    </nav>
  );
}

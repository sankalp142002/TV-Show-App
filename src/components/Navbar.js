import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <nav className="navbar__nav">
          <h3 className="nav__brand">
            <Link to="/"> Search Any Show
            </Link>
          </h3>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

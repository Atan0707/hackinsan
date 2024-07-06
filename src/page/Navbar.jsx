import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="links">
        Home
      </Link>
      <div className="links">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/" className="links">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

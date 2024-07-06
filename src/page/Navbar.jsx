import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Navbar;

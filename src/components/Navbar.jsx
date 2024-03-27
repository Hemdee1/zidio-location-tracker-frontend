import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="heading">
      <Link to="/">
        <h1>Location Tracker</h1>
      </Link>
      <div className="nav-cont">
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};
export default Navbar;

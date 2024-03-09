import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Homepage</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;

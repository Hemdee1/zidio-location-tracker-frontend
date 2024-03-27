import { useEffect } from "react";
import { Link } from "react-router-dom";
import { signupAPI } from "../api";

const Home = () => {
  useEffect(() => {
    const body = {
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@gmail.com",
      password: "Johndoe",
    };

    const data = signupAPI(body);
    console.log(data);
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold">Homepage</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Home;

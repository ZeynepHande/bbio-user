import { useState } from "react";
import "./Login.css";
import { FaLock, FaUser } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "@/repositories/auth_respository";
export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginMu = useMutation({
    mutationFn: () => login(userName, password),
    onSuccess: (value) => {
      window.localStorage.setItem("accessToken", value.access_token);
      navigate("/dashboard");
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <div className="input-box">
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <FaUser className="icon" />
      </div>
      <div className="input-box">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <FaLock className="icon" />
      </div>
      <div className="remember-forgot">
        <label>
          <input type="checkbox" />
          Remember me
        </label>
        <a href="#">Forgot password?</a>
      </div>
      <button
        onClick={() => {
          loginMu.mutate();
          console.log("bkbvkwvöwbdcöwe");
        }}
      >
        Login
      </button>
      <div className="register-link">
        <p>
          Don't have an account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignup) {
      alert("Signup successful! Please login.");
      setIsSignup(false);
      return;
    }

    try {
      login(email, password);
      navigate("/dashboard"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isSignup ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isSignup
            ? "Sign up to access the dashboard"
            : "Login to your analytics dashboard"}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="switch-auth">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsSignup(false)}>Login</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setIsSignup(true)}>Sign up</span>
            </>
          )}
        </div>

        {!isSignup && (
          <p className="demo-cred">
            <b>editor@demo.com</b> / <b>password123</b>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;

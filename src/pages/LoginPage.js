import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  
import '../../src/Styles.css';
import loginLogo from '../assets/loginlogo.png';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();  

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username: ${inputUsername}, Password: ${inputPassword}`);
    if (inputUsername === 'admin@gmail.com' && inputPassword === 'password') {    
      navigate('/home');
    } else {
      setShow(true);
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className="sign-in__wrapper">
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h4 className="text-left" style={{ color: "black", fontWeight: "bold" }}>Sign In</h4>
                <div className="row mt-4">
                  <div className="col-12 text-left">
                    <a href="#!" className="link-secondary text-decoration-none" style={{ color: "black" }}>
                      New User?
                    </a>{" "}
                    <a href="#!" style={{ textDecoration: "none", color: "blue" }}>
                      Create an account
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-4">
                  <div className="row gy-3">
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          style={{ borderColor: "black", borderRadius: "0" }}
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Username or email"
                          value={inputUsername}
                          onChange={(e) => setInputUsername(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="mb-3">
                        <input
                          style={{ borderColor: "black", borderRadius: "0" }}
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          placeholder="Password"
                          value={inputPassword}
                          onChange={(e) => setInputPassword(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          name="remember_me"
                          id="remember_me"
                          style={{ borderColor: "black", borderRadius: "0" }} 
                        />
                        <label
                          className="form-check-label text-secondary"
                          htmlFor="remember_me"
                        >
                          Keep me logged in
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-dark btn-lg" type="submit" style={{ borderRadius: "0" }}>
                          {loading ? "Sign in..." : "Sign In"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="hr-container mt-4 mb-4">
                  <div>Or Sign In With</div>
                </div>

                <div className="row justify-content-center mb-4">
                  <Footer /> 
                </div>

                {show && (
                  <Alert variant="danger" className="mt-3">
                    Invalid username or password. Please try again.
                  </Alert>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <img
                className="img-fluid w-100 h-100 object-fit-cover"
                loading="lazy"
                src={loginLogo}
                alt="Login Logo"
                style={{ borderRadius: "0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;

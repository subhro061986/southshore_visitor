import React, { useEffect, useState } from "react";
import companyLogo from '../assets/images/southshore_logo_alt.svg';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../Context/Authcontext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { logIn, authDeatils } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passShow, setPassShow] = useState(false);

  // const login = () => {
  //   navigate("/admin/managebanner");
  // };

  useEffect(() => {
  }, [authDeatils])

  const emailHandler = (e) => {
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const doLogin = async () => {
    if (email === '' && password === '') {
      setEmailError('Please enter email');
      setPasswordError('Please enter password');
    }
    else if (email === '') {
      setEmailError('Please enter email');
      setPasswordError('');
    }
    else if (password === '') {
      setPasswordError('Please enter password');
      setEmailError('');
    }

    else {
      var sendLoginData = {
        email: email,
        password: password
      }

      const resp = await logIn(sendLoginData)
      // console.log("login response", resp)

      if (resp === undefined || resp === null) {
        // navigate('/');
        alert("login Unsuccessful");
        // console.log("Login Unsuccessful")

      }
      else {
        // console.log("Login Successful");
        // console.log("Login data received : ", resp);
        // console.log("Auth details received : ", authDeatils);
        const result = jwtDecode(resp.token)
        if (result) {
          navigate('/admin/managebanner');
        }
        // else if (result.role === "Publisher Admin" || result.role === "Publisher User") {
        //     navigate('/admin/booklistpub');
        // }
        // else {
        //     navigate('/admin');
        // }
      }

    }


  }

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="content-wrapper d-flex align-items-center auth">
          <div className="row flex-grow">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left p-5">
                <div className="brand-logo">
                  <img src={companyLogo} />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <div className="pt-3">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"
                      onChange={(e) => { emailHandler(e) }}
                      value={email} />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"
                      onChange={(e) => { passwordHandler(e) }}
                      value={password} />
                  </div>
                  <div className="mt-3 d-grid gap-2">
                    <button
                      className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn"
                      onClick={() => { doLogin() }}
                    >SIGN IN</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default LoginPage;
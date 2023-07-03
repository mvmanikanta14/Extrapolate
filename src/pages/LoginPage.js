import {  useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
// import api from "../services/api";
// import tokenService from "../services/token.service";
import {  useNavigate, useLocation } from "react-router-dom";


const LoginPage = (props) => {

  const navigate = useNavigate();
  const location = useLocation();

  //  const from = location.state?.from?.pathname || "/dashboard";
  const onclicksub = async (e) => {
    navigate('/dashboard');
  }
   navigate('/dashboard');
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");

  // useEffect(() => {
  //   setErrMsg("");
  //   // loadFunction();
  // }, [username, password]);



  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   return api
  //     .post("/auth/signin", {
  //       username,
  //       password,
  //     })
  //     .then((response) => {
  //       if (response.data.accessToken) {
  //         tokenService.setUser(response.data);
  //         navigate(from, { replace: true });
  //       }
  //     }, err =>{
  //       errMsg(err.message);
  //     });
  // };

  return (
    <div>
      <div className="vc">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6 login-card">
              <div className="main-logo">
                {" "}
                <img src="../web-logo.png" className="img-fluid mt-lg-3" alt="" />{" "}
              </div>

              <Card className="col-md-10 card-h-center login-form border-0">
                <div className="text-center mt-3">
                  <h4> Sign in to Account </h4>
                  <p className="mb-0 text-dark">
                    {" "}
                    Enter your userid & password to login{" "}
                  </p>
                </div>

                <Form className="p-lg-2">
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label> User Id </Form.Label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      // onChange={(e) => setUsername(e.target.value)}
                      // value={username}
                       
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>
                      Password
                    </Form.Label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      // onChange={(e) => setPassword(e.target.value)}
                      // value={password}
                       
                    />
                  </Form.Group>
                  {/* {errMsg} */}

                  <Form.Group className="mb-3 float-left">
                    <Form.Check type="checkbox" label="Remember Password" />
                  </Form.Group>

                  <Nav.Link
                    href="https://www.google.com/"
                    className="p-0 float-right"
                  >
                    {" "}
                    Forgot Password?{" "}
                  </Nav.Link>

                  <Button
                    type="button"
                    size="sm"
                    className="w-100 rounded-50 theme-btn"
                    onClick={onclicksub}
                 >
                    {""}
                    Sign In
                  </Button>
                </Form>
              </Card>
            </div>

            <Card className="col-md-6 d-none d-lg-block border-0 bg-content">
              <Card.Body className="information p-lg-4  ">
                 
                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/72/Jagadguru_Bharathi_Teertha_2018.jpg" className="welcome-img" /> 
                <p>
                  
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled ....
                </p>
              </Card.Body>
              <p className="card-foot ">
                {" "}
                Extrapolate © 2023 Developed By Sadhguru Audit & GRC Solutions Pvt
                Ltd{" "}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

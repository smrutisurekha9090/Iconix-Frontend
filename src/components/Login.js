import React ,{useState, useContext} from "react";
import { useNavigate } from 'react-router-dom';
import {UserContext} from "../App";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function Login() {

    const {state,dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');

    const loginUser =async (e) =>{
        e.preventDefault();

        const res = await fetch('/signin' , {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body:JSON.stringify({
             email, password
          })

        });

        const data =res.json();
        if(res.status === 400 ||!data){
          window.alert("Invalid Credentials");
        }else{
          dispatch({type:"USER", payload:true})
          window.alert("Login Successful");
          navigate('/');
        }
    }



  return (
    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
             height: "200px",
        }}
      ></div>

      <MDBCard
        // className="mx-5 mb- p-3 shadow-5"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          width:"40%",
          marginLeft:"30%"
        }}
      >
        <MDBCardBody className="p-5">
          <h2 className="fw-bold mb-5">Login now</h2>

          <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" name="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
          <MDBInput wrapperClass="mb-4" label="Password" id="form1" type="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)}/>

          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Subscribe to our newsletter"
            />
          </div>

          <MDBBtn className="w-90 mb-4" size="md"
            style={{
              marginLeft:"45%"
            }}

            onClick={loginUser}
          >
            Login
          </MDBBtn>

          <div className="text-center">
            <p>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;

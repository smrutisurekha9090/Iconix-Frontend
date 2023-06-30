import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Signup() {
  const navigate = useNavigate();

  // const PostData = () => {
  //   navigate('/login');
  // };

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert(" Registration Successfull");
      console.log("Successful Registration");

      navigate("/login");
    }
  };

  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5" style={{ maxWidth: "600px" }}>
        <MDBCardBody className="px-5">
          <h5 className="text-uppercase text-center mb-5">Create an account</h5>
          <MDBInput
            wrapperClass="mb-4"
            label="Your Name"
            size="sm"
            id="form1"
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputs}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="sm"
            id="form2"
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Mobile Number"
            size="sm"
            id="form2"
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Profession"
            size="sm"
            id="form2"
            type="text"
            name="work"
            value={user.work}
            onChange={handleInputs}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            size="sm"
            id="form3"
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputs}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Confirm your password"
            size="sm"
            id="form4"
            type="password"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
          />
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <MDBBtn
            className="mb-4 w-100 gradient-custom-4"
            size="sm"
            onClick={PostData}
          >
            Register
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;

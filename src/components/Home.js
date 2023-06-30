import React , {useState,useEffect} from "react";
import "../App.css";

const Home = () => {

  

  const [userName, setUserName] = useState('');
  const [show,setShow] =useState(false);
  

  const userHomePage = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

      } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);




  return (
    <>
      <div className="home">
        <div className="home-div h-100 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex justify-content-center">
            <p
              className="fs-3"
              style={{ letterSpacing: "0.5em", color: "skyblue" }}
            >
              WELCOME
            </p>
            <h1>{userName}</h1>
          </div>
          <h2>{show ? 'Happy, to see you back' :'We are the Mern Developer' }</h2>
        </div>
      </div>
    </>
  );
};

export default Home;

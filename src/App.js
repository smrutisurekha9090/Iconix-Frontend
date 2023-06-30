import React ,{createContext, useReducer} from "react";
import { Routes,Route,  } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { initialState,reducer } from "../src/reducer/UseReducer";

//1:contextAPI
export const UserContext =createContext();

const Routing =() =>{
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
   
  )
}


const App = () => {
  const [state,dispatch] =useReducer(reducer, initialState )
  return (
    <>

      <UserContext.Provider value={{state, dispatch}}>
        <Navbar />
        <Routing/>
      </UserContext.Provider>

    </>

  );
};

export default App;

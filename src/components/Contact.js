import React,{useState,useEffect} from "react";
import "../App.css";

const Contact = () => {



  const [userData, setUserData] = useState({name:"",email:"",phone:"",message:""});

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({...userData, name:data.name, email:data.email,phone:data.phone});
    

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  //we are storing the data in states
  const handleInputs=(e)=>{
    const name =e.target.name;
    const value =e.target.value;

      setUserData({...userData, [name]:value});
  }

  //send the data to backened

  const contactForm = async(e) =>{
    e.preventDefault();

    const {name,email,phone,message} =userData;
    const res=await fetch('/contact' ,{
        method:"POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,email,phone,message
        })
    });

    const data =await res.json();
    if (!data) {
   
      console.log("message not send");
    } else {
      window.alert(" Message send Successfull");
      setUserData({...userData,message:""});
    }
  }

  return (
    <div className="contact-us">
      <h2>Get in Touch</h2>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={userData.name}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            value={userData.email}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Phone Number</label>
          <input
            type="text"
            id="phno"
            name="phone"
            placeholder="Your Phone Number"
            value={userData.phone}
            onChange={handleInputs}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={userData.message}
            onChange={handleInputs}

            required
          ></textarea>
        </div>

        <button type="submit" onClick={contactForm}>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

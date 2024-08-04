import React from "react";
import Loginbox from "./Login/Loginbox";
import Signup from "./Signup/Signup";
import Footer from "./Footer/Footer";
import Reactnavbar from "./Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer2 from "./Footer/Footer2";
import './App.css'


function App() {
  return (
    <>
      <div className="nav-container">
        <Reactnavbar />
      </div>
      <div className="main">
        <Loginbox />
        <Signup />
      </div>
      <div>
        <Footer />
        {/* <Footer2 /> */}
      </div>
    </>
  );
}

export default App;

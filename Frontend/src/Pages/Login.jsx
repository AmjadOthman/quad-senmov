import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import Form from "../Components/Form";
function Login() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Form />

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Login;

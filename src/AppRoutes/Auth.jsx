import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Redirect based on isLoggedIn state
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, []); // Empty dependency array ensures useEffect runs only once after mount

  return <div></div>;
};

export default Auth;

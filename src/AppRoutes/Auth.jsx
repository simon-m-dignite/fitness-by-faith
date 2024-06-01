import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (isLoggedIn) {
    navigate("/dashboard");
  } else {
    navigate("/login");
  }
  return <div></div>;
};

export default Auth;

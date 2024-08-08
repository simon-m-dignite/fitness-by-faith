import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [name, setName] = useState(localStorage.getItem('name'))
  const [email, setEmail] = useState(localStorage.getItem('email'))

  const login = (data) => {
    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.userRecord.fullName);
    localStorage.setItem("email", data.userRecord.email);
    setToken(data.token);
    setName(data.userRecord.fullName);
    setEmail(data.userRecord.email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

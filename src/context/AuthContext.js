import { createContext, useContext, useState } from "react";

export const users = [
  {
    email: "editor@demo.com",
    password: "password123",
    role: "editor",
  },
];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

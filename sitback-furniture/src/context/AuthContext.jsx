import { createContext, useState } from "react";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    username: "",
    name: "",
    isLoading: true,
  });

  const handleLogout = () => {
    setAuth({
      username: "",
      name: "",
      isLoading: false,
    });
  };
  return (
    <AuthContext.Provider value={{ ...auth,setAuth, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};


export { AuthProvider };
export default AuthContext;

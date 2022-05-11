import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@ask_demo:token");
    const user = localStorage.getItem("@ask_demo:user");

    if (token && user) {
      return { user: user, token };
    }

    return {};
  });

  const signIn = useCallback(({ email, password }) => {
    api
      .post("/login", { email, password })
      .then((res) => {
        localStorage.setItem("@ask_demo:token", res.data.token);
        localStorage.setItem("@ask_demo:user", JSON.stringify(res.data.user));

        setData({ token, user });
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, token: data.token, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };

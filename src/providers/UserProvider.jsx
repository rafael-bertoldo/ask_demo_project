import { createContext, useContext, useState } from "react";
import api from "../services/api";

const UserContext = createContext({});

export const useUsers = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUsers must be used within an UsersProvider");
  }

  return context;
};

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getEspecificUser = (user_id, setUser) => {
    const token = localStorage.getItem("@user_demo:token") || "";
    api
      .get(`/user/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
  };

  return (
    <UserContext.Provider value={{ users, getEspecificUser }}>
      {children}
    </UserContext.Provider>
  );
};

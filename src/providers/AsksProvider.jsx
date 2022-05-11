import { createContext, useCallback, useContext, useState } from "react";
import api from "../services/api";

const AsksContext = createContext({});

export const useAsks = () => {
  const context = useContext(AsksContext);

  if (!context) {
    throw new Error("useAsks must be used within an AsksProvider");
  }

  return context;
};

export const AsksProvider = ({ children }) => {
  const [asks, setAsks] = useState([]);

  const loadAsks = useCallback((user) => {
    api
      .get(`/classroomAsk/${user.user_classroom_id}`)
      .then((res) => setAsks(res.data))
      .catch((e) => console.log(e));
  }, []);

  const createAsk = useCallback((data, user) => {
    const token = localStorage.getItem("@ask_demo:token") || "";

    api
      .post("/ask", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => loadAsks(user));
  }, []);

  const checkAsk = useCallback((ask_id, user) => {
    const token = localStorage.getItem("@ask_demo:token") || "";
    const data = {
      ask_status: "answered",
    };

    api
      .patch(`/ask/${ask_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadAsks(user));
  }, []);

  const redflagAsk = useCallback((ask_id, user) => {
    const token = localStorage.getItem("@ask_demo:token") || "";
    const data = {
      ask_status: "redflag",
    };

    api
      .patch(`/ask/${ask_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadAsks(user));
  }, []);

  const deleteAsks = (ask_id, user) => {
    const token = localStorage.getItem("@ask_demo:token") || "";

    api
      .delete(`ask/${ask_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadAsks(user));
  };

  const editAsk = useCallback((ask_id, data, user) => {
    const token = localStorage.getItem("@ask_demo:token") || "";

    api
      .patch(`ask/${ask_id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => loadAsks(user));
  });

  return (
    <AsksContext.Provider
      value={{
        asks,
        setAsks,
        createAsk,
        loadAsks,
        checkAsk,
        redflagAsk,
        deleteAsks,
        editAsk,
      }}
    >
      {children}
    </AsksContext.Provider>
  );
};

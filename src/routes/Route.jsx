import { Redirect, Route as ReactRoute } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function Route({
  isPrivate = false,
  component: Component,
  ...rest
}) {
  const { token } = useAuth();
  const user = JSON.parse(localStorage.getItem("@ask_demo:user")) || "";
  return (
    <ReactRoute
      {...rest}
      render={() => {
        isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/dashboard" : "/"} />
        );
      }}
    />
  );
}

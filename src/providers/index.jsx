import { AsksProvider } from "./AsksProvider";
import { AuthProvider } from "./AuthProvider";
import { UsersProvider } from "./UserProvider";

export const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UsersProvider>
        <AsksProvider>{children}</AsksProvider>
      </UsersProvider>
    </AuthProvider>
  );
};

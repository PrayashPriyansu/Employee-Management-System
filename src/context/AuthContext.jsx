import { createContext } from "react";
import useUser from "../feature/Authentication/useUser";

const authContext = createContext();

function AuthProvider({ children }) {

    const {isLoading, user} = useUser();




  return (
    <authContext.Provider value={user,}>{children}</authContext.Provider>
  );
}
export default AuthProvider;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useUser from "../feature/Authentication/useUser";
import Spinner from "./ui/Spinner";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  //1. Load the Authenticated User
  //When we initially login we have access to user data but with subsequent reload we dont have access to that use data so we need to load the user

  const { isLoading, isAuthenticated, isFetching } = useUser();

  //2. If there is no authenticated user, redirect to the login page

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && !isFetching) navigate("/signin");
    },
    [isLoading, isAuthenticated, navigate, isFetching]
  );

  //3. While loading , show spinner
  if (isLoading || isFetching) return <Spinner />;

  //4. If there is an user render the app
  if (isAuthenticated) return children;
}
export default ProtectedRoute;

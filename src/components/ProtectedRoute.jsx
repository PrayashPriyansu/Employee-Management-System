import { useNavigate } from "react-router-dom";
import useUser from "../feature/Authentication/useUser";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser();

  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/signin");
  }

  return <> {children}</>;
}
export default ProtectedRoute;

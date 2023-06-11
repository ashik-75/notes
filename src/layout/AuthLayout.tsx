import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../utils/getUser";

function AuthLayout() {
  const user = getUser();

  if (!user) {
    return <Navigate to={"/login?q=1"} />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;

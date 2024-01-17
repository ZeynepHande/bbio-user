import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className=" w-screen h-screen">
      <Outlet />
    </div>
  );
};

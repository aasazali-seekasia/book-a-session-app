import { Outlet } from "react-router-dom";
import NavHeader from "../components/Navigation/NavHeader";

export default function Root() {
  return (
    <>
      <NavHeader />
      <Outlet />
    </>
  );
}

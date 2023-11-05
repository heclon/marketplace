import { Outlet } from "react-router-dom";
// import { dept_footprint, pool_footprint } from "../util/constants.js";
// import { useEffect } from "react";

export default function Root() {
  // const navigate = useNavigate();

  // TODO: Maybe will need this useEffect, and to grab these footprints from the session or cookies
  // useEffect(() => {
  //   if (window.location.href === "http://localhost:5173/") {
  //     console.log("in the root!");
  //     navigate(`/${pool_footprint}/${dept_footprint}`);
  //   }
  // }, [navigate]);

  return (
    <div id="detail">
      <Outlet />
    </div>
  );
}

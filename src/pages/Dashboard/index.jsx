import React, { useContext } from "react";
import { StoreContext } from "../../stores";

function Dashboard(props) {
  const { useAuth } = useContext(StoreContext);
  return <div>{useAuth.user ? useAuth.user.name : "Vui lòng đăng nhập"}</div>;
}

export default Dashboard;

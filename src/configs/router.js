import { lazy } from "react";
import { routeByRoles } from "./roles";
const ROLES = localStorage.ROLES || "ADMIN";

const lazyLoad = (url) => {
  return lazy(() => import("../pages/" + url));
};

// check user have access denied to page
const checkAccessDenied = () => routeByRoles[ROLES].includes("dashboard");

export const routes = [
  {
    path: "/",
    exact: true,
    component: checkAccessDenied("dashboard") ? lazyLoad("Dashboard") : lazyLoad("AccessDenied"),
  },
  {
    path: "/dashboard",
    exact: true,
    component: checkAccessDenied("dashboard") ? lazyLoad("Dashboard") : lazyLoad("AccessDenied"),
  },
  {
    path: "",
    exact: true,
    component: lazyLoad("NotFound"),
  },
];

import React from "react";
import { Button, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { routeByRoles } from "../../configs/roles";
import { useTranslation } from "react-i18next";

const ROLES = localStorage.ROLES || "ADMIN";

const MenuByRoles = (props) => {
  const { t  } = useTranslation([ "common"]);
  let location = useLocation();
  const renderMenuItem = () => {
    let result;
    let items = routeByRoles[ROLES];
    result = items.map((item) => {
      return (
        <Menu.Item key={item}>
          <Button size="large" block>
            <Link to={`/${item}`}>{t(`${item}`)}</Link>
          </Button>
        </Menu.Item>
      );
    });
    return result;
  };

  return (
    <Menu className="main__menu flex__center__center flex__column" theme="dark" selectedKeys={location.pathname.replace('/', '') || "dashboard"} mode="inline">
      {renderMenuItem()}
    </Menu>
  );
};

export default MenuByRoles;

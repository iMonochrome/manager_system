import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "../configs/router";
import { Button, Layout, Select, Space } from "antd";
import Loading from "../components/Loading";
import { StyledSider, StyledLayout } from "./styled";
import MenuByRoles from "../components/MenuByRoles";
import { StoreContext } from "../stores";
import { useTranslation } from "react-i18next";

const { Header, Footer, Content } = Layout;
function App() {
  const { t, i18n } = useTranslation(["auth", "common"]);
  const { loading, setLoading, useAuth } = useContext(StoreContext);
  return (
    <Layout>
      <Router>
        <StyledSider width="250" className="sider flex__center__center">
          <div className="logo flex__center__center">
            LOGO
          </div>
          <MenuByRoles />
          <Select style={{ width: 120 }} defaultValue="vn" onChange={(value) => i18n.changeLanguage(value)}>
                <Select.Option key="vn" value="vn">
                  Tiếng Việt
                </Select.Option>
                <Select.Option key="en" value="en">
                  English
                </Select.Option>
              </Select>
        </StyledSider>
        <StyledLayout>
          <Header className="flex__between__center">
            <Button size="large" type="primary" onClick={() => setLoading(!loading)}>
              Toggle Loading
            </Button>
            <Space>
              <Button
                size="large"
                type="primary"
                onClick={async () => {
                  setLoading(true);
                  await useAuth.login();
                  setLoading(false);
                }}
              >
                {t(`login`)}
              </Button>
              <Button
                size="large"
                type="primary"
                onClick={async () => {
                  setLoading(true);
                  await useAuth.logout();
                  setLoading(false);
                }}
              >
                {t(`logout`)}
              </Button>
            </Space>
          </Header>
          <Content>
            <Suspense fallback={<Loading />}>
              <Switch>
                {routes.map((route, index) => (
                  <Route key={index} path={route.path} exact={route.exact} component={route.component}></Route>
                ))}
              </Switch>
            </Suspense>
            {loading && <Loading />}
          </Content>
          <Footer className="flex__center__center">Copyright © 2021 by Monochrome. All Rights Reserved.</Footer>
        </StyledLayout>
      </Router>
    </Layout>
  );
}

export default App;

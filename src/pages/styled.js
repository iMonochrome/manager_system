import styled from "styled-components";
import { Layout } from "antd";

const { Sider } = Layout;

export const StyledSider = styled(Sider)`
  .logo {
    height: 64px;
    font-size: 30px;
    color: #fff;
    margin-bottom: 5px;
    img {
      height: 50px;
      width: auto;
    }
  }
`;

export const StyledLayout = styled(Layout)`
  position: relative;
`;

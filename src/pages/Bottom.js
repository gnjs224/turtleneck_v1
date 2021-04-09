import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

const { Footer } = Layout;

function Bottom() {
  return <StyledFooter style={{ textAlign: "center" }}>Footer</StyledFooter>;
}
const StyledFooter = styled(Footer)`
  padding: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.56);
  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.56);
  background: #c0c0c0;
`;
export default Bottom;

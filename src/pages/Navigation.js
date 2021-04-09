import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import styled from "styled-components";
import { Layout } from "antd";
import { Button } from "semantic-ui-react";
const { Header } = Layout;
function Navigation() {
  return (
    <StyledHeader>
      <nav class="navbar">
        <div class="left-menu">
          <div>햄버거바</div>
        </div>
        <div>
          <Link to="/" class="main">
            Header
          </Link>
        </div>

        <div class="right-menu">
          <Button secondary>
            <Link to="/Login" class="login">
              로그인
            </Link>
          </Button>
          <Button secondary>
            <Link to="/Join" class="login">
              회원가입
            </Link>
          </Button>
        </div>
      </nav>
    </StyledHeader>
  );
}
const StyledHeader = styled(Header)`
  padding: 30px;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.56);
  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.56);
  background: #c0c0c0;
`;

export default Navigation;

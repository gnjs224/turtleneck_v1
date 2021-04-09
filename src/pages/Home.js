import React from "react";
import { Button, Layout } from "antd";
import styled from "styled-components";
import "./style.css";
import UploadImage from "./UploadImage";
import { Link } from "react-router-dom";
const { Content } = Layout;

function App() {
  return (
    <Layout>
      <StyledContent>
        <p style={{ fontSize: "50px" }}>Title</p>
        <p style={{ fontSize: "50px" }}>사진을 올려주세요</p>
        <div class="uploader">
          <UploadImage />
        </div>
        <Button secondary>
          <Link to="/Result" class="result">
            검사 시작하기
          </Link>
        </Button>
      </StyledContent>
    </Layout>
  );
}

const StyledContent = styled(Content)`
  text-align: center;
  //background: #fffff0;
  height: 80vh;
  padding: 20px;
  overflow: initial;
`;

export default App;

import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

const WidthBox = styled.div`
  display: flex;
  justify-content: center;
`;
const Width = styled.div`
  width: 125vh;
  background-color: blue;
`;
const App = () => {
  return (
    <WidthBox>
      <Width>
        <Navbar />
        <Footer />
      </Width>
    </WidthBox>
  );
};

export default App;

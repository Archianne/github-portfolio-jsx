import SideBar from "../SideBar";
import styled from "styled-components";
import Content from "../Content";
import CNavBar from "../C_NavBar";

const Main = () => {
  return (
    <StyledMain>
      <CNavBar />
      <SideBar />
      <Content />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  height: 100vh;
  width: 100%;
  margin-top: 25px;
`;

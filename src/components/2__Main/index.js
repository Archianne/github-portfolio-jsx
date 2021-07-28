import SideBar from "../3__SideBar";
import styled from "styled-components";
import Content from "../4__Content";
import CNavBar from "../5__CNavBar";

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
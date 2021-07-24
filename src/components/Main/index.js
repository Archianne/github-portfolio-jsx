import SideBar from "../SideBar";
import styled from "styled-components";
import Content from "../Content";

const Main = () => {
  return (
    <StyledMain>
      <SideBar />
      <Content />
    </StyledMain>
  );
};

export default Main;

const StyledMain = styled.main`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

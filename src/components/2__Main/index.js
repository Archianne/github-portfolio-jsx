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

  @media (max-width: 768px) {
    flex-flow: column no-wrap;
    width: 100vw;

    #cNavBar {

      order: 2;
      width: 100vw;
      overflow-x: scroll;
      .blank {
        display: none;
      }
    }

    #sideBar {
      order: 1;
      width: 100vw;
    }

    #content {
      order: 3;
      width: 100vw;
    }
  }
`;

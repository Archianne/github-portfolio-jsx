import { lazy, Suspense } from "react";
import styled from "styled-components";
const SideBar = lazy(() => import("../3__SideBar"));
const Content = lazy(() => import("../4__Content"));
const CNavBar = lazy(() => import("../5__CNavBar"));

const Main = () => {
  return (
    <StyledMain>
      <Suspense fallback={<div>Loading</div>}>
        <CNavBar />
        <SideBar />
        <Content />
      </Suspense>
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

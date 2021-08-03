import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import React, { lazy, Suspense } from "react";
import BlogPost from "../../pages/blog_post";

const Home = lazy(() => import("../../pages/home"));
const Repositories = lazy(() => import("../../pages/repositories"));
const Skills = lazy(() => import("../../pages/skills"));
const Contact = lazy(() => import("../../pages/contact"));
const Blog = lazy(() => import("../../pages/blog"));

const Content = () => {
  return (
    <StyledContent id="content">
      <Router>
        <Switch>
          <Suspense fallback={<div>Loading</div>}>
            <Route path="/" component={Home} exact />
            <Route path="/skills" component={Skills} />
            <Route path="/repositories" component={Repositories} />
            <Route path="/contact" component={Contact} />
            <Route path="/blog/" component={Blog} />
            <Route path="/post/:slug" component={BlogPost} />
          </Suspense>
        </Switch>
      </Router>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.section`
  width: 70%;
  max-width: 936px;
  margin: 40px 24px 0 8px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.boxBorder};
  border-radius: 6px;

  @media (max-width: 768px) {
    border: none;
    margin: 8px 0;
    padding: 30px;
  }
`;

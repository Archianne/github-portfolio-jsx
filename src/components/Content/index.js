import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "../../pages/home";
import Repositories from "../../pages/repositories";
import Skills from "../../pages/skills";
import Contact from "../../pages/contact";

const Content = () => {
  return (
    <StyledContent>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/#/skills" component={Skills} exact></Route>
          <Route path="/#/repositories" component={Repositories} exact></Route>
          <Route path="/#/contact" component={Contact} exact></Route>
        </Switch>
      </Router>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.section`
  width: 70%;
  max-width: 936px;
  margin-top: 40px;
  margin: 25px 24px 0 8px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.boxBorder};
  border-radius: 6px;
`;

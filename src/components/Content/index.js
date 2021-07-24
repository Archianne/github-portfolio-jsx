import styled from "styled-components";

const Content = () => {
  return (
    <StyledContent>
      <h1>Hello</h1>
    </StyledContent>
  );
};

export default Content;

const StyledContent = styled.section`
  width: 75%;
  background: red;
  margin-top: 40px;
  padding: 0px 24px 0 8px;
`;

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
  width: 70%;
  max-width: 936px;
  background: red;
  margin-top: 40px;
  margin: 20px 24px 0 8px;
`;

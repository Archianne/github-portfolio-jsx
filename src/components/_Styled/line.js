import styled from "styled-components";

const Line = () => {
  return <StyledLine />;
};

const StyledLine = styled.hr`
  margin-top: 16px;
  background-color: ${(props) => props.theme.boxBorder};
  border: none;
  height: 1px;
`;

export default Line;

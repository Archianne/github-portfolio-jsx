import styled from "styled-components";

const Line = () => {
  return <StyledLine />;
};

const StyledLine = styled.hr`
  margin-top: 16px;
  background-color: ${(props) => props.theme.boxBorder} !important;
  border: none;
  height: 1px;
  width: 100%;
`;

export default Line;

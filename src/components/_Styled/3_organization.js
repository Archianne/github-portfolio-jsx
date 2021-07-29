import styled from "styled-components";
import Line from "../_Styled/line";
import Image from "./img";

const OrganizationDiv = ({ value }) => {
  return (
    <StyledDiv id="organization">
      <Line />
      <h4>Organizations</h4>
      <Image
        src="https://github.com/SchoolOfCode.png"
        alt={value.company}
        title={value.company}
      />
    </StyledDiv>
  );
};

export default OrganizationDiv;

const StyledDiv = styled.div `
h4 {
    font-size: 16px;
    color: ${(props) => props.theme.fontColor1};
    font-weight: 600;
    padding-top: 16px;
    margin-bottom: 8px;
  }

 img {
    width: 32px;
    align-self: flex-start;
    border-radius: 6px;
  }
`
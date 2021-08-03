import styled from "styled-components";
import Icons from "../../theme/icons";
import Link from "./link";

const InfosDiv = ({ value }) => {
  return (
    <StyledDiv id="infos">
      <p>
        <Icons.Building className="icon" /> {value.company}
      </p>
      <p>
        <Icons.Mail className="icon" /> helena19w@gmail.com
      </p>
      <p>
        <Icons.Map className="icon" /> {value.location}
      </p>
      <p>
        <Icons.Link className="icon" />
        <Link href={value.blog}>@archianne.jsx</Link>
      </p>
      <p>
        <Icons.Linkedin className="icon" />
        <Link href="https://www.linkedin.com/in/helena-archer/">
          /in/helena-archer
        </Link>
      </p>
    </StyledDiv>
  );
};

export default InfosDiv;

const StyledDiv = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
  }

  a {
    font-weight: normal;
    text-decoration: none;
    color: ${(props) => props.theme.fontColor1};
  }
  
  a:hover {
    color: ${(props) => props.theme.fontColor2};
  }
`;

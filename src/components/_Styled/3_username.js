import styled from "styled-components";
import Image from "./img";

const UsernameDiv = ({ value }) => {
  return (
    <StyledDiv id="username">
      <Image src={value.avatar_url} alt="Profile" />
      <div>
        <h1>{value.name}</h1>
        <h3>{value.login}</h3>
      </div>
    </StyledDiv>
  );
};

export default UsernameDiv;

const StyledDiv = styled.div`
  h1 {
    font-size: 26px;
    line-height: 1.25;
    padding-top: 16px;
  }

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${(props) => props.theme.fontColor2};
    padding-bottom: 16px;
  }

  img {
    max-width: 280px;
    width: 100%;
    border-radius: 50%;
    align-self: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: row;
    margin-bottom: 24px;

    img {
      width: 55px;
      margin-right: 16px;
    }

    h1,
    h3 {
      padding: 0;
    }
  }
`;

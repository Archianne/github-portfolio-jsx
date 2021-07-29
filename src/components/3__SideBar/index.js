import styled from "styled-components";
import useFetch from "../_Hooks/useFetch";
import Button from "../_Styled/button";
import Line from "../_Styled/line";
import FollowersDiv from "./followers";
import InfosDiv from "./infos";
import UsernameDiv from "./username";

const SideBar = () => {
  const URL = `https://api.github.com/users/Archianne`;
  const [value] = useFetch(URL);
  return (
    <StyledSideBar id="sideBar">
      <UsernameDiv value={value} />

      <div id="button">
        <Button>Follow</Button>
      </div>

      <div id="bio">
        <p className="bio">{value.bio}</p>
      </div>

      <FollowersDiv value={value} />

      <InfosDiv value={value} />

      <div id="organization">
        <Line />
        <h4>Organizations</h4>
        <img
          className="logo-org"
          src="https://github.com/SchoolOfCode.png"
          alt={value.company}
          title={value.company}
        />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: 21px;
  width: 24%;
  max-width: 312px;
  margin: -30px 8px 0 8px;
  padding-left: 16px;

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

  h4 {
    font-size: 16px;
    color: ${(props) => props.theme.fontColor1};
    font-weight: 600;
    padding-top: 16px;
    margin-bottom: 8px;
  }

  img {
    max-width: 280px;
    width: 100%;
    border-radius: 50%;
    align-self: center;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;

    span {
      color: ${(props) => props.theme.spamFontColor};
      font-weight: 600;
      margin-right: 5px;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.fontColor1};
      font-size: 12px;
    }
    a:hover {
      color: ${(props) => props.theme.fontColor2};
    }
  }

  .bio {
    padding: 16px 0;
  }

  .info {
    color: ${(props) => props.theme.fontColor2};
    padding-bottom: 16px;
  }

  .logo-org {
    width: 32px;
    align-self: flex-start;
    border-radius: 6px;
  }

  .icon {
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0;

    #username {
      order: 1;
      display: flex;
      flex-flow: row;
      margin-bottom: 24px;
    
      img {
      width: 55px;
      margin-right: 16px;
      }

      h1, h3 {
      padding: 0;
      }
    }

    #bio {
      order: 2;
    }

    #infos {
      order: 3;
    }

    #followers {
      order: 4;
    }

    #button {
      order: 5;
      margin: 0 0 16px 0;
    padding: 0;
  width: 100%;
  text-align: center;
    }

    #organization {
      display: none;
    }
`;

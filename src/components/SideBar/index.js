import styled from "styled-components";
import Icons from "../../theme/icons";
import useFetch from "../_Hooks/useFetch";
import Button from "../_Styled/button";
import Line from "../_Styled/line";
import Link from "../_Styled/link";

const SideBar = () => {
  const URL = `https://api.github.com/users/Archianne`;
  const [value] = useFetch(URL);
  return (
    <StyledSideBar>
      <img src={value.avatar_url} alt="" />
      <h1>{value.name}</h1>
      <h3>{value.login}</h3>
      <Button>Follow</Button>
      <p className="bio">{value.bio}</p>
      <p className="info">
        <Icons.People className="icon" /> <span>{value.followers}</span>
        followers <span style={{ marginLeft: 5 }}>·</span>{" "}
        <span>{value.following}</span> following
        <span style={{ marginLeft: 5 }}>·</span>
        <Icons.Star className="icon" /> <span>{value.public_repos}</span>
      </p>
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
        <Icons.Link className="icon" /> {value.blog}
      </p>
      <p>
        <Icons.Linkedin className="icon" />
        <Link href="https://www.linkedin.com/in/helena-archer/">
          /in/helena-archer
        </Link>
      </p>
      <Line />
      <h4>Organizations</h4>
      <img
        className="logo-org"
        src="https://github.com/SchoolOfCode.png"
        alt={value.company}
        title={value.company}
      />
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
    white-space: nowrap;
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
`;

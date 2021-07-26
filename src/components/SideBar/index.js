import { IoPeopleOutline } from "react-icons/io5";
import { FaRegStar, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiBuildings, BiLink } from "react-icons/bi";
import { FiMapPin, FiMail } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import useFetch from "../_Hooks/useFetch";
import styled from "styled-components";
import Button from "../_Styled/button";
import Line from "../_Styled/line";

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
        <IoPeopleOutline /> <span>{value.followers}</span> followers ·{" "}
        <span>{value.following}</span> following
      </p>
      <p
        className="info"
        style={{
          paddingBottom: 16,
        }}
      >
        <FaRegStar /> <span>{value.public_repos}</span>
      </p>
      <p>
        <BiBuildings /> {value.company}
      </p>
      <p>
        <FiMail /> helena19w@gmail.com
      </p>
      <p>
        <FiMapPin /> {value.location}
      </p>
      <p>
        <BsLink45Deg /> {value.blog}
      </p>
      <Line />
      <h4>Organizations</h4>
      <img
        className="logo-org"
        src="https://github.com/SchoolOfCode.png"
        alt={value.company} title={value.company}
      />
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: 21px;
  width: 25%;
  margin: 40px 8px 0 8px;
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
    color: ${(props) => props.theme.secondColor};
    padding-bottom: 16px;
  }

  h4 {
    font-size: 16px;
    color: ${(props) => props.theme.mainColor};
    font-weight: 600;
    padding-top: 16px;
    margin-bottom: 8px;
  }

  img {
    width: 211px;
    border-radius: 50%;
    align-self: center;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    span {
      color: ${(props) => props.theme.mainColor};
      font-weight: 600;
    }
  }

  .bio {
    padding: 16px 0;
  }

  .info {
    color: ${(props) => props.theme.secondColor};
  }

  .logo-org {
    width: 32px;
    align-self: flex-start;
    border-radius: 6px;
  }
`;

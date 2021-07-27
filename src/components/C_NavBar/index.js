import styled from "styled-components";
import useFetch from "../_Hooks/useFetch";

import { HiOutlineBookOpen, HiOutlineCube } from "react-icons/hi";
import { BiBookBookmark } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";


const CNavBar = () => {
    const URL = `https://api.github.com/users/Archianne`;
    const [value] = useFetch(URL);
    const tabs = [
      {
        title: "Overview",
        icon: HiOutlineBookOpen,
        path: "",
      },
      {
        title: "Repositories",
        icon: BiBookBookmark,
        path: "repositories",
        num: value.public_repos,
      },
      {
        title: "Languages",
        icon: AiOutlineProject,
        path: "languages",
      },
      {
        title: "Contact me",
        icon: HiOutlineCube,
        path: "contact",
      },
    ];

  return (
    <StyledCNavBar>
      <div className="blank"></div>
      <div className="main">
        {tabs.map((tab, index) => (
          <div
            className={`tabs ${
              window.location.pathname.split("/").pop() === tab.path
                ? "active"
                : ""
            }`}
            key={index}
          >
            <a href={"/" + tab.path} className="link">
              <tab.icon className="icon" />

              <p className="items">{tab.title}</p>
              {tab.num && <div className="num">{tab.num}</div>}
            </a>
          </div>
        ))}
      </div>
    </StyledCNavBar>
  );
};

const StyledCNavBar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100vw;
  border-bottom: 1px solid ${(props) => props.theme.boxBorder};

  .blank {
    width: 24%;
    max-width: 312px;
    margin: 0px 8px;
    padding-left: 16px;
    visibility: hidden;
  }

  .main {
    display: flex;
    width: 70%;
    max-width: 936px;
    margin: 0px 24px 0 8px;
  }

  .tabs {
    padding: 8px 16px;
    height: 48px;
  }

  p {
    margin: 0 7px;
  }

  .link {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.mainColor};
  }

  .num {
    background-color: ${(props) => props.theme.num};
    border-radius: 24px;
    min-width: 20px;
    font-size: 12px;
    padding: 0 6px;
    font-weight: 500;
  }

  .active {
    border-bottom: 2px solid orange !important;
    font-weight: 600;
  }
`;

export default CNavBar;

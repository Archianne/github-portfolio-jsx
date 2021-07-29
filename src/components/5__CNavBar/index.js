import styled from "styled-components";
import useFetch from "../_Hooks/useFetch";
import Icons from "../../theme/icons";
import Link from "../_Styled/link";
import usePath from "../_Hooks/usePath";

const CNavBar = () => {
  const [link] = usePath();
  const URL = `https://api.github.com/users/Archianne`;
  const [value] = useFetch(URL);
  const tabs = [
    {
      title: "Overview",
      icon: Icons.Book,
      path: "",
    },
    {
      title: "Repositories",
      icon: Icons.Repo,
      path: "repositories",
      num: value.public_repos,
    },
    {
      title: "Skills",
      icon: Icons.Project,
      path: "skills",
    },
    {
      title: "Contact me",
      icon: Icons.Cube,
      path: "contact",
    },
  ];

  return (
    <StyledCNavBar id="cNavBar">
      <div className="blank"></div>
      <div className="main">
        {tabs.map((tab, index) => (
          <div
            className={`tabs ${link === `#/${tab.path}` ? "active" : ""}`}
            key={index}
          >
            <Link href={"/#/" + tab.path}>
              <tab.icon className="icon" />

              <p className="items">{tab.title}</p>
              {tab.num && <div className="num">{tab.num}</div>}
            </Link>
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
  color: ${(props) => props.theme.fontColor1} !important;

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

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.fontColor2};
  }

  .num {
    background-color: ${(props) => props.theme.numBg};
    border-radius: 24px;
    min-width: 20px;
    font-size: 12px;
    padding: 0 6px;
    font-weight: 500;
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.active} !important;
    font-weight: 600;

    a {
      color: ${(props) => props.theme.fontColor1} !important;
    }
  }

  @media (max-width: 768px) {
    .main {
      display: flex;
      justify-content: space-between;
    }
    .items {
      display: none;
    }

    .icon {
      margin: 0 10px;
    }
  }
`;

export default CNavBar;

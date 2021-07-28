import { ImGithub } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import styled from "styled-components";
import Input from "../_Styled/input";

const NavBar = (props) => {
  return (
    <StyledNavBar>
      <div className="nav-left">
        <ImGithub className="logo-icon" onClick={props.changeTheme} />

        <form>
          <Input />
        </form>

        <a href="/" className="nav-link">
          Pulls
        </a>
        <a href="/" className="nav-link">
          Issues
        </a>
        <a href="/" className="nav-link">
          Marketplace
        </a>
        <a href="/" className="nav-link">
          Explore
        </a>
      </div>

      <div className="nav-right">
        <FaRegBell className="nav-icon bell-icon" />
        <HiOutlinePlus className="nav-icon plus-icon" />
        <AiOutlineCaretDown className="nav-icon arrow-icon" />
        <img
          src="https://github.com/Archianne.png"
          alt="Archianne"
          className="git-icon"
        />
        <AiOutlineCaretDown className="nav-icon arrow-icon" />
      </div>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.navBg};
  padding: 16px 24px;
  line-height: 21px;
  height: 62px;
  color: ${(props) => props.theme.navFontColor};
}

.nav-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
}

.nav-link {
  color: ${(props) => props.theme.navFontColor};
  margin-right: 16px;
  font-weight: 645;
  text-decoration: none;
}

a {
  color: white;
}

.nav-right {
  display: flex;
  flex-direction: row;
  align-items: center;

  .arrow-icon {
    width: 10px;
    height: 10px;
    margin-right: 16px;
    margin-left: 3px;
  }

  .bell-icon {
    margin-right: 16px;
    width: 16px;
    height: 16px;
  }

  .plus-icon {
    width: 20px;
    height: 20px;
  }
}

.logo-icon {
  width: 32px;
  height: auto;
}

.git-icon {
  width: 20px;
  border-radius: 50%;
}

`;

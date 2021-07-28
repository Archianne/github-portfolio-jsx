import styled from "styled-components";
import Icons from "../../theme/icons"
import Input from "../_Styled/input";
import Link from "../_Styled/link";


const NavBar = (props) => {
  return (
    <StyledNavBar>
      <div className="nav-left">
        <Icons.Github className="logo-icon" onClick={props.changeTheme} />

        <form>
          <Input />
        </form>

        <Link href="/">Pulls</Link>
        <Link href="/">Issues</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">Explore</Link>
       
      </div>

      <div className="nav-right">
        <Icons.Bell className="nav-icon bell-icon" />
        <Icons.Plus className="nav-icon plus-icon" />
        <Icons.Arrow className="nav-icon arrow-icon" />
        <img
          src="https://github.com/Archianne.png"
          alt="Archianne"
          className="git-icon"
        />
        <Icons.Arrow className="nav-icon arrow-icon" />
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

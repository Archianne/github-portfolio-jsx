import styled from "styled-components";
import Icons from "../../theme/icons";
import Image from "../_Styled/img";
import Input from "../_Styled/1_input";
import Link from "../_Styled/link";

const NavBar = (props) => {
  return (
    <StyledNavBar>
      <Icons.Menu className="menu-icon" />
      <FlexDiv>
        <Icons.Github className="logo-icon" onClick={props.changeTheme} />

        <Input />

        <Link href="/">Pulls</Link>
        <Link href="/">Issues</Link>
        <Link href="/">Marketplace</Link>
        <Link href="/">Explore</Link>
      </FlexDiv>

      <FlexDiv>
        <Icons.Bell className="nav-icon bell-icon" />
        <Icons.Plus className="nav-icon plus-icon" />
        <Icons.Arrow className="nav-icon arrow-icon" />
        <Image src="https://github.com/Archianne.png" alt="Archianne" />
        <Icons.Arrow className="nav-icon arrow-icon" />
      </FlexDiv>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  line-height: 21px;
  height: 62px;
  background: ${(props) => props.theme.navBg};
  color: ${(props) => props.theme.navFontColor};
  @media (max-width: 768px) {
    padding: 16px 16px;
  }

  .logo-icon {
    width: 32px;
    height: auto;
  }

  .menu-icon {
    width: 24px;
    height: 24px;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    .arrow-icon,
    .plus-icon,
    img,
    a,
    input {
      display: none;
    }
  }

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
    @media (max-width: 768px) {
      margin: 0;
    }
  }

  .plus-icon {
    width: 20px;
    height: 20px;
  }

  img {
    width: 20px;
  }
`;

import styled from "styled-components";
import Icons from "../../theme/icons";
import Image from "../_Styled/img";
import Input from "../_Styled/input";
import Link from "../_Styled/link";

const NavBar = (props) => {
  return (
    <StyledNavBar>
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
}

.logo-icon {
  width: 32px;
  height: auto;
}
`;

const FlexDiv = styled.div`
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

  img {
    width: 20px;
  }
`;

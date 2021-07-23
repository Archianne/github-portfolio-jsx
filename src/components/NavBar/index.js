import { ImGithub } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarStyle>
      <div className="nav-left">
        <a href="/" className="logo-link">
          <ImGithub className="logo-icon" />
        </a>

        <form>
          <input
            type="search"
            className="nav-search"
            placeholder="Search or jump to..."
          />
        </form>

        <a href="/" className="nav-link">
          Pull
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
      </div>
    </NavBarStyle>
  );
};

export default NavBar;

const NavBarStyle = styled.nav`
    display: flex;
    flex-wrap: no-wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #24292E;
    padding: 16px 24px;
    line-height: 21px;
    height: 62px;
    color: #fff;
} 

.nav-left {
    display: flex;
    flex-direction: row;

input {
    outline: none;
}

input[type=search] {
	-webkit-appearance: textfield;
	-webkit-box-sizing: content-box;
	font-family: inherit;
	font-size: 100%;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
	display: none; 
}

input[type=search] {
	background: #24292E url("https://github.githubassets.com/images/search-key-slash.svg") no-repeat right 8px center;
	border: solid 1px #444d56;
	border-radius: 6px;
	width: 272px;
    min-height: 28px;
    padding: 0 19px;
    font-weight: 400;
    max-width: 100%;
	transition: all .5s;
}

input[type=search]:focus {
	width: 448px;
	background-color: #fff;
	border-color: #66CC75;
	
	-webkit-box-shadow: 0 0 5px rgba(109,207,246,.5);
	-moz-box-shadow: 0 0 5px rgba(109,207,246,.5);
	box-shadow: 0 0 5px rgba(109,207,246,.5);
}

input::placeholder {
	color: #e1e4e8;
}

input::-webkit-input-placeholder {
	color: #e1e4e8;
}
input:-moz-placeholder {
	color: #e1e4e8;
}

}

.nav-link {
    color: blue;
    font-size:20px;
    display: none;
}

.logo-icon {
    width: 32px;
    height: 32px
}

a {
    color: white;
}

`;

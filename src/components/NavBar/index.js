import { ImGithub } from "react-icons/im";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { HiOutlinePlus } from "react-icons/hi";
import styled from "styled-components";

const NavBar = () => {
  return (
    <StyledNavBar>
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
  background: #24292e;
  padding: 16px 24px;
  line-height: 21px;
  height: 62px;
  color: #fff;
}

.nav-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;

  input {
    outline: none;
    margin: 0 16px;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }

  input[type="search"] {
    background: #24292e
      url("https://github.githubassets.com/images/search-key-slash.svg")
      no-repeat right 8px center;
    border: solid 1px #444d56;
    border-radius: 6px;
    width: 243px;
    min-height: 28px;
    padding: 0 12px;
    font-weight: 400;
    max-width: 100%;
    transition: all 0.5s;
    line-height: 20px;
  }

  input[type="search"]:focus {
    width: 448px;
    background-color: #fff;
    border-color: #66cc75;
    -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
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
  color: #e1e4e8;
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
  margin-top: 3px;
}

.git-icon {
  width: 20px;
  border-radius: 50%;
}

`;

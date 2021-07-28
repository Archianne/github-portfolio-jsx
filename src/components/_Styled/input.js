import styled from "styled-components";

const Input = () => {
  return <StyledInput type="search" placeholder="Search or jump to..." />;
};

export default Input;

const StyledInput = styled.input`
  outline: none;
  margin: 0 16px;
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
  background: ${(props) => props.theme.navInputBg}
    url("https://github.githubassets.com/images/search-key-slash.svg") no-repeat
    right 8px center;
  border: solid 1px ${(props) => props.theme.navBorder};
  border-radius: 6px;
  width: 245px;
  min-height: 28px;
  padding: 0 12px;
  font-weight: 400;
  max-width: 100%;
  transition: all 0.5s;
  line-height: 20px;

  &&::-webkit-search-decoration,
  &&::-webkit-search-cancel-button {
    display: none;
  }

  &&[type="search"]:focus {
    width: 418px;
    background-color: ${(props) => props.theme.navInputFocus};
    border-color: ${(props) => props.theme.navBorder2};
    -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
    box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  }

  &&::placeholder {
    color: ${(props) => props.theme.navInputColor};
  }

  &&::-webkit-input-placeholder {
    color: ${(props) => props.theme.navInputColor};
  }

  &&:-moz-placeholder {
    color: ${(props) => props.theme.navInputColor};
  }
`;

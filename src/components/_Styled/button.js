import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 210px;
  height: 32px;
  padding: 5px 16px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 550;
  line-height: 20px;
  user-select: none;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 1px 0px 0px inset;
  color: ${(props) => props.theme.mainColor};
  border-color: ${(props) => props.theme.boxBorder};
  background-color: ${(props) => props.theme.buttonBg};

  &&:hover {
    background-color: ${(props) => props.theme.buttonBgHover};
  }
`;

export default Button;

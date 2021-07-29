import styled from "styled-components";

const Button = ({ children }) => {
  return <StyledButton id="button">{children}</StyledButton>;
};

const StyledButton = styled.button`
  max-width: 280px;
  width: 100%;
  height: 32px;
  padding: 5px 16px;
  transition: 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  border: 1px solid ${(props) => props.theme.boxBorder};
  border-radius: 6px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 550;
  line-height: 20px;
  user-select: none;
  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px,
    rgba(255, 255, 255, 0.25) 0px 0px 0px 0px inset;
  color: ${(props) => props.theme.fontColor1};
  background-color: ${(props) => props.theme.buttonBg};

  &&:hover {
    background-color: ${(props) => props.theme.buttonBgHover};
    border: 1px solid $((props) => props.theme.buttonBorderHover);
  }

  @media (max-width: 768px) {
    max-width: 90vw;
    height: 30px;
  }
`;

export default Button;

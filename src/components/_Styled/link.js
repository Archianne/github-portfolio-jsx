import styled from "styled-components";

const Link = ({ children, href,target }) => {
  return <StyledLink href={href} target={target}>{children}</StyledLink>;
};

export default Link;

const StyledLink = styled.a`
  color: ${(props) => props.theme.navFontColor};
  margin-right: 16px;
  font-weight: 645;
  text-decoration: none;
`;

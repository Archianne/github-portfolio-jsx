import styled from "styled-components";

const Link = ({ children, href,target }) => {
  return <StyledLink href={href} target={target}>{children}</StyledLink>;
};

export default Link;

const StyledLink = styled.a`
  font-weight: 645;
  text-decoration: none;
`;

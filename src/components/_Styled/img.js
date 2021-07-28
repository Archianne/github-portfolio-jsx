import styled from "styled-components";

const Image = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

export default Image;

const StyledImage = styled.img`
  border-radius: 50%;
`;

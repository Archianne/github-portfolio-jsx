import styled from "styled-components";

const Image = ({ src, alt, title }) => {
  return <StyledImage src={src} alt={alt} title={title} />;
};

export default Image;

const StyledImage = styled.img`
  border-radius: 50%;
 
`;

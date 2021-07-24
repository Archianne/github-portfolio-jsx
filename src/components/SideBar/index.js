import useFetch from "../Hooks/useFetch";
import styled from "styled-components";
import Button from "../Styled/button";

const SideBar = () => {
  const URL = `https://api.github.com/users/Archianne`;
  const [value] = useFetch(URL);
  return (
    <StyledSideBar>
      <img src={value.avatar_url} alt="" />
      <h1>{value.name}</h1>
      <h3>{value.login}</h3>
      <p>{value.bio}</p>
      <Button>Edit Profile</Button>
      <p>{value.followers}</p>
      <p>{value.following}</p>
      <p>{value.company}</p>
      <p>{value.location}</p>
      <p>{value.blog}</p>
      <hr />
      <h4>Organizations</h4>
      <p>{value.company}</p>
    </StyledSideBar>
  );
};

export default SideBar;

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;  
  line-height: 21px;
  width: 25%;
  margin-top: 40px;
  padding: 0 8px 0 24px;

  h1 {
    font-size: 26px;
    line-height: 1.25;
  }

  h3 {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${(props) => props.theme.primaryColors.secondColor};
  }

  img {
    width: 211px;
    border-radius: 50%;
    align-self: center;
  }
`;

import styled from "styled-components";
import Icons from "../../theme/icons";

const FollowersDiv = ({ value }) => {
  return (
    <StyledDiv id="followers">
      <p>
        <Icons.People className="icon" /> <span>{value.followers}</span>
        followers <span style={{ marginLeft: 5 }}>·</span>{" "}
        <span>{value.following}</span> following
        <span style={{ marginLeft: 5 }}>·</span>
        <Icons.Star className="icon" /> <span>{value.public_repos}</span>
      </p>
    </StyledDiv>
  );
};

export default FollowersDiv;

const StyledDiv = styled.div`
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.fontColor2};
    padding-bottom: 16px;

    span {
      color: ${(props) => props.theme.spamFontColor};
      font-weight: 600;
      margin-right: 5px;
    }
  }
`;

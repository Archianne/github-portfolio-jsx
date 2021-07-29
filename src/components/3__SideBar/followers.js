import Icons from "../../theme/icons";

const FollowersDiv = ({ value }) => {
  return (
    <div id="followers">
      <p className="info">
        <Icons.People className="icon" /> <span>{value.followers}</span>
        followers <span style={{ marginLeft: 5 }}>·</span>{" "}
        <span>{value.following}</span> following
        <span style={{ marginLeft: 5 }}>·</span>
        <Icons.Star className="icon" /> <span>{value.public_repos}</span>
      </p>
    </div>
  );
};

export default FollowersDiv;

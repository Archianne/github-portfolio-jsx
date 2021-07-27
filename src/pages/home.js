import styled from "styled-components";

const Home = () => {
  return (
    <StyledHome>
      <p>
        Hi there 👋 My name is Helena, I live in the UK and studying full time
        to become a front-end developer. I have studied Engineering but I feel
        like now I'm following my dreams. I can't wait for what the future
        holds. 🌱 I’m currently studying at School of Code.
      </p>
      <img
        src="https://github.com/archianne/archianne/raw/output/github-contribution-grid-snake.svg"
        alt="Contributions"
      />
      <img
        className="views"
        src="https://komarev.com/ghpvc/?username=Archianne&color=green&label=Views"
        alt="views"
      />
    </StyledHome>
  );
};

export default Home;

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
  }

  .views {
    width: auto;
    margin-top: 50px;
    text-align: center;
  }
`;

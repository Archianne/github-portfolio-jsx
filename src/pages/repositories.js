import styled from "styled-components";
import useFetch from "../components/_Hooks/useFetch";
import Line from "../components/_Styled/line";

const Repositories = () => {
  const URL = `https://api.github.com/users/Archianne/repos`;
  const [value] = useFetch(URL);
  const map =
    Array.isArray(value) &&
    value.slice(0, 15).map((item) => {
      return (
        <List key={item.id}>
          <p>{item.name}</p>
          <Line />
          <a href={item.html_url}>Repository</a>
          <Line />
          <a href={`https://archianne.github.io/${item.name}`}>Preview</a>
        </List>
      );
    });

  return (
    <StyledRepo>{map}</StyledRepo>
    // value.map((item) => {
    //   return <h1>{item}</h1>
    // })
  );
};

export default Repositories;

const StyledRepo = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-basis: auto;
  justify-content: space-around;
`;

const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 150px;
  min-width: 150px;
  width: 25%;
  margin: 5px 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.boxBorder};
`;

import { Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../components/_Hooks/useFetch";
import Image from "../components/_Styled/img";
import Line from "../components/_Styled/line";

const Blog = () => {
  const URL = `https://dev.to/api/articles?username=archianne`;
  const [value] = useFetch(URL);
  console.log(value);
  const mapValues =
    Array.isArray(value) &&
    value.slice(0, 10).map((item) => {
      return (
        <List key={item.id}>
          <Image
            src={
              item.cover_image ||
              "https://ddvql06zg3s2o.cloudfront.net/Assets/res/p/2781/imgs/M_loading.gif"
            }
            alt={item.id}
          />
          <h2>{item.title}</h2>
          <p>{item.description}</p>

          <Line />
          <Link
            to={{
              pathname: `/post/${item.slug}/${item.id}`
            }}
            replace
          >
            See more
          </Link>
        </List>
      );
    });

  return (
    <StyledRepo>
      <Suspense fallback={<div>Loading</div>}>{mapValues}</Suspense>
    </StyledRepo>
  );
};

export default Blog;

const StyledRepo = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  flex-basis: auto;
  justify-content: space-around;

  a {
    color: ${(props) => props.theme.active};
    text-decoration: none;
    font-weight: bold;
    margin-top: 15px;
  }
`;

const List = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  min-width: 150px;
  width: 45%;
  margin: 5px 10px;
  padding: 10px;
  border: 1px solid ${(props) => props.theme.boxBorder};

  img {
    border-radius: 0;
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  p,
  h2 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 768px) {
    width: 90vw;
    margin: 5px 0;
  }
`;

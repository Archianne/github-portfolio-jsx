import { Markup } from "interweave";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../components/_Hooks/useFetch";

const BlogPost = ({ match }) => {
  var slug = match.params.slug;
  const path = window.location.hash;
  const lastItem = path.substring(path.lastIndexOf("/") + 1);
  console.log(slug);
  console.log(lastItem);

  const URL = `https://dev.to/api/articles/${lastItem}`;
  const [value] = useFetch(URL);
  console.log(value);

  return (
    <StyledPosts>
      <Suspense fallback={<div>Loading..</div>}>
        <div id="return">
          <Link to="/blog">Return</Link>
        </div>
        <h1 id="title">{value.title}</h1>
        <Markup content={value.body_html} />
      </Suspense>
    </StyledPosts>
  );
};

export default BlogPost;

const StyledPosts = styled.article`
  #return {
    text-align: center;
    margin-bottom: 40px;
  }

  #title {
    text-align: center;
    font-size: 25px;
    margin-bottom: 20px;
    box-shadow: ${props => props.theme.fontColor1} 0px 1px 0px,
    ${props => props.theme.fontColor1} 0px 1px 0px inset;
  }
  
  img {
    width: 100%;
    margin: 10px 0;
    box-shadow: ${props => props.theme.fontColor1} 0px 2px 8px 0px;
  }

  a {
    color: orange;
    text-decoration: none;
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 20px;
    color: ${(props) => props.theme.fontColor1};
  }

  .highlight {
    background-color: ${(props) => props.theme.buttonBgHover};
    padding: 10px;
    margin: 10px 0;
  }

  code {
    background-color: ${(props) => props.theme.buttonBgHover};
    font-size: 12px;
    color: red;
  }
`;

import { Markup } from "interweave";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../components/_Hooks/useFetch";

const BlogPost = (props) => {
  var slug = props.match.params.slug;
  console.log(slug);
  console.log(props.location.id.id);

  const URL = `https://dev.to/api/articles/${props.location.id.id}`;
  const [value] = useFetch(URL);
  console.log(value);

  return (
    <StyledPosts>
    <Suspense fallback={<div>Loading</div>}>

      <div id="return">
        <Link to="/blog">Return</Link>
      </div>
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

  img {
    width: 20px;
  }

  a {
    color: orange;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-top: 20px;
    color: ${(props) => props.theme.fontColor1};
  }
`;

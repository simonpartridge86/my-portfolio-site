//import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const BLOGS = gql`
  query GetBlogs {
    blogs {
      data {
        id
        attributes {
          title
          body
        }
      }
    }
  }
`;

export default function Blog() {
  //const { loading, error, data } = useFetch("http://localhost:1337/api/blogs");
  const { loading, error, data } = useQuery(BLOGS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);
  return (
    <div>
      {data.blogs.data.map((post) => (
        <BlogSection key={post.id} className="blogpost">
          <h2 className="title">{post.attributes.title}</h2>
          <p className="body">{post.attributes.body.substring(0, 200)}...</p>
          <Link to={`/blog/${post.id}`}>Read More</Link>
        </BlogSection>
      ))}
    </div>
  );
}

const BlogSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  gap: 25px;
  box-sizing: border-box;
  border-right: 6px solid var(--dark-color);
  border-left: 6px solid var(--dark-color);
  padding-top: 10vh;
`;

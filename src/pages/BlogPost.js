import { useParams } from "react-router-dom";
//import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import { useQuery, gql } from "@apollo/client";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BLOG = gql`
  query GetBlog($id: ID!) {
    blog(id: $id) {
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

export default function BlogPost() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(BLOG, {
    variables: { id: id },
  });
  // const { loading, error, data } = useFetch(
  //   `http://localhost:1337/api/blogs/${id}`
  // );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  const blogData = data.blog.data;

  return (
    <>
      <Navigation />
      <BlogSection key={blogData.id} className="blogpost">
        <h2 className="title">{blogData.attributes.title}</h2>
        <p className="body">{blogData.attributes.body}</p>
      </BlogSection>
      <Footer />
    </>
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

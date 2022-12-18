import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";

export default function BlogPost() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(
    `http://localhost:1337/api/blogs/${id}`
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <BlogSection key={data.id} className="blogpost">
      <h2 className="title">{data.attributes.title}</h2>
      <p className="body">{data.attributes.body}</p>
    </BlogSection>
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

import { createGlobalStyle } from "styled-components";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import externalLinks from "./data/externalLinks.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomePage from "./pages/HomePage";

console.log(
  "Hi, thanks for inspecting my website. Hopefully the console is error-free 🤞"
);
console.log(
  "Use the links below to find out more about my work or contact me:"
);
console.log(externalLinks.github);
console.log(externalLinks.linkedin);

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

const GlobalStyles = createGlobalStyle`
:root {
    --heading-font: 'PixelFont';
    --paragraph-font: 'Lato', sans-serif;
    --dark-color: #201F24;
    --light-color: #FFFFFF;
    --dark-accent: #8E7DBE;
    --light-accent: #5FDD9D;
    font-size: 12px;
    background: var(--light-color);
}

html,body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}

* {
    margin: 0;
}
`;

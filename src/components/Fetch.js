import React from "react";
import useFetch from "../hooks/useFetch";

export const Fetch = () => {
  const { posts, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts &&
        posts.map((post) => (
          <div style={{ padding: "10px" }} key={post.id}>
            <h5>
              {" "}
              {post.id}-{post.title}
            </h5>
            <hr />
          </div>
        ))}
    </div>
  );
};

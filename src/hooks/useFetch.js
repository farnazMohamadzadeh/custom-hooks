import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [posts, setPosts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => setError(err));
  }, []);
  return { posts, isPending, error };
}

export const getPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  const posts = await res.json();
  return posts;
};

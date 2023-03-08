import Post from "./Post";

export default function Container({ posts, handleNewComment }) {
  const shownPosts = posts.map((post) => {
    return (
      <Post handleNewComment={handleNewComment} key={post.id} post={post} />
    );
  });

  return (
    <div className="ml-48  border-green-234 border-2 w-7/8">
      <h1>
        Im a container
        <br />
        add sorting options up here
      </h1>
      {shownPosts}
    </div>
  );
}

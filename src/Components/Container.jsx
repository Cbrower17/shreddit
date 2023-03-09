import Post from "./Post";

export default function Container({ posts, handleNewComment }) {
  const shownPosts = posts.map((post) => {
    return (
      <Post handleNewComment={handleNewComment} key={post.id} post={post} />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-5">
      <h1>
        Im a container
        <br />
        add sorting options up here
      </h1>
      {shownPosts}
    </div>
  );
}

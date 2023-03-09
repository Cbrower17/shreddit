import Comment from "./comment";

export default function Comments({ post }) {
  const allComments = post.comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
      <thead>
      <tr>
        <th>User</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
      </tr>
    </thead>
        <tbody>{allComments}</tbody>
      </table>
    </div>
  );
}

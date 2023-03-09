import Comments from "./Comments.jsx";
import NewComment from "./NewComment.jsx";

export default function Post({ post, handleNewComment }) {
  return (
    <div className=" card min-w-l max-w-xl bg-base-100 shadow-xl space-y-50">
      <figure>
        <img src={post.image} alt={post.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {post.title}
          <div className="justify-end">
            <h5>
              <button className="btn btn-outline btn-success">⬆</button>
              {post.postVotes}
              <button className="btn btn-outline btn-error"></button>
            </h5>
          </div>
        </h2>
        <p>{post.desc}</p>
        <div className="place-content-center">
          <NewComment
            className="bg-red"
            handleNewComment={handleNewComment}
            postId={post.id}
          />
          <div className="collapse collapse-arrow duration-75">
            <input type="checkbox" />
            <div className="collapse-title text-xl">Comments</div>
            <div className="collapse-content duration-75">
              <Comments post={post} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// flex justify-center block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700

// bg-slate-500 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50

//   <div className=" border-solid shadow-xs rounded-lg bg-slate-200 border-red-500 border-2 w-7/8 justify-center">
//     <h3 className="border-red-500 border-2 justify-center">
//       title: {post.title}
//     </h3>
//     <img
//       src={post.image}
//       alt={post.title}
//       className="rounded-lg w-7/10 place-self-center"
//     />
//     <p className="text-3xl font-bold underline">{post.desc}</p>
//     <p>{post.likes}</p>
// <div className="place-content-center">
//   <NewComment
//     className="bg-red"
//     handleNewComment={handleNewComment}
//     postId={post.id}
//   />
//   comments:
//   <div className="collapse duration-75">
//     <input type="checkbox" />
//     <div className="collapse-title text-xl font-medium">comments:</div>
//     <div className="collapse-content duration-75">
//       <Comments className="table" post={post} />
//     </div>
//   </div>
// </div>
//   </div>

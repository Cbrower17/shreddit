export default function Account({ currentUser }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-5">
    <div className="card lg:card-side bg-base-100 shadow-xl w-150">
      <figure>
        <img
        src={currentUser.propic}
          alt="Album"
          className="w-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">User name: {currentUser.name}</h2>
        <p>{currentUser.bio}</p>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
    </div>
  );
}

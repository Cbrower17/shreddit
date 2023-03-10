export default function Account({ currentUser }) {
  return (
    <div className="flex flex-col items-center justify-center p-3 space-y-5">
    <div className="card card-side bg-base-100 border-2">
      <figure className="border-r-2">
        <img
        src={currentUser.propic}
          alt="Album"
          className="w-96 "
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

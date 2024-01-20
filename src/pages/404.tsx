import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col gap-y-5 justify-center items-center">
      <h1 className="text-4xl text-black font-bold text-center">
        This page not found
      </h1>
      <Link
        to="/"
        className="bg-purple-700 text-center p-2 rounded-md text-white"
      >
        Go To Home
      </Link>
    </div>
  );
};

export default Error;

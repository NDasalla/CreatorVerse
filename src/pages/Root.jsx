import { Link, Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <Link to={`/`} className="border-2 px-4 py-2">
          Home
        </Link>
      </div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;

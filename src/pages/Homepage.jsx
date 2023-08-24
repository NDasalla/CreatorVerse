import { Link, useLoaderData } from "react-router-dom";
import { supabase } from "../client.js";
import ShowCreators from "../components/ShowCreators.jsx";

export async function loader({ params }) {
  const { data, error } = await supabase.from("creators").select();
  console.log("root component");
  console.log(data, error);
  return { data };
}

const Homepage = () => {
  const { data } = useLoaderData();
  const creators = [...data];

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-10">
        <p className="text-6xl mb-6">CreatorVerse</p>
        <Link to="/addCreator" className="border-2 px-4 py-2">
          Add New Creator
        </Link>
      </div>
      <div className="mx-10">
        <ShowCreators creators={creators} />
      </div>
    </div>
  );
};

export default Homepage;

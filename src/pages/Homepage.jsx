import { useLoaderData } from "react-router-dom";
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
      <div className="flex justify-center my-10">
        <p className="text-6xl">CreatorVerse</p>
      </div>
      <div className="">
        <ShowCreators creators={creators} />
      </div>
    </div>
  );
};

export default Homepage;

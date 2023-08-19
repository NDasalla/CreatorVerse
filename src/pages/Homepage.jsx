import { useLoaderData } from "react-router-dom";
import { supabase } from "../client.js";
import ShowCreators from "../components/ShowCreators.jsx";

export async function loader({ params }) {
  const { data, error } = await supabase.from("creators").select();
  console.log("root component");
  console.log(data, error);
  // const majorResponse = await fetch(`
  // /api/majors?collegeId=${params.collegeId}
  // `);
  // const majors = await majorResponse.json();
  // // console.log(majors, college);
  // const collegeResponse = await fetch(`/api/colleges/${params.collegeId}`);
  // const college = await collegeResponse.json();
  return { data };
}

const Homepage = () => {
  const { data } = useLoaderData();
  const creators = [...data];

  return (
    <div>
      <div className="">
        <ShowCreators creators={creators} />
      </div>
    </div>
  );
};

export default Homepage;

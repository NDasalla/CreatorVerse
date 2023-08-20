import { Link, useLoaderData } from "react-router-dom";
import { supabase } from "../../client";
import { IoLogoYoutube } from "react-icons/io";

export async function loader({ params }) {
  const { data, error } = await supabase
    .from("creators")
    .select(`*`)
    .eq(`id`, `${params.creatorId}`);
  console.log("ViewCreator component");
  console.log(data, error);
  return { data };
}

const ViewCreator = () => {
  const { data } = useLoaderData();
  const creator = data[0];
  console.log(creator);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">
        <div
          className="max-w-4xl px-5 py-5 bg-[#272727] text-white
          rounded-lg shadow-[0px_0px_3px_rgba(0,0,0,0.90)] min-h-[50rem]
          flex
          "
        >
          <div className="">
            <div className="">
              <Link to={`/creators/${creator.id}/edit`} className="">
                <button className="">Edit</button>
              </Link>
            </div>
            <div className="py-10">
              <div className="flex justify-center mb-10">
                <p className="text-5xl font-bold">{creator.name}</p>
              </div>
              <div className="flex justify-center">
                <a href={creator.url} className="w-min">
                  <IoLogoYoutube className="text-3xl" />
                </a>
              </div>
              <div className="mx-32 pt-8">
                <p className="">{creator.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCreator;

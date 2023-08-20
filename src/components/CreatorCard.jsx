import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const CreatorCard = ({ creators }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl grid gap-6 md:grid-cols-2">
        {creators.map((creator) => {
          return (
            <div
              key={creator.id}
              className="mb-2 px-5 py-5 bg-[#272727] text-white rounded-lg shadow-[0px_0px_3px_rgba(0,0,0,0.90)] 
            hover:bg-amber-500 min-h-[10rem]
            "
            >
              <div className="flex flex-col gap-5">
                <Link to={`/creators/${creator.id}`} className="w-fit">
                  <p className="hover:underline text-3xl font-bold">
                    {creator.name}
                  </p>
                </Link>
                <a href={creator.url} className="flex w-fit">
                  <IoLogoYoutube className="text-2xl" />
                </a>
                <p className="">{creator.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreatorCard;

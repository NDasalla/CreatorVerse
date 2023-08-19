import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const CreatorCard = ({ creators }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl grid gap-6 sm:grid-cols-2">
        {creators.map((creator) => {
          return (
            <div
              key={creator.id}
              className="flex flex-col mb-2 px-5 py-5 bg-[#272727] text-white rounded-lg shadow-[0px_0px_3px_rgba(0,0,0,0.90)] 
            hover:bg-amber-500 transition duration-200 font-bold min-h-[10rem]
            "
            >
              <Link to={`/creators/${creator.id}`}>
                <p className="hover:underline">{creator.name}</p>
              </Link>
              <a href={creator.url} className="flex w-min">
                <IoLogoYoutube className="" />
              </a>
              <p>{creator.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CreatorCard;

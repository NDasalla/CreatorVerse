import {
  Form,
  redirect,
  useLoaderData,
  useActionData,
  useFetcher,
} from "react-router-dom";
import { supabase } from "../../client";

export async function loader({ params }) {
  const { data, error } = await supabase
    .from("creators")
    .select(`*`)
    .eq(`id`, `${params.creatorId}`);
  // console.log("EditCreator component");
  // console.log(data, error);
  return { data };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedCreator = Object.fromEntries(formData);
  // console.log(preparedCreator);
  const { error } = await supabase
    .from("creators")
    .update(preparedCreator)
    .eq("id", params.creatorId);
  if (!error) {
    return redirect(`/creators/${params.creatorId}`);
  } else {
    return error;
  }
}

const EditCreator = () => {
  const { data } = useLoaderData();
  const creator = data[0];
  const fetcher = useFetcher();

  return (
    <div className="">
      <div className="">
        <p className="">{`Edit Creator`}</p>
      </div>
      <div className="">
        <Form method="post">
          <div className="">
            <div className="flex flex-col gap-10">
              <fieldset className="flex flex-col">
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
                  defaultValue={creator.name}
                  placeholder=""
                  type="text"
                  name="name"
                  id="name"
                  className="border-[1px]
                  "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="url" className="">
                  {`YouTuber's Link`}
                </label>
                <textarea
                  defaultValue={creator.url}
                  placeholder=""
                  type="text"
                  name="url"
                  id="url"
                  className="border-[1px]
                  "
                />
              </fieldset>
              <fieldset className="flex flex-col">
                <label htmlFor="description" className="">
                  About
                </label>
                <textarea
                  defaultValue={creator.description}
                  placeholder=""
                  type="text"
                  name="description"
                  id="description"
                  className="border-[1px]
                  "
                />
              </fieldset>
            </div>
          </div>
          <div className="mt-6 flex w-fit">
            <button className="border-2 px-4 py-2">Submit Changes</button>
          </div>
        </Form>
        <div className="flex gap-6 mt-8">
          <div className="">
            <fetcher.Form
              method="delete"
              action={`/creators/${creator.id}/delete`}
              onSubmit={(event) => {
                if (
                  !confirm("Please confirm you want to delete this record.")
                ) {
                  event.preventDefault();
                }
              }}
            >
              <button className="border-2 px-4 py-2" type="submit">
                Delete Post
              </button>
            </fetcher.Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCreator;

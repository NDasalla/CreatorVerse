import { Form, redirect } from "react-router-dom";
import { supabase } from "../../client";

export async function action({ request, params }) {
  const formData = await request.formData();
  const preparedCreator = Object.fromEntries(formData);
  // console.log(preparedCreator);
  const { error } = await supabase.from("creators").insert(preparedCreator);
  if (!error) {
    return redirect(`/`);
  } else {
    return error;
  }
}

const AddCreator = () => {
  return (
    <Form method="post">
      <div className="">
        <div className="">
          <p className="">{`Edit Creator`}</p>
        </div>
        <div className="">
          <div className="">
            <div className="flex flex-col gap-10">
              <fieldset className="flex flex-col">
                <label htmlFor="name" className="">
                  Name
                </label>
                <input
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
          <div className="mt-6">
            <button className="border-2 px-4 py-2">Submit Creator</button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AddCreator;

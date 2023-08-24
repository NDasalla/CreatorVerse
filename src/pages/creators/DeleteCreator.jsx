import { redirect } from "react-router-dom";
import { supabase } from "../../client";

export async function action({ params }) {
  console.log(params);
  const { error } = await supabase
    .from("creators")
    .delete()
    .eq("id", params.creatorId);
  // return null;
  return redirect(`/`);
}

import supabase from "./supabase";

export async function getEmployeesDetails() {
  const { data, error } = await supabase.from("employees").select("*");

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function getEmployeeDetails(id) {
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("id", id)
    .single();
  console.log(data);

  if (error) throw new Error(error.message);

  return { data, error };
}

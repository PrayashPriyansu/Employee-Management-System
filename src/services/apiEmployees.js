import supabase from "./supabase";

export async function getEmployeesDetails() {
  const { data, error } = await supabase.from("employees").select("*");

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function deleteEmployee(id) {
  const { data, error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}

export async function getEmployeeDetail(id) {
  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return { data, error };
}

export async function addEmployee(employee) {
  const { data, error } = await supabase
    .from("employees")
    .insert([employee])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function updateEmployee(id, employee) {
  const { data, error } = await supabase
    .from("employees")
    .update(employee)
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  return data;
}

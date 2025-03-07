import supabase from "./supabase";

export async function insertAttendanceData() {
  const { data, error } = await supabase
    .from("attendance")
    .insert([{ some_column: "someValue", other_column: "otherValue" }])
    .select();
}

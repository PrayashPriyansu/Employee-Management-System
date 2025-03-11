import supabase from "./supabase";

export async function insertAttendanceData(attendanceData) {
  const { data, error } = await supabase
    .from("attendance")
    .insert(attendanceData)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

import supabase from "./supabase";

export async function insertAttendanceData(attendanceData) {
  const { data, error } = await supabase
    .from("attendance")
    .upsert(attendanceData)
    .select();

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getAttendanceData(date) {
  const { data, error } = await supabase
    .from("attendance")
    .select("*,employees(name)")
    .eq("attendance_date", date);

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

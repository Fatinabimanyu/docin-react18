import callAPI from "../config/api";

export async function getAppointment() {
  const url = "http://localhost:5000/appointments";

  return callAPI({
    url,
    method: "get",
  });
}

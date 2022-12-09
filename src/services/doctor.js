import callAPI from "../config/api";

export async function getDoctor() {
  const url = "https://paw-kelompok18.vercel.app/doctors";

  return callAPI({
    url,
    method: "get",
  });
}

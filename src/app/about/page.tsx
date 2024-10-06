import { cookies } from "next/headers";

export default function AboutPage() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);

  console.log("Server Component");
  return <h2>About Page</h2>;
}

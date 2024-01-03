import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { getUserProfileData } from "@/services/profile.service";

export default withPageAuthRequired(
  async function Dashboard() {
    const user = await getUserProfileData();

    return (
      <>
        <main>
          <p>Main Content</p>
          <p>{user.name}</p>
        </main>
      </>
    );
  },
  { returnTo: "/" },
);

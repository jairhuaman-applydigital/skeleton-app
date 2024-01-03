import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(
  async function Dashboard() {
    const { user } = await getSession();

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

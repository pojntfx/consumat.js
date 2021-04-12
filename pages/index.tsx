import { Button } from "antd";
import { signIn, signOut, useSession } from "next-auth/client";
import * as React from "react";
import Movies from "../components/movies";

const Index = () => {
  const [session, loading] = useSession();

  if (loading) return <div>Loading</div>;
  if (!session)
    return (
      <div>
        <h1>Not signed in</h1>
        <Button onClick={() => signIn()}>Sign in</Button>
      </div>
    );

  return (
    <div>
      <h1>Signed in as {session.user.email}</h1>
      <Button onClick={() => signOut()}>Sign out</Button>
      <Movies />
    </div>
  );
};

export default Index;

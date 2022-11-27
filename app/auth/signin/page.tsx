import { getProviders } from "next-auth/react";
import Header from "../../Header";
import SignInComponent from "./SignInComponent";
import { unstable_getServerSession } from "next-auth/next";

async function SignInPage() {
  const providers = await getProviders();
  const session = await unstable_getServerSession();

  return (
    <div className="space-y-40 bg-zinc-900 w-full h-screen">
      <Header session={session} />
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;

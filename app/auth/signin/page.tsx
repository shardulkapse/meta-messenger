import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();
  return (
    <div className="grid justify-center bg-zinc-900 w-full pt-20 h-[90vh]">
      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;

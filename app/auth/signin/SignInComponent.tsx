"use client";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({ providers }: Props) {
  return (
    <div className="flex justify-center w-full">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded duration-500 ease-in-out"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
              })
            }
          >
            Sing In with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignInComponent;

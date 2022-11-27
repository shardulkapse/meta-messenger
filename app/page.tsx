import { Message } from "../typings";
import ChatInput from "./ChatInput";
import MessageList from "./MessageList";
import { unstable_getServerSession } from "next-auth/next";
import { Providers } from "./providers";
import Header from "./Header";

async function Homepage() {
  const data = await fetch(
    `${process.env.VERCEL_URL || "http://localhost:3000"}/api/getMessages`
  ).then((res) => res.json());

  const messages: Message[] = data.message;
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
      <main className="bg-zinc-900">
        <Header session={session} />
        <MessageList initialMessages={messages} />
        <ChatInput session={session} />
      </main>
    </Providers>
  );
}

export default Homepage;

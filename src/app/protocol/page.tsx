import Link from "next/link";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Title from "@/components/blocks/Title";

export default function Protocol() {
  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <PageTitle id={"protocol"}>Protocol</PageTitle>
      <Text>
        Real Address Chat is a protocol based on TCP intended for chatting, like
        IRC. It was supposed to be an “IRC killer,” but in reality, its
        implementation is poor. There’s also a community-made successor called
        WRAC. It’s basically the same as RAC, but it uses WebSockets instead of
        TCP for connections.
      </Text>
      <Text>
        If you want to experiment with or implement RAC in your client or
        server, use the documentation below to understand how it works.
      </Text>
      <Title id={"articles"}>Articles</Title>
      <Text>Click on article down below that you want to read.</Text>
      <div className={"flex flex-col gap-2"}>
        <Link
          href={"/protocol/rac"}
          className={
            "flex flex-col bg-stone-900 border border-stone-800 p-4 transition-all duration-200 hover:border-neutral-600 hover:bg-stone-800 rounded-lg"
          }
        >
          <h1 className={"text-stone-300 font-rokkitt text-2xl font-bold"}>
            Real Address Chat Protocol
          </h1>
          <p className={"text-stone-500"}>
            This article explains the Real Address Chat protocol and how the
            client and server interact with each other using it.
          </p>
          <small className={"text-stone-600"}>Curated by @kostya-zero</small>
        </Link>
        <Link
          href={"/protocol/wrac"}
          className={
            "flex flex-col bg-stone-900 border border-stone-800 p-4 transition-all duration-200 hover:border-neutral-600 hover:bg-stone-800 rounded-lg"
          }
        >
          <h1 className={"text-stone-300 font-rokkitt text-2xl font-bold"}>
            WebSocket Real Address Chat Protocol
          </h1>
          <p className={"text-stone-500"}>
            WRAC is a WebSocket-based implementation of the RAC protocol, made
            by the community. It works the same as RAC but includes some
            additions.
          </p>
          <small className={"text-stone-600"}>Curated by @kostya-zero</small>
        </Link>
        <Link
          href={"/protocol/user-agents"}
          className={
            "flex flex-col bg-stone-900 border border-stone-800 p-4 transition-all duration-200 hover:border-neutral-600 hover:bg-stone-800 rounded-lg"
          }
        >
          <h1 className={"text-stone-300 font-rokkitt text-2xl font-bold"}>
            User Agents
          </h1>
          <p className={"text-stone-500"}>
            A community-made solution to identify clients by a unique symbol in
            front of their username.
          </p>
          <small className={"text-stone-600"}>Curated by @kostya-zero</small>
        </Link>
      </div>
    </main>
  );
}

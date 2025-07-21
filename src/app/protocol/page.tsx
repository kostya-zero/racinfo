import Link from "next/link";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Title from "@/components/blocks/Title";

type Article = {
  name: string;
  desc: string;
  curator: string;
  href: string;
};

export default function Protocol() {
  const articles: Article[] = [
    {
      name: "Real Address Chat Protocol",
      desc: "This article explains the Real Address Chat protocol and how the client and server interact with each other using it.",
      curator: "@kostya-zero",
      href: "/protocol/rac",
    },
    {
      name: "WebSocket Real Address Chat Protocol",
      desc: "A WebSocket-based implementation of the RAC protocol, made by the community. It works the same as RAC but includes some additions.",
      curator: "@kostya-zero",
      href: "/protocol/wrac",
    },
    {
      name: "User Agents",
      desc: "A community-made solution to identify clients by a unique symbol in front of their username.",
      curator: "@kostya-zero",
      href: "/protocol/user-agents",
    },
  ];

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
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.href}
            className={
              "flex flex-col bg-stone-900 border border-stone-800 p-4 transition-all duration-200 hover:border-neutral-600 hover:bg-stone-800 rounded-lg"
            }
          >
            <h1 className={"text-stone-300 font-rokkitt text-2xl font-bold"}>
              {article.name}
            </h1>
            <p className={"text-stone-500"}>{article.desc}</p>
            <small className={"text-stone-600"}>
              Curated by {article.curator}
            </small>
          </Link>
        ))}
      </div>
    </main>
  );
}

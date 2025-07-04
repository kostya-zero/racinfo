import { ProjectCard, ProjectProps } from "@/components/ProjectCard";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Title from "@/components/blocks/Title";
import InlineCode from "@/components/blocks/InlineCode";

export default function Projects() {
  const clients: ProjectProps[] = [
    {
      name: "bRAC",
      authorId: "MeexReay",
      projectGit: "https://github.com/MeexReay/bRAC",
      description: "Better RAC client.",
      tags: ["Active", "WRAC", "RAC", "v2", "TLS"],
    },
    {
      name: "Mefedroniy",
      authorId: "OctoBanon-Main",
      projectGit: "https://github.com/OctoBanon-Main/mefedroniy-client",
      description: "TUI client for Real Address Chat protocol. ",
      tags: ["Active", "RAC", "v1.99.2"],
    },
    {
      name: "crack",
      authorId: "kiberOgur4ik",
      projectGit: "https://gitlab.com/kiber_ogur4ik/crack",
      description:
        "Cool RAC klient for Web, Android and iOS (RAC v1 and WRAC v2)",
      tags: ["Active", "WRAC", "RAC", "v2", "v1.0", "TLS"],
    },
    {
      name: "Tower",
      authorId: "kostya-zero",
      projectGit: "https://github.com/kostya-zero/tower",
      description: "A modern desktop client for RAC protocol built with Tauri.",
      tags: ["Unreleased", "WRAC", "RAC", "v2", "TLS"],
    },
    {
      name: "Snowdrop",
      authorId: "Forbirdden",
      projectGit: "https://github.com/Forbirdden/Snowdrop",
      description: "Coming Soon™",
      tags: ["Unreleased", "WRAC", "RAC", "v2"],
    },
    {
      name: "clRAC",
      externalDownload: true,
      authorId: "sugoma",
      externalLink: "https://wdfiles.ru/Ofx7",
      projectGit: "",
      description: "The official RAC client.",
      tags: ["Unknown", "RAC", "v2"],
    },
    {
      name: "cRACk",
      authorId: "pansangg",
      projectGit: "https://github.com/pansangg/cRACk",
      description: "TUI RAC client on Python.",
      tags: ["Abandoned", "RAC", "v2"],
    },
    {
      name: "CRAB",
      authorId: "pixtated",
      projectGit: "https://gitea.bedohswe.eu.org/pixtaded/crab",
      description: "Crimean RAC Bundle ",
      tags: ["Abandoned", "RAC", "v1.99.2"],
    },
    {
      name: "dobroho_vechora",
      authorId: "bedohswe",
      projectGit: "https://gitea.bedohswe.eu.org/bedohswe/dobroho_vechora",
      description: "RAC client made with Bash script.",
      tags: ["Abandoned", "RAC", "v1.0"],
    },
  ];

  const servers: ProjectProps[] = [
    {
      name: "sRAC",
      authorId: "MeexReay",
      projectGit: "https://github.com/MeexReay/sRAC",
      description: "Simple RAC server.",
      tags: ["Active", "WRAC", "RAC", "v2", "TLS"],
    },
    {
      name: "Gashishnik",
      authorId: "OctoBanon-Main",
      projectGit: "https://github.com/OctoBanon-Main/mefedroniy-client",
      description: "A WRAC server.",
      tags: ["Unreleased", "WRAC", "v2"],
    },
    {
      name: "lRACd",
      authorId: "sugoma",
      externalDownload: true,
      externalLink: "https://wdfiles.ru/Obvt",
      projectGit: "",
      description: "The official implementation of RAC server.",
      tags: ["Unknown", "RAC", "v2"],
    },
    {
      name: "CRAB",
      authorId: "pixtated",
      projectGit: "https://gitea.bedohswe.eu.org/pixtaded/crab",
      description: "Crimean RAC Bundle ",
      tags: ["Abandoned", "RAC", "v1.99.2"],
    },
    {
      name: "AlmatyD",
      authorId: "bedohswe",
      projectGit: "https://gitea.bedohswe.eu.org/bedohswe/almatyd",
      description: "Open source server for Sugoma's RAC protocol ",
      tags: ["Abandoned", "RAC", "v1.0"],
    },
  ];

  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <PageTitle id={"projects"}>Projects</PageTitle>
      <Text>
        This is a curated list of projects that is related to RAC protocol.
        There is a client and server implementations of RAC. Note that some
        projects are not available on Git services and should be downloaded from
        external sources. They are marked with
        <InlineCode>external@</InlineCode> text at the beginning of the author
        ID. If you want to add your project to this list, please make an issue
        on our GitHub repository.
      </Text>
      <Title id={"clients"}>Clients</Title>
      <Text>
        Here is a grid of all available client for RAC protocol with their
        respective repository link.
      </Text>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-full"}>
        {clients.map((client) => (
          <ProjectCard
            key={client.name}
            name={client.name}
            externalDownload={client.externalDownload || undefined}
            externalLink={client.externalLink || undefined}
            authorId={client.authorId}
            projectGit={client.projectGit}
            description={client.description}
            tags={client.tags}
          />
        ))}
      </div>
      <Title id={"servers"}>Servers</Title>
      <Text>
        And here are the servers implementation! You can choose whatever you
        want and setup your own RAC server.
      </Text>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4 w-full"}>
        {servers.map((server) => (
          <ProjectCard
            key={server.name}
            name={server.name}
            externalDownload={server.externalDownload}
            externalLink={server.externalLink}
            authorId={server.authorId}
            projectGit={server.projectGit}
            description={server.description}
            tags={server.tags}
          />
        ))}
      </div>
    </main>
  );
}

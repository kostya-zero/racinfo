import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Code from "@/components/blocks/Code";
import InlineCode from "@/components/blocks/InlineCode";

type UserAgent = {
  client: string;
  regex: string;
  color: string;
};

export default function Wrac() {
  const userAgents: UserAgent[] = [
    {
      client: "Tower",
      regex: "\\u25B2<(.*?)> (.*)",
      color: "White",
    },
    {
      client: "bRAC",
      regex: "\\uB9AC\\u3E70<(.*?)> (.*)",
      color: "Green",
    },
    {
      client: "CRAB",
      regex: "\\u2550\\u2550\\u2550<(.*?)> (.*)",
      color: "Light Red",
    },
    {
      client: "Mefedroniy",
      regex: "\\u00B0\\u0298<(.*?)> (.*)",
      color: "Light Magenta",
    },
    {
      client: "cRACk",
      regex: "\\u2042<(.*?)> (.*)",
      color: "Gold",
    },
    {
      client: "Snowdrop",
      regex: "\\u0D9E<(.*?)> (.*)",
      color: "Light Green",
    },
    {
      client: "clRAC",
      regex: "<(.*?)> (.*)",
      color: "Cyan",
    },
  ];
  return (
    <div className={"bg-stone-900 min-h-screen font-geist"}>
      <main
        className={"max-w-[700px] pt-15 flex flex-col gap-4 mx-auto w-full p-4"}
      >
        <NavBar />
        <Link
          href={"/protocol"}
          className={
            "text-stone-500 flex flex-row items-center transition duration-200 hover:text-stone-50 gap-2"
          }
        >
          <ArrowLeft size={16} /> Go Back
        </Link>
        <PageTitle id={"user-agents"}>User Agents</PageTitle>
        <Text>
          The RAC protocol doesn’t have any functionality to identify clients,
          so the community decided to use their own solution called{" "}
          <b>User Agents</b>.
        </Text>
        <Text>
          User Agents in RAC are implemented by adding an extra Unicode symbol
          as a prefix to usernames. For example, a message sent with the Tower
          client:
        </Text>
        <Code>{"▲<zero> Hello, world!"}</Code>
        <Text>
          The <InlineCode>▲</InlineCode> symbol in front of the username
          indicates that this message was sent using the Tower client. The
          client should use regex to parse these messages and determine the
          client, username, and message.
        </Text>
        <h3 className={"text-3xl text-stone-300 font-semibold font-rokkitt"}>
          Known Agents
        </h3>
        <Text>
          Below is a table of known user agents with their client names and
          regular expressions. Clients can also optionally use colored usernames
          for each client. You can add your own user agent via a pull request.
        </Text>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={"w-[150px]"}>Client Name</TableHead>
              <TableHead>Regular Expression</TableHead>
              <TableHead>Color</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userAgents.map((agent) => (
              <TableRow key={agent.client}>
                <TableCell className={"font-semibold"}>
                  {agent.client}
                </TableCell>
                <TableCell>
                  <code>{agent.regex}</code>
                </TableCell>
                <TableCell>{agent.color}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Footer />
      </main>
    </div>
  );
}

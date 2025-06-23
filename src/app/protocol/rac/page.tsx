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
import Title from "@/components/blocks/Title";
import InlineCode from "@/components/blocks/InlineCode";
import Code from "@/components/blocks/Code";

export default function Rac() {
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
        <PageTitle id={"real-address-chat-protocol"}>
          Real Address Chat Protocol
        </PageTitle>
        <Text>
          As mentioned earlier, RAC is a TCP-based protocol, so the server and
          client communicate by sending TCP packets to each other. The
          implementation is pretty simple, so don’t worry.
        </Text>
        <Text>
          All RAC servers use port <InlineCode>42666</InlineCode> by default,
          but servers that implement RACS (Real Address Chat Secure) use port{" "}
          <InlineCode>42667</InlineCode>.
        </Text>
        <Text>
          Keep in mind that the RAC server closes the connection after each
          message sent from the client. In some cases, it might receive two
          packets, but it will still close the connection.
        </Text>
        <Title id={"receiving-messages"}>Receiving messages</Title>
        <Text>
          Receiving messages from the server is implemented in an unusual way.
          There are two ways to receive messages from the server.
        </Text>
        <Text>
          But before you try to receive new messages, you need to get the total
          size of all messages. The messages are stored on the server in a
          single file, and to get new messages, you should send an offset.
        </Text>
        <Text>
          To receive the current size of the messages on the server, you need to
          send a <InlineCode>0x00</InlineCode> byte to the server. In response,
          the server will return the current size of the messages. Now, let’s
          begin receiving those messages.
        </Text>
        <Text>
          The first way is to receive all messages stored on the server. The
          client should send a <InlineCode>0x00</InlineCode> byte and then, in
          the same stream, send a <InlineCode>0x01</InlineCode> byte to the
          server. The server will respond with all messages, separated by{" "}
          <InlineCode>\n</InlineCode>.
        </Text>
        <Text>
          The second way is to get messages in chunks. Again, the client sends a{" "}
          <InlineCode>0x00</InlineCode> byte and then sends a{" "}
          <InlineCode>0x02</InlineCode> byte, along with the size of the
          messages it wants to receive. The number of messages to receive is
          calculated using this formula:
        </Text>
        <Code>new_received_size - last_known_size</Code>
        <Text>
          The server will send messages matching the requested size, separated
          by <InlineCode>\n</InlineCode>.
        </Text>
        <Title id={"sending-messages"}>Sending messages</Title>
        <Text>
          Sending messages in RAC is implemented simply, but with some
          interesting details. The server doesn’t identify clients or users, so
          clients have to handle that themselves. This means the client must
          send the user agent, username, and message all in one packet. For
          example:
        </Text>
        <Code>{"▲<zero> Hello, world!"}</Code>
        <Text>
          Did you notice the <InlineCode>▲</InlineCode> symbol? This is called a
          User Agent. In this example, the message was sent by the Tower client,
          because <InlineCode>▲</InlineCode> is its respective user agent. As
          mentioned earlier, the server itself cannot identify clients, so
          clients have to identify each other using these user agents.
        </Text>
        <Text>
          Also, note that <InlineCode>zero</InlineCode> is wrapped inside{" "}
          <InlineCode>{"<>"}</InlineCode>. This approach makes parsing messages
          easier with regex. Learn more about user agents and how to create your
          own in the user agents article.
        </Text>
        <Text>
          Note that the server should store the IP address with each sent
          message. However, messages sent by clients in authorized mode should
          be ignored for this. This idea, introduced by Sugoma, means that
          clients shouldn’t be anonymous unless they’re authorized. Still, most
          clients ignore the IP address and don’t display it.
        </Text>
        <Text>
          Back to sending messages: To send a message to the server, the client
          should send a <InlineCode>0x01</InlineCode> byte, followed by the
          message in the same packet—not separately. After that, you won’t
          receive anything from the server, even if there’s an error. So your
          final message should look like this:
        </Text>
        <Code>{"<user> Hello, everyone!"}</Code>
        <Text>
          Also, server that are implements RAC v2 allows to send messages in
          authorized mode. To send message in authorized mode, you need to send{" "}
          <InlineCode>0x02</InlineCode> and after that, separating by{" "}
          <InlineCode>\n</InlineCode>, send user&apos;s user name, password and
          message (<b>do not</b> include <InlineCode>\n</InlineCode> in the
          end).
        </Text>
        <Text>
          If the message was sent successfully, the server won’t send any
          response. If not, the server will send a <InlineCode>0x01</InlineCode>{" "}
          byte if the user doesn’t exist, and a <InlineCode>0x02</InlineCode>{" "}
          byte if the password is incorrect.
        </Text>
        <Title id={"authorization"}>Authorization</Title>
        <Text>
          Authorization is only available on servers that implement the RAC v2
          protocol, which adds an authorization system. This feature was added
          by Sugoma for people who don’t want to expose their IP address to
          everyone.
        </Text>
        <Text>
          Before sending messages in authorized mode, you need to register a
          user on the server. To do this, the client should send a{" "}
          <InlineCode>0x03</InlineCode> byte and, just like when sending
          messages, include the username and password separated by{" "}
          <InlineCode>\n</InlineCode>. If the user is created, the client will
          receive nothing in response. If the user already exists, the server
          will respond with a <InlineCode>0x01</InlineCode> byte.
        </Text>
        <Title id={"tls-connection"}>TLS Connection</Title>
        <Text>
          You can wrap your connection with TLS encryption. There’s nothing
          special about it.
        </Text>
        <Title id={"special-packets"}>Special Packets</Title>
        <Text>
          Some servers can implement special packets, but most of the time they
          don’t add much functionality.
        </Text>
        <Text>
          One of them is the <InlineCode>0x69</InlineCode> byte. You can send
          this byte to the server to get technical information about it. For
          example, after sending this byte, you might receive these bytes in
          response:
        </Text>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className={"w-[150px]"}>Byte</TableHead>
              <TableHead>Meaning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className={"font-semibold"}>
                <InlineCode>0x01</InlineCode>
              </TableCell>
              <TableCell>The server supports RAC v1.0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={"font-semibold"}>
                <InlineCode>0x02</InlineCode>
              </TableCell>
              <TableCell>The server supports RAC v1.99</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={"font-semibold"}>
                <InlineCode>0x03</InlineCode>
              </TableCell>
              <TableCell>The server supports RAC v2.0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Text>
          Also, right after this byte, the server will send information about
          itself, such as the server software name and its version.
        </Text>
        <Footer />
      </main>
    </div>
  );
}

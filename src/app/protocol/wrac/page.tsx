import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Title from "@/components/blocks/Title";
import InlineCode from "@/components/blocks/InlineCode";

export default function Wrac() {
  return (
    <main className={"flex flex-col gap-4 w-full"}>
      <Link
        href={"/protocol"}
        className={
          "text-stone-500 flex flex-row items-center transition duration-200 hover:text-stone-50 gap-2"
        }
      >
        <ArrowLeft size={16} /> Go Back
      </Link>
      <PageTitle id={"websocket-real-address-chat-protocol"}>
        WebSocket Real Address Chat Protocol
      </PageTitle>
      <Text>
        WRAC (WebSocket Real Address Chat) is a community-made successor to RAC
        that uses WebSockets instead of TCP. It uses the same requests as RAC,
        but you should send data in binary format. Unlike regular RAC, you can
        use the same connection multiple times—in RAC, you had to reconnect to
        the server for every request. This changes how message receiving works.
      </Text>
      <Title id={"receiving-messages"}>Receiving messages</Title>
      <Text>
        Since the connection can now be kept alive and WebSocket uses messages
        for transactions, we can’t retrieve messages the same way as in RAC.
      </Text>
      <Text>
        Receiving messages in WRAC is done by sending a single packet to the
        server with two bytes. The first byte is <InlineCode>0x00</InlineCode>,
        which indicates that you want to receive messages, and the second byte
        is either <InlineCode>0x01</InlineCode> or <InlineCode>0x02</InlineCode>
        . These two bytes work the same way as in RAC.
      </Text>
    </main>
  );
}

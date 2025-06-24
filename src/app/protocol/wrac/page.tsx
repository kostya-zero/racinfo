import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";
import Title from "@/components/blocks/Title";
import InlineCode from "@/components/blocks/InlineCode";

export default function Wrac() {
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
        <PageTitle id={"websocket-real-address-chat-protocol"}>
          WebSocket Real Address Chat Protocol
        </PageTitle>
        <Text>
          WRAC (WebSocket Real Address Chat) is a community-made successor to
          RAC that uses WebSockets instead of TCP. It uses the same requests as
          RAC, but you should send data in binary format. Also, you can use the
          same connection multiple times, what differs from the usual RAC, where
          you had to connect the server each time you made some request. That
          causes some differences in the messages receiving.
        </Text>
        <Title id={"receiving-messages"}>Receiving messages</Title>
        <Text>
          As the connection now can be keep-alive, and the websocket uses messages
          for transactions, we can&apos;t just do the same as we did in RAC to get the messages.
        </Text>
        <Text>
          Now, to use those packets (<InlineCode>0x01</InlineCode> for normal reading and <InlineCode>0x02</InlineCode> for chunked reading),
          we need to let the server know that we want to use them, and not send
          messages (the same packet-ids). The way how to do this is just add the byte <InlineCode>0x00</InlineCode> to the start
          of packets. For example: <InlineCode>0x00</InlineCode> <InlineCode>0x01</InlineCode> for normal reading.
        </Text>
        <Text>
          This way we can separate the packets that receive data from the packet that receives the total size.
          In the sence of keep-alive, WRAC solves the main problem with usual RAC.
        </Text>
        <Footer />
      </main>
    </div>
  );
}

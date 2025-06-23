import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Text from "@/components/blocks/Text";
import PageTitle from "@/components/blocks/PageTitle";

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
          RAC, but you should send data in binary format.
        </Text>
        <Footer />
      </main>
    </div>
  );
}

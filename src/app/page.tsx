import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Text from "@/components/blocks/Text";

export default function Home() {
  return (
    <div className={"bg-stone-900 min-h-screen font-geist"}>
      <main
        className={"max-w-[700px] pt-15 flex flex-col gap-4 mx-auto w-full p-4"}
      >
        <NavBar />
        <Text>
          Welcome to an unofficial webpage about the Real Address Chat protocol.
          Here you can find clients, servers, and documentation on how to use
          RAC and its successor, WRAC.
        </Text>
        <Text>
          Want to add your project to Racinfo? Make a pull request on our
          official <a href="https://github.com/kostya-zero/racinfo">GitHub repository</a>, and we’ll review it.
        </Text>
        <Footer />
      </main>
    </div>
  );
}

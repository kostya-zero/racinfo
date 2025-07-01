import Text from "@/components/blocks/Text";

export default function Home() {
  return (
    <main className={"flex flex-col gap-4 mx-auto w-full"}>
      <Text>
        Welcome to an unofficial webpage about the Real Address Chat protocol.
        Here you can find clients, servers, and documentation on how to use RAC
        and its successor, WRAC.
      </Text>
      <Text>
        Want to add your project to Racinfo? Make a pull request on our official
        GitHub repository, and we’ll review it.
      </Text>
    </main>
  );
}

export default function PageTitle({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  return (
    <h2 id={id} className={"text-4xl text-stone-300 font-bold font-rokkitt"}>
      {children}
    </h2>
  );
}

type Props = {
  children?: React.ReactNode;
};

export default function Code({ children }: Props) {
  return (
    <code className={"bg-stone-800 text-stone-400 px-3 py-2 rounded-sm"}>
      {children}
    </code>
  );
}

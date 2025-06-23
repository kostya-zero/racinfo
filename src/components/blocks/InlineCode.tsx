type Props = {
  children: React.ReactNode;
};

export default function InlineCode({ children }: Props) {
  return <code className={"bg-stone-800 px-1 rounded-sm"}>{children}</code>;
}

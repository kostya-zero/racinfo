type Props = {
  children?: React.ReactNode;
};

export default function Text({ children }: Props) {
  return <p className={"text-stone-400 text-lg"}>{children}</p>;
}

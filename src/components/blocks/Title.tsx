type Props = {
  children?: React.ReactNode;
  id: string;
};

export default function Title({ children, id }: Props) {
  return (
    <h3
      id={id}
      className={"text-3xl text-stone-300 font-semibold font-rokkitt"}
    >
      {children}
    </h3>
  );
}

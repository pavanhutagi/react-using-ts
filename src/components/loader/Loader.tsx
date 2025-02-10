interface LoaderProps {
  label: string;
}

export default function Loader({ label }: LoaderProps) {
  return (
    <>
      <span>{label}</span>
    </>
  );
}

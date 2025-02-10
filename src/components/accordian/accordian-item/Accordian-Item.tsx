import styles from "./Accordian-Item.module.css";

interface AccordianItemProps {
  label: string;
  children: React.ReactNode;
}

export default function AccordianItem({ label, children }: AccordianItemProps) {
  return (
    <>
      <div className={styles.accordianItemStyle}>{children}</div>
    </>
  );
}

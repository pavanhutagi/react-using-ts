import styles from "./Accordian-Container.module.css";
import { useState } from "react";

interface AccordianContainerProps {
  label: string;
  children: React.ReactNode;
}

export default function AccordionContainer({
  label,
  children,
}: AccordianContainerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.accordianContainerStyle}
      onClick={() => setIsOpen(!isOpen)}
    >
      <h2 className={styles.accordianContainerLabel}>{label}</h2>
      <div
        className={`${styles.accordianContainerContentStyle} ${
          isOpen ? styles.open : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

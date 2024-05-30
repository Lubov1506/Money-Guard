import s from "./Section.module.css";

export const Section = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

import React from "react";
import style from "./index.module.scss";

export default function PageSection({ children }) {
  return (
    <section className={style.section}>
      <div className={style.container}>{children}</div>
    </section>
  );
}

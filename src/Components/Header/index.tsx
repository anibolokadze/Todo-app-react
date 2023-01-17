import { useEffect, useState } from "react";
import style from "../Header/Header.module.scss";
export default function Header() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()));
  }, []);
  return (
    <div className={style.header}>
      <>
        <span className={style.date}>
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            weekday: "short",
          })}
        </span>
        <span className={style.time}>
          {dateState.toLocaleString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </>
    </div>
  );
}

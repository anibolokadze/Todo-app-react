import style from "../Header/Header.module.scss";
export default function Header() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Date().toLocaleString("en-US", {
    weekday: "short",
    day: "numeric",
  });

  return (
    <div className={style.header}>
      <div className={style.date_time}>
        <span className={style.date}>{date}</span>
        <span className={style.time}>{time}</span>
      </div>
    </div>
  );
}

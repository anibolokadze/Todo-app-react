export default function Header() {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Date().toLocaleString("en-US", {
    weekday: "long",
    day: "numeric",
  });

  return (
    <>
      <span>{date}</span>
      <span>{time}</span>
    </>
  );
}

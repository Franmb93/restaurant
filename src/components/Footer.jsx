export default function Footer() {
  const open = new Date().getHours() < 22 ? "open" : "close";

  const hours_minutes = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer>
      <div className="footer">
        <p>
          {hours_minutes} We're currently {open}
        </p>
        <p>© 2021 Spanish Restaurant Co.</p>
      </div>
    </footer>
  );
}

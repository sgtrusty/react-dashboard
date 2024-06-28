export default function DateField({ date }: { date: Date }) {
  const humanDate = date
    .toLocaleString("en-US", {
      month: "long",
      day: "2-digit",
      year: "numeric",
      hour12: false,
    })
    .replace(",", "");
  const datetime = date.toTimeString().split(" ")[0];

  return (
    <>
      <p className="text-black dark:text-white">{humanDate}</p>
      <p className="text-sm text-grey">{datetime}</p>
    </>
  );
}

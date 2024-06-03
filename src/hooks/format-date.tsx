export function FormatDate(date: string) {
  // Create a formatter with desired options
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  // Format the date
  if (date) {
    return formatter.format(Date.parse(date));
  }
}

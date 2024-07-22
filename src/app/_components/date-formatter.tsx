import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  if(!dateString) {
    return "Current"
  }
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	yyyy")}</time>;
};

export default DateFormatter;

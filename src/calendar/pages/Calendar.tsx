import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"

import { addHours, parse, startOfWeek, getDay, format } from "date-fns";
import { enUS } from "date-fns/locale/en-US";

import Navbar from "../components/Navbar";
import { bg } from "date-fns/locale";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const myEventsList = [
  {
    title: "My boss's birthday",
    notes: "Buy a cake",
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: "#fafafa",
  },
];

const CalendarPage = () => {
  return (
    <div>
      <Navbar />
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "calc(100vh - 80px" }}
      />
    </div>
  );
};

export default CalendarPage;

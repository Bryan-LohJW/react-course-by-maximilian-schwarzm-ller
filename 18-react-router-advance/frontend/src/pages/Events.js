import { Link } from "react-router-dom";

const EVENTS = [
  { id: "e1", title: "The first event" },
  { id: "e2", title: "The second event" },
  { id: "e3", title: "The third event" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events Page</h1>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id} relative="">
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;

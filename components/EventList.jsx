import Link from 'next/link';

const EventList = ({ events }) => {
  return (
    <ul>
      {events.map((event) => (
        <li key={event._id}>
          <Link href={`/events/${event._id}`}>
            <h1>{event.title}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
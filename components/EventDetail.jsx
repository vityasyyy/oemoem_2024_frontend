const EventDetail = ({ event }) => {
    if (!event) {
      return <div>No event data available</div>;
    }
  
    return (
      <div>
        <h1>{event.title || 'Untitled Event'}</h1>
        <p>Available slots: {event.slots !== undefined ? event.slots : 'N/A'}</p>
        <p>Enrolled users: {event.enrolledBy ? event.enrolledBy.length : 0}</p>
        {/* Add more event details as needed */}
      </div>
    );
  };
  
  export default EventDetail;
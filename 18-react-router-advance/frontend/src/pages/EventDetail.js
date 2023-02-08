import { Link, useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.id}</p>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
};

export default EventDetailPage;

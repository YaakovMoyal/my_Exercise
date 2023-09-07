import { useState, useEffect } from "react";
import { usePage } from "../providers/RouterProvider";
import { useID } from "../providers/ID_Provider";

interface Trip {
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
  description: string;
  price: number;
  image: string;
  activities: string[];
  id: string;
}

const TripDetail = () => {
  const [trip, setTrip] = useState<Trip | null>(null);
  const { setPage } = usePage();
  const { ID } = useID();

  useEffect(() => {
    fetch(`http://localhost:3000/api/trips/${ID}`)
      .then((data) => data.json())
      .then((data) => setTrip(data))
      .catch((err) => console.log(err));
  });
  if (!trip) return <> trip not found </>;

  return (
    <div>
      <span>
        {trip.name} {trip.startDate} {trip.endDate} <img src={trip.image} />
      </span>
      <button onClick={() => setPage("trips")}> back to trips</button>
    </div>
  );
};

export default TripDetail;

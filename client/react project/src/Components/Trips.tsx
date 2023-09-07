import { useState, useEffect } from "react";
import { usePage } from "../providers/RouterProvider";
import { useID } from "../providers/ID_Provider";
// import TripDetail from "./TripDetail";

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
const Trips = () => {
  const { setPage } = usePage();
  const { setID } = useID();
  const [trips, setTrip] = useState<Trip[] | null>(null);
  useEffect(() => {
    fetch("http://localhost:3000/api/trips")
      .then((data) => data.json())
      .then((data) => setTrip(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <button onClick={() => setPage("home")}> HOME</button>
      <button onClick={() => setPage("newTrip")}> new trip</button>

      {trips &&
        trips.map((trip, i) => (
          <div key={i} className="trip">
            <span
              onClick={() => {
                setID(trip.id);
                setPage("tripDetail");
              }}
            >
              {trip.id} {trip.name} {trip.startDate} {trip.endDate}
            </span>
            <button
              onClick={() => {
                fetch(`http://localhost:3000/api/trips/${trip.id}`, {
                  method: "DELETE",
                  headers: {
                    authorization: "test-token",
                  },
                })
                  .then((res) => console.log(res.status))
                  .catch((err) => console.log(err))
                  // ,trips.filter((item) => item.id !== trip.id);
              }}
            >
              delete trip
            </button>{" "}
            <button
              onClick={() => {
                setID(trip.id);
                setPage("updateTrip");
              }}
            >
              {" "}
              EDIT{" "}
            </button>
          </div>
        ))}
    </>
  );
};

export default Trips;

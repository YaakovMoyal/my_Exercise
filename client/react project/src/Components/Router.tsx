import Home from "./Home";
import Trips from "./Trips";
import TripDetail from "./TripDetail";
import NewTripForm from "./NewTripForm";
import UpdateTripForm from "./UpdateTripForm";
import UserRegistration from "./UserRegistration";
import UserLogIn from "./UserLogIn";
import { usePage } from "../providers/RouterProvider";

const Router = () => {
  const { page } = usePage();
  if (page === "home") return <Home />;
  if (page === "trips") return <Trips />;
  if (page === "tripDetail") return <TripDetail />;
  if (page === "newTrip") return <NewTripForm />;
  if (page === "updateTrip") return <UpdateTripForm />;
  if (page === "signIn") return <UserRegistration />;
  if (page === "logIn") return <UserLogIn />;
  return <> page not found</>;
};

export default Router;

import { usePage } from "../providers/RouterProvider";

const Home = () => {
  const { setPage } = usePage();

  const trips = <button onClick={() => setPage("trips")}>all trips</button>;
  const logIn = <button onClick={() => setPage("logIn")}> log in </button>;
  const signIn = <button onClick={() => setPage("signIn")}> sign in </button>;
  return (
    <>
      {trips} <p /> {logIn} {signIn}
    </>
  );
};

export default Home;

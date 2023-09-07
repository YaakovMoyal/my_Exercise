import { useState } from "react";
import { usePage } from "../providers/RouterProvider";

const UserRegistration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setPage } = usePage();

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: "test-token",
        },
        body: JSON.stringify({ email, password }),
      });
      // .then((res) => console.log(res));

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />{" "}
      email
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      password
      <br />
      <button onClick={handleSubmit}>שלח</button>
      <br />
      <button onClick={() => setPage("trips")}> back to trips</button>
    </>
  );
};

export default UserRegistration;

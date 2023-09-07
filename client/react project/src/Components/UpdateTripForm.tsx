import { useID } from "../providers/ID_Provider";
import { usePage } from "../providers/RouterProvider";
import { useState } from "react";

const UpdateTripForm = () => {
  const { ID } = useID();
  const { setPage } = usePage();

  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: 0,
    image: "",
    activities: ["", ""],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/trips/${ID}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: "test-token",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="destination">destination:</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="startDate">startDate:</label>
        <input
          type="text"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="endDate">endDate:</label>
        <input
          type="text"
          id="endDate"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="description">description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="price">price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="image">image:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          // required
        />
      </div>

      <div>
        <label htmlFor="activities">activities:</label>
        <input
          type="text"
          id="activities"
          name="activities"
          value={formData.activities}
          onChange={handleChange}
          // required
        />
      </div>

      <button type="submit">שלח</button>
      <p></p>
      <button onClick={() => setPage("trips")}>all trips</button>
    </form>
  );
};

export default UpdateTripForm;

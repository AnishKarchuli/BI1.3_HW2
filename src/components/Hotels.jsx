import { useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState("");

  const apiBaseURL = "https://hotels-backend-ap-is.vercel.app"

  const { data, loading, error } = useFetch(`${apiBaseURL}/hotels`);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(`${apiBaseURL}/hotels/${hotelId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete a hotel";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Hotel deleted successfully.");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {data?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
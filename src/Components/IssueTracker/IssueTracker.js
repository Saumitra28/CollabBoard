import React, { useState, useEffect } from "react";
import "./IssueTracker.css";

export default function IssueTracker() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      "https://script.google.com/macros/s/AKfycbxAen0VkWVnf7j9GtGFNcNL7dWyf99UxC7feO5qoAx9m-XDzC9HdX4zuJbcCYDmwJi8/exec"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbxAen0VkWVnf7j9GtGFNcNL7dWyf99UxC7feO5qoAx9m-XDzC9HdX4zuJbcCYDmwJi8/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        fetchData(); // Refetch the data to update the display
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  }

  return (
    <div className="bg-[#222222] rounded-xl text-white">
      <h1 className="mt-2 pt-10 font-semibold text-md">Issue Tracker</h1>

      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="w-full"
            placeholder="Your Issue"
            name="Name"
            type="text"
            required
          />
          <input
            className="w-full"
            placeholder="Your Email"
            name="Email"
            type="email"
            required
          />
          <input
            className="w-full "
            placeholder="Issue Description"
            name="Message"
            type="text"
            required
          />
          <input
            className="w-32 mx-auto text-black hover:cursor-pointer bg-white"
            name="Submit"
            type="submit"
          />
        </form>
      </div>
      <div>
        <h3>Submitted Data:</h3>
        <ul>
          {data.length > 0 ? (
            data.map((item, index) => (
              <li key={index}>
                Name: {item.Name}, Email: {item.Email}, Message: {item.Message}
              </li>
            ))
          ) : (
            <div>No data</div>
          )}
        </ul>
      </div>
    </div>
  );
}

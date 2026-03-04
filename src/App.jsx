import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState([]); //initially data is empty array

  //fetching data from API

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/", // mock API for testing purposes
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center p-10">
      <button
        onClick={fetchData}
        className="bg-blue-500 hover:bg-blue-600 transition px-6 py-2 rounded-lg shadow-lg hover:cursor-pointer"
      >
        Fetch Data
      </button>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.length > 0 ? (
          data.map((item) => (
            <li
              key={item.id}
              className="border border-gray-700 rounded-xl p-6 bg-gray-900 shadow-md hover:scale-105 transition"
            >
              <h1 className="text-lg font-semibold">Name: {item.name}</h1>
              <p className="text-gray-400">Username: {item.username}</p>
              <p className="text-gray-400">Email: {item.email}</p>
              <p className="text-gray-400">Phone: {item.phone}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No data found</p>
        )}
      </ul>
    </section>
  );
};

export default App;

import React from "react";
import "./userform.css";

const API = () => {
  const [exampleData, setExampleData] = React.useState({});

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setExampleData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h3>Demo of useEffect using an API Call :</h3>
      <pre>{JSON.stringify(exampleData, null, 2)}</pre>
    </div>
  );
};

export default API;

import React from "react";
import "./userform.css";

const UserForm = () => {
  const [formData, setFormData] = React.useState({
    fullName: "",
    userName: "",
    email: "",
    address: "",
    phoneNumber: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", formData);
  };

  return (
    <div>
      <h3>Demo of useState using a User Form: </h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Enter Full Name:</label>
          <input
            className="textInput"
            type="text"
            id="fullName"
            placeholder="John Doe"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="userName">Enter a Username:</label>
          <input
            className="textInput"
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Enter your Email:</label>
          <input
            className="textInput"
            type="email"
            placeholder="abc@gmail.com"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Enter your Address:</label>
          <textarea
            className="textInput"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Enter your Phone Number:</label>
          <input
            className="textInput"
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;

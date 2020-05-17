import React from "react";

const Form = () => {
  return (
    <div>
      <ul>
        <li>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
          />
        </li>

        <li>
          <label>Email</label>
          <input
            type="email"
            name="Email"
            placeholder="Name"
          />
        </li>

        <li>
          <label>Car</label>
          <input
            type="text"
            name="Car"
            placeholder="Car"
          />
        </li>
        {/* Drop Down Menu  */}
        {/*   */}

        <label>Calendar</label>
      </ul>
    </div>
  );
};

export default Form;

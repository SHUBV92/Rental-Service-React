import React, { useState } from "react";
import {
  dropbtn,
  dropdown,
  dropdownContent
} from "./IPC.styles";
const IPC = props => {
  const [income, setIncome] = useState(0);
  const [carEntries, setcarEntries] = useState(0);
  // const [carEntry, setcarEntries] = useState(0);

  //   const [income, setIncome] = useState(0);

  return (
    <div>
      <h1>Income Per Car</h1>
      <p>You choose {income} Mercedes</p>
      <button
        onClick={() => setIncome(income + 1)}
      >
        Click me
      </button>

      <p>You choose {carEntries} Entries</p>
      <button
        onClick={() =>
          setcarEntries(carEntries + 1)
        }
      >
        Click me
      </button>

      <dropdown>
        <dropbtn>Dropdown</dropbtn>
        <dropdownContent>
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </dropdownContent>
      </dropdown>
    </div>
  );
};

export default IPC;

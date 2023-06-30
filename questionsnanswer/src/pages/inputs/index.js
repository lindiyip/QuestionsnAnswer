import { useState } from "react";
import Entry from "./inputs/Entry";
import AllAttempts from "./inputs/AllAttempts";


const Inputs = () => {
  const [attempts, setAttempts] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState({});

  const addAttempts = (entry) => {
    setAttempts((prevState) => [
      ...prevState,
      { ...entry, id: crypto.randomUUID() },
    ]);
  };

  return (
    <div className="flex">
      <Entry data={selectedEntry} add={addAttempts} />
      <AllAttempts data={attempts} setSelectedEntry={setSelectedEntry} />
    </div>
  );
};

export default Inputs;

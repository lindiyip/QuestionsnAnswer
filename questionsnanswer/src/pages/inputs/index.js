import { useState } from "react";
import Entry from "./Entry";
import AllAttempts from "./AllAttempts";


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
    <div className="flex mt-[100px]">
      <Entry data={selectedEntry} add={addAttempts} />
      <AllAttempts data={attempts} setSelectedEntry={setSelectedEntry} />
    </div>
  );
};

export default Inputs;

import { useState } from "react";

const AllAttempts = ({ data, setSelectedEntry }) => {
  console.log("data", data);

  const List = () => {
    return (
      <ul>
        {data.map((d, i) => {
          return (
            <li key={i} className="text-sm">
              <a
                onClick={() => {
                  handleEntryOnClick(d);
                }}
                className="underline cursor-pointer"
              >
                {d.title}
              </a>{" "}
            </li>
          );
        })}
      </ul>
    );
  };

  const handleEntryOnClick = (entry) => {
    setSelectedEntry(entry);
  };

  return (
    <div className="basis-1/5 border border-blue-500 p-4">
      <div className="font-semibold">All Attempts</div>
      {
        // This is a conditional rendering
        data.length > 0 ? (
          <List />
        ) : (
          <div className="italic text-sm">No items yet</div>
        )
      }
    </div>
  );
};

export default AllAttempts;

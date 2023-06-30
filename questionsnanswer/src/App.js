import React from "react";
import TopMenuContainer from "./components/top-menu/Container";
import { BasicTable } from "./components/table/BasicTable";
import { SortingTable } from "./components/table/SortingTable";
// import Entry from "./pages/inputs/Entry";

function App() {
  return (
    <div>
      <TopMenuContainer />
      <div className="mt-[100px] flex justify-end px-5 py-5 bg-white text-gray-700">
        <button className="primary-button">New Question</button>
      </div>
      <SortingTable />
      {/* <Entry /> */}
    </div>
  );
}

export default App;

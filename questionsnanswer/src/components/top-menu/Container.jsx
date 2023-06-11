import Welcome from "./welcome";

const username = "Mary";

const TopMenuContainer = () => {
  return (
    <div className="flex justify-between absolute w-full top-0">
      <div className="border border-black p-4">Logo</div>
      <div className="border border-black p-4">Hyperlinks</div>
      <div className="border border-black p-4">Welcome, user</div>
    </div>
  );
};

export default TopMenuContainer;

import { Link } from "react-router-dom";

const HyperLinks = () => {
  return (
    <div className="flex justify-between text-decoration-line: underline">
      <Link to={`/Home`} className="px-2 flex flex-col justify-center">Home</Link>
      <Link to={`/MyContribution`} className="px-2 flex flex-col justify-center">My Contributions</Link>
    </div>
  );
};

export default HyperLinks;

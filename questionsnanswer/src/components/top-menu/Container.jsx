import CompanyLogoImage from "../../assets/images/company-logo.png";
import CompanyLogo from "./CompanyLogo";
import HyperLinks from "./HyperLinks.jsx";
import Welcome from "./Welcome";

const username = "Mary";

const TopMenuContainer = () => {
  return (
    <div className="flex fixed top-0 w-full items-center justify-between bg-white text-gray-700 border-b border-gray-200 z-10">
      <CompanyLogo img={CompanyLogoImage} />
      <HyperLinks />
      <Welcome currentUser={username} />
    </div>
  );
};

export default TopMenuContainer;

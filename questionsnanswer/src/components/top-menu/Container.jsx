import CompanyLogoImage from "../../assets/images/company-logo.png";
import CompanyLogo from "./CompanyLogo";
import HyperLinks from "./HyperLinks.jsx";
import Welcome from "./Welcome";

const username = "Mary";

const TopMenuContainer = () => {
  return (
    <div className="flex justify-between border border-green-500 p-2 absolute w-full top-0">
      <CompanyLogo img={CompanyLogoImage} />
      <HyperLinks />
      <Welcome currentUser={username} />
    </div>
  );
};

export default TopMenuContainer;

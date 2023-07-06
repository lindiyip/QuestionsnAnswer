import CompanyLogoImage from "../../assets/images/company-logo.png";
import CompanyLogo from "./CompanyLogo";
import HyperLinks from "./HyperLinks.jsx";
import Welcome from "./Welcome";
import {useContext} from "react";
import {UserContext} from '../../contexts/UserContext';

const TopMenuContainer = () => {
  const {username} = useContext(UserContext)
  const {userStatus} = useContext(UserContext)

  return (
    <div className="text-lg flex fixed top-0 w-full items-center justify-between bg-gray-50">
        <CompanyLogo img={CompanyLogoImage} />
        <HyperLinks />
        <Welcome currentUser={username} currentUserStatus={userStatus}/>
    </div>
  );
};

export default TopMenuContainer;

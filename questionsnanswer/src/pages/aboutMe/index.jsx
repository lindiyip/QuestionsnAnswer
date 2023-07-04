import { UserContext } from "../../contexts/UserContext";
import {useContext} from "react";
import portrait from "../../assets/images/portrait.jpg";

const AboutMe = () => {

    const {username, setUsername} = useContext(UserContext);
    const {userStatus, setuserStatus} = useContext(UserContext);

    const handleChange = (e) => {
        e.preventDefault();
        setUsername(e.target.value);
    }

    return(
        <div>
            <div className='text-3xl my-10 ps-10'><b>My Profile</b></div>
            <div className="flex px-10">
                <label className="basis-1/5 custom-display-label ps-15">Username: </label>
                    <form className='ps-4'>
                        <input type="text" className="flex basis-50 custom-input basis-1/12 ps-8" value={username} onChange={handleChange} name="username" />
                    </form>
            </div>
            <div className="flex p-10">
                <label className="basis-1/5 custom-display-label ps-15">User Status: </label>
                    <form className='ps-4'>
                        <input type="text" className="flex basis-50 custom-input basis-1/12" value={userStatus} onChange={handleChange} name="userStatus" /> 
                    </form>
            </div>
            <div>
                <div className="flex p-10">
                    <label className="basis-1/5 custom-display-label ps-15">User Profile Picture: </label>
                        <img src={portrait} className="rounded-full object-cover h-48 w-48"></img>
                </div>
            </div>
            
        </div>
    );
}

export default AboutMe;
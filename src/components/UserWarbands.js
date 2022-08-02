import { Link } from "react-router-dom";

function UserWarbands() {
    return(
        <div className="user-armies">
            <div>
            <h1>Warbands</h1>
            <Link to={"/warband_builder"}>
                <p>Create Warband</p>
            </Link>
            </div>
            <p>Warbands go here</p>
        </div>
    )
}

export default UserWarbands;
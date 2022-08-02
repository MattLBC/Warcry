import { useContext } from "react";
import { UserContext } from "../context/User";
import logo from "../logo.png";

function Header() {
    const { user } = useContext(UserContext);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome {user.username}</p>
    </header>
  );
}

export default Header;

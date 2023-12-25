// import "./header.css";

import { Link } from "react-router-dom";

type userDetails = {
  userId: string;
  userName: string;
};

type propsType = {
  userDetails: userDetails;
};

export function Header(props: propsType) {
  return (
    <div id="header">
      <h4>Logo</h4>
      <ul>
        <li>
          {" "}
          <Link to={`/`}>Home</Link>{" "}
        </li>
        <li>
          <Link to={`/about`}>About</Link>{" "}
        </li>
        <li>
          <Link to={`/contact`}>Contact</Link>{" "}
        </li>
        <li>Services </li>
        <li> User {props.userDetails.userName}</li>
      </ul>
    </div>
  );
}

import { useState } from "react";
import "./style.css";
export function UserLogin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  console.log(userName, password);

  const formSubmit = () => {
    alert(JSON.stringify({ userName, password }));
  };

  return (
    <div id="form">
      <div className="inputsEle">
        <label form="userName">UserName</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          id="userName"
          name="userName"
        />

        <label form="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
        />

        <button onClick={formSubmit} id="buttom">
          Sumbit
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import PComponent from "./PComponent";

export function Counter() {
  const [counter, setConunter] = useState(1);

  const incCounter = () => {
    setConunter(counter + 1);
  };

  const decCounter = () => {
    setConunter(counter - 1);
  };

  if (counter > 10) {
    return <PComponent message="You cant Inc is More then 10" />;
  }

  return (
    <div>
      <p>Conunter {counter}</p>

      {/* {counter > 10 ? (
        <PComponent message="Your counter is More then 10" />
      ) : (
        <PComponent message="Your counter is Less then 10" />
      )} */}

      {/* {counter > 10 && <PComponent message="Your counter is More then 10" />} */}

      <button onClick={incCounter}>Inc</button>
      <button onClick={decCounter}>Dec</button>
    </div>
  );
}

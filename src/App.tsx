import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { UserLogin } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Hello } from "./components/hello/Hello";
import { Outlet } from "react-router-dom";

function App() {
  const user = {
    userId: "123",
    userName: " React-Ts",
  };

  return (
    <div>
      <Header userDetails={user} />
      <Hello />
      <UserLogin />
      <Footer />

      <div className="child">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

import './App.css';
import {Header} from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";
import {useState} from "react";

function App() {
  const [userData, setUserData] = useState();

  return (
    <div className={"app"} onClick={(e) => {console.log(e.target);}}>
      <Header
        userData={userData}
        setUserData={setUserData}
      />
      <TaskCards />
    </div>
  );
}

export default App;

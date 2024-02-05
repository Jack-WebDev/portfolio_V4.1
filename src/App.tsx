import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <p style={{backgroundColor:"#000", textAlign:"center", fontSize:"1.5rem"}}>Profolio currently in development</p>
      <Outlet />
    </div>
  );
};

export default App;

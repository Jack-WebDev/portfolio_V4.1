import { Outlet } from "react-router-dom";
import { FaTools } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <p
        style={{
          backgroundColor: "#000",
          textAlign: "center",
          fontSize: "1.2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        Portfolio currently in development
        <FaTools />
      </p>
      <Outlet />
    </div>
  );
};

export default App;

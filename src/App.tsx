import "./App.css";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "./containers";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
    </>
  );
}

export default App;

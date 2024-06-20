
import Sidebar from "./components/Dashboard/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return<div>
    <Navbar />
    <div className="flex">
      <Sidebar />
    </div>
  </div>;
}

export default App;

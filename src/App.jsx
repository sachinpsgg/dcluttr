import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";

function App() {

  return (
    <>
        <div className="flex h-screen">
                <Sidebar />
            <div className="w-full overflow-y-auto h-screen p-5">
                <Dashboard />
            </div>
        </div>
    </>
  )
}

export default App

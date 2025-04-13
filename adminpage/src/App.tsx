import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Menu from "./components/Menu";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Messages from "./pages/Messages";
import Integrations from "./pages/Integrations";

function App() {
  return (
    <Router>
      <div className="h-screen grid grid-cols-1 md:grid-cols-4 gap-5 bg-gray-200 p-5">
        <Menu className="row-span-2" />
        <div className="col-span-3 flex flex-col h-full">
          <Header className="row-span-2" />
          <div className="h-[2px] bg-gray-200 my-2" />
          <Routes>
            <Route path="/" element={<Content className="overflow-auto" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

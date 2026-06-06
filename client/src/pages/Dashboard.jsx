import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex bg-zinc-950 min-h-screen">
        {showSidebar && (
  <div className="fixed inset-0 z-50 md:hidden">
    <div className="absolute inset-0 bg-black/50"
      onClick={() => setShowSidebar(false)}
    />

    <div className="relative w-[250px] h-screen">
  <Sidebar />
    </div>
  </div>
)}

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
  <Sidebar />
</div>
      
      <div className="flex-1">

        {/* Mobile Header */}
        <div className="md:hidden flex items-center gap-4 p-4 border-b border-zinc-800">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="text-white text-2xl"
          >
            <FiMenu />
          </button>

          <h1 className="text-white text-xl font-bold">
            QueryHive
          </h1>
        </div>

        <Navbar />

        <div className="p-8">
          <h1 className="text-white text-4xl font-bold">
            Welcome to QueryHive
          </h1>

          <p className="text-zinc-400 mt-4">
            Your AI customer support dashboard
          </p>
        </div>
      </div>
    </div>
  );
}
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="flex bg-zinc-950 min-h-screen">
      
      <Sidebar />

      <div className="flex-1">
        
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
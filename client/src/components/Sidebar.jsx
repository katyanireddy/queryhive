export default function Sidebar() {
  return (
    <div className="w-[250px] h-screen bg-zinc-900 border-r border-zinc-800 p-6">
      
      <h1 className="text-3xl font-bold text-white mb-10">
        QueryHive
      </h1>

      <div className="flex flex-col gap-4">
        <button className="text-left text-zinc-300 hover:text-white transition">
          Dashboard
        </button>

        <button className="text-left text-zinc-300 hover:text-white transition">
          Chats
        </button>

        <button className="text-left text-zinc-300 hover:text-white transition">
          Documents
        </button>

        <button className="text-left text-zinc-300 hover:text-white transition">
          Analytics
        </button>

        <button className="text-left text-zinc-300 hover:text-white transition">
          Settings
        </button>
      </div>
    </div>
  );
}
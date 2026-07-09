export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-600 text-white">
      <h1 className="text-2xl font-bold">🏥 PharmaSync</h1>

      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}
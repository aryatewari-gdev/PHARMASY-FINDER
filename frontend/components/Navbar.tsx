export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
      <h1 className="text-2xl font-bold">🏥 PharmaSync</h1>

      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}
export default function SearchBar() {
  return (
    <div className="bg-blue-500" >
      <input className=" focus:outline-none border-2 border-amber-50" 
        type="text" 
        placeholder="Search medicines..."
        
      />
    </div>
  );
}
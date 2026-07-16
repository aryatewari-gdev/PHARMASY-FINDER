import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import PharmacyCard from "@/components/PharmacyCard";

export default function Home() {
  const pharmacies = [
    {
      name: "Apollo Pharmacy",
      medicine: "Paracetamol 650mg",
      stock: 34,
      price: 28,
      distance: "0.8 km",
      rating: 4.8,
      isOpen: true,
    },
    {
      name: "MedPlus",
      medicine: "Paracetamol 650mg",
      stock: 12,
      price: 30,
      distance: "1.5 km",
      rating: 4.6,
      isOpen: false,
    },
    {
      name: "WellCare Pharmacy",
      medicine: "Vitamin C",
      stock: 25,
      price: 120,
      distance: "2.4 km",
      rating: 4.9,
      isOpen: true,
   }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <Navbar />
      <Hero />
      <SearchBar />

      {pharmacies.map((pharmacy, index) => (
        <PharmacyCard
          key={index}
          name={pharmacy.name}
          medicine={pharmacy.medicine}
          stock={pharmacy.stock}
          price={pharmacy.price}
          distance={pharmacy.distance}
          rating={pharmacy.rating}
          isOpen={pharmacy.isOpen}
        />
      ))}
    </main>
  );
}
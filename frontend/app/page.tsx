"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import SearchBar from "@/components/SearchBar";
import PharmacyCard from "@/components/PharmacyCard";

export default function Home() {
  const [search, setSearch] = useState("");

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
      stock: 20,
      price: 150,
      distance: "2.3 km",
      rating: 4.9,
      isOpen: true,
    },
  ];
  const filteredPharmacies = pharmacies.filter((pharmacy) =>
  pharmacy.medicine.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main className="min-h-screen bg-zinc-50 p-6">
      <Navbar />

      <Hero />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <p className="mb-4 text-lg text-black">
        Search Value: <strong>{search}</strong>
      </p>

      {filteredPharmacies.map((pharmacy, index) => (
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
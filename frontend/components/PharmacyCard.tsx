type PharmacyCardProps = {
  name: string;
  medicine: string;
  stock: number;
  price: number;
  distance: string;
  rating: number;
  isOpen: boolean;
};

export default function PharmacyCard(props: PharmacyCardProps) {
  return (
    <section className="bg-white border rounded-xl shadow-md p-4 max-w-md w-full my-4">
      <h2 className="text-2xl font-bold text-black">
        🏥 {props.name}
      </h2>

      <p className="text-gray-700">
        💊 Medicine: {props.medicine}
      </p>

      <p className="text-gray-700">
        📦 Stock: {props.stock} strips
      </p>

      <p className="text-gray-700">
        💰 Price: ₹{props.price}
      </p>

      <p className="text-gray-700">
        📍 Distance: {props.distance}
      </p>

      <p className="text-gray-700">
        ⭐ Rating: {props.rating}
      </p>

      <p className="font-semibold">
        {props.isOpen ? "🟢 Open Now" : "🔴 Closed"}
      </p>
    </section>
  );
}
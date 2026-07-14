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
    <section className="border rounded-lg p-4 shadow-md max-w-sm">
      <h2 className="text-xl font-bold">{props.name}</h2>

      <p>💊 Medicine: {props.medicine}</p>

      <p>📦 Stock: {props.stock} strips</p>

      <p>💰 Price: ₹{props.price}</p>

      <p>📍 Distance: {props.distance}</p>

      <p>⭐ Rating: {props.rating}</p>

      <p>
        {props.isOpen ? "🟢 Open Now" : "🔴 Closed"}
      </p>
    </section>
  );
}
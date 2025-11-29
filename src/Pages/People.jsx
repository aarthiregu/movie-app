import bryan from "../assets/Bryan Cranston.png";
import millie from "../assets/Chris Hemsworth.png";
import henry from "../assets/Emma Watson.png";
import emma from "../assets/Gal Gadot.png";
import chris from "../assets/Henry Cavill.png";
import zendaya from "../assets/Millie Bobby Brown.png";
import robert from "../assets/Robert Downey Jr..png";
import gal from "../assets/Zendaya.png";

export default function People() {
  const people = [
    { name: "Bryan Cranston", image: bryan },
    { name: "Millie Bobby Brown", image: millie },
    { name: "Henry Cavill", image: henry },
    { name: "Emma Watson", image: emma },
    { name: "Chris Hemsworth", image: chris },
    { name: "Zendaya", image: zendaya },
    { name: "Robert Downey Jr.", image: robert },
    { name: "Gal Gadot", image: gal },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">People</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {people.map((person, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow p-4 rounded hover:scale-105 transition-transform"
          >
            <img
              src={person.image}
              alt={person.name}
              className="w-32 h-40 object-cover rounded-lg mb-2"
            />
            <p className="font-medium">{person.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

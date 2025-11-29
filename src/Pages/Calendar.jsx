export default function Calendar() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Calendar</h1>
      <p className="text-lg">Upcoming shows and air dates will be displayed here.</p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="bg-white shadow p-4 rounded text-center">
            Day {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

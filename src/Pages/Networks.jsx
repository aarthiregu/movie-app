export default function Networks() {
  const networks = [
    {
      name: "NBC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/NBC_logo.svg/200px-NBC_logo.svg.png",
    },
    {
      name: "ABC",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/ABC_logo.svg/200px-ABC_logo.svg.png",
    },
    {
      name: "FOX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FOX_wordmark.svg/200px-FOX_wordmark.svg.png",
    },
    {
      name: "CBS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/CBS_logo.svg/200px-CBS_logo.svg.png",
    },
    {
      name: "HBO",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/HBO_logo.svg/200px-HBO_logo.svg.png",
    },
    {
      name: "Netflix",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    },
    {
      name: "Disney+",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg",
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Networks</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {networks.map((network, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow p-4 rounded hover:scale-105 transition-transform"
          >
            <img
              src={network.logo}
              alt={network.name}
              className="w-32 h-32 object-contain mb-2"
            />
            <p className="font-medium">{network.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WebChannels() {
  const channels = [
    { name: "HBO", logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_logo.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Disney+", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" },
    { name: "BBC", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/BBC_logo_%282017%29.svg" },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Web Channels</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {channels.map((channel, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow p-4 rounded">
            <img src={channel.logo} alt={channel.name} className="w-24 h-24 object-contain mb-2" />
            <p className="font-medium">{channel.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

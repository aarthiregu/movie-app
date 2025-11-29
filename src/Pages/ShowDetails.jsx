import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShowDetails } from "../api/tvmaze.js";

export default function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShowDetails(id).then(setShow);
  }, [id]);

  if (!show) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{show.name}</h1>
      <img
        src={show.image?.original}
        alt={show.name}
        className="w-full md:w-1/3 rounded"
      />
      <div
        dangerouslySetInnerHTML={{ __html: show.summary }}
        className="mt-4"
      ></div>
    </div>
  );
}

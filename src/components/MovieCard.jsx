function SingleShowCard({ item, triggerDetails }) {
  return (
    // Card box
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition border border-gray-100 flex flex-col justify-between">
      {/* Top: image + title */}
      <div>
        <img
          src={item.image?.medium || "https://via.placeholder.com/210x295"}
          alt={item.name}
          className="w-full h-64 object-cover rounded-lg mb-3"
        />
        <h3 className="text-lg font-bold text-gray-900 truncate">
          {item.name}
        </h3>
      </div>

      {/* Bottom: rating + year + button */}
      <div>
        <div className="flex justify-between items-center my-3 text-sm text-gray-500 font-medium">
          <span>⭐ {item.rating?.average ?? "N/A"}</span>
          <span>
            📅 {item.premiered ? item.premiered.substring(0, 4) : "N/A"}
          </span>
        </div>

        {/* Button → show details */}
        <button
          onClick={() => triggerDetails(item)}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 font-medium transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default SingleShowCard;

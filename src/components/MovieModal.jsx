// function ShowDetailsModal({ showInfo, dismissModal }) {
//   // If no movie is selected, do not show the modal
//   if (!showInfo) return null;

//   return (
//     // Modal background overlay
//     <div className="fixed inset-0 bg-neutral-900 bg-opacity-60 flex justify-center items-center p-4 z-50">
//       {/* Modal box container */}
//       <div className="bg-white rounded-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
//         {/* Close icon button */}
//         <button
//           onClick={dismissModal}
//           className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 font-bold text-xl"
//         >
//           ✕
//         </button>

//         {/* Movie large backdrop image */}
//         <img
//           src={showInfo.image?.original || "https://via.placeholder.com/400"}
//           alt={showInfo.name}
//           className="w-full h-56 object-cover rounded-lg mb-4"
//         />

//         {/* Movie title */}
//         <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
//           {showInfo.name}
//         </h2>

//         {/* Rating and Release year info */}
//         <div className="flex gap-6 text-sm text-gray-600 mb-4 font-medium">
//           <span>⭐ Score: {showInfo.rating?.average || "N/A"}</span>
//           <span>📅 Premiered: {showInfo.premiered || "N/A"}</span>
//         </div>

//         {/* Movie summary description */}
//         <div className="text-gray-600 text-sm mb-6 leading-relaxed">
//           <h4 className="font-semibold text-gray-800 mb-1">Storyline:</h4>
//           <p
//             dangerouslySetInnerHTML={{
//               __html: showInfo.summary || "Description not available.",
//             }}
//           ></p>
//         </div>

//         {/* Bottom close button */}
//         <button
//           onClick={dismissModal}
//           className="w-full bg-rose-600 text-white py-2.5 rounded-lg hover:bg-rose-700 font-medium transition"
//         >
//           Close Window
//         </button>
//       </div>
//     </div>
//   );
// }

// export default ShowDetailsModal;

function ShowDetailsModal({ showInfo, dismissModal }) {
  // No movie selected → hide modal
  if (!showInfo) return null;

  return (
    // Dark background overlay
    <div className="fixed inset-0 bg-neutral-900 bg-opacity-60 flex justify-center items-center p-4 z-50">
      {/* White modal box */}
      <div className="bg-white rounded-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Close button (top right) */}
        <button
          onClick={dismissModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 font-bold text-xl"
        >
          ✕
        </button>

        {/* Movie image */}
        <img
          src={showInfo.image?.original || "https://via.placeholder.com/400"}
          alt={showInfo.name}
          className="w-full h-56 object-cover rounded-lg mb-4"
        />

        {/* Movie title */}
        <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
          {showInfo.name}
        </h2>

        {/* Rating + Premiered year */}
        <div className="flex gap-6 text-sm text-gray-600 mb-4 font-medium">
          <span>⭐ Score: {showInfo.rating?.average || "N/A"}</span>
          <span>📅 Premiered: {showInfo.premiered || "N/A"}</span>
        </div>

        {/* Movie summary */}
        <div className="text-gray-600 text-sm mb-6 leading-relaxed">
          <h4 className="font-semibold text-gray-800 mb-1">Storyline:</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: showInfo.summary || "Description not available.",
            }}
          ></p>
        </div>

        {/* Bottom close button */}
        <button
          onClick={dismissModal}
          className="w-full bg-rose-600 text-white py-2.5 rounded-lg hover:bg-rose-700 font-medium transition"
        >
          Close Window
        </button>
      </div>
    </div>
  );
}

export default ShowDetailsModal;

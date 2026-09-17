// function Navbar({ onNavigateHome, onNavigateMovies }) {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-md">
//       <h1 className="text-xl font-bold cursor-pointer" onClick={onNavigateHome}>
//         🎬 MovieExplorer
//       </h1>

//       <div className="flex gap-4">
//         <button
//           onClick={onNavigateHome}
//           className="hover:text-blue-400 transition"
//         >
//           Home
//         </button>
//         <button
//           onClick={onNavigateMovies}
//           className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Movies
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

function Navbar({ onNavigateHome, onNavigateMovies }) {
  return (
    // Top navigation bar
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-md">
      {/* Logo / App name */}
      <h1 className="text-xl font-bold cursor-pointer" onClick={onNavigateHome}>
        🎬 MovieExplorer
      </h1>

      {/* Right side buttons */}
      <div className="flex gap-4">
        {/* Home button */}
        <button
          onClick={onNavigateHome}
          className="hover:text-blue-400 transition"
        >
          Home
        </button>

        {/* Movies button */}
        <button
          onClick={onNavigateMovies}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Movies
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

# 🎬 MovieExplorer

A responsive **Movie Explorer Application** built with React, Vite, and Tailwind CSS. Users can seamlessly browse movies, search for specific titles in real-time, and view in-depth details through an interactive modal.

---

## 🛠️ Technology Stack

- **Frontend Library:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **Data Source / API:** TVMaze API (`https://www.tvmaze.com/api`)
- **Icons & UI Enhancements:** Custom Modal, Responsive Grids, and Lucide/Emoji indicators

---

## 📋 Features & Requirements Implemented

### 1. Home Page

- **Navbar:** Features the app logo and quick navigation links to switch between Home and Movies.
- **Hero Banner:** An attractive landing section featuring a gradient background, catchy title ("DISCOVER MOVIES"), a short description, and a Call-To-Action (CTA) button ("Explore Now") that navigates directly to the Movie Listing page.
- **Footer:** Clean copyright section.

### 2. Movie Listing & Search Page

- **Live Search:** A prominent search bar at the top allowing users to search movies by title in real-time using TVMaze's search endpoint (`/search/shows?q=query`).
- **Responsive Grid:** Movie cards are organized in a fully responsive CSS Grid layout (ranging from 1 to 4 columns across mobile, tablet, and desktop screens).
- **Movie Cards:** Each card displays the movie poster, title, premier year, rating, and a "View Details" button.

### 3. Movie Details Modal

- **Interactive Pop-up:** Clicking "View Details" on any card opens a modal overlay with a backdrop image, full title, score, release date, and HTML-parsed storyline/summary.
- **Easy Dismissal:** Can be closed using the cross (`✕`) icon or the "Close Window" button at the bottom.

---

## 🏗️ Project Architecture & File Structure

To maintain a clean and modular codebase, the application logic has been separated into components and custom hooks:
```
text
src/
│
├── components/
│   ├── Navbar.jsx          # Top navigation bar component
│   ├── MovieCard.jsx       # Individual movie card component
│   └── MovieModal.jsx      # Detailed pop-up modal component
│
├── movieLogic.js           # Custom hook managing states and API fetching
├── App.jsx                 # Main entry component linking views and layout
└── main.jsx                # React DOM root render file
```
🚀 How to Run Locally
1. Clone the repository:
```
git clone [https://github.com/your-username/movie-explorer.git](https://github.com/Jahir-tawhid/movie-explorer.git)
```

2. Navigate to the project directory:
```
cd movie-explorer
```
3. Install dependencies:
```npm install```
4. Run the development server:
```npm run dev```
5. Open your browser and go to http://localhost:5173.

🌐 Live Deployment:
---
    Live Demo Link:

© License:
---
© 2026 MovieExplorer. All rights reserved.



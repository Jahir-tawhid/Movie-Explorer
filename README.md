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

## 🚀 How to Run Locally:

1. Clone the repository:

```
git clone [https://github.com/your-username/movie-explorer.git](https://github.com/Jahir-tawhid/movie-explorer.git)
```

2. Navigate to the project directory:

```
cd movie-explorer
```

3. Install dependencies:
   `npm install`
4. Run the development server:
   `npm run dev`
5. Open your browser and go to http://localhost:5173.

## 🌐 Live Deployment:

Live Demo Link: [movie-explorer-six-chi.vercel.app ](https://movie-explorer-six-chi.vercel.app/)

E-mail: Jahirtawhid1988@gmail.com

Linkedin: www.linkedin.com/in/jahirtawhid

---

# 🎬 Assignment 2: Movie Explorer

> **Objective:** Build a responsive **Movie Explorer Application** using React. Users should be able to browse movies, search for specific titles, and view detailed information in an interactive modal.

---

## 🛠️ Technology Stack

- **Core:** JavaScript, React
- **Styling:** CSS, Tailwind CSS _(Optional but recommended)_
- **Data:** Free Movie Database API _(e.g., OMDB, TMDB, TVMaze)_
- **TVMaze Doc:** [API](https://www.tvmaze.com/api)

---

## 📋 Features & Requirements

### 1. Home Page

The Home Page serves as the landing page and must include the following sections:

#### Navbar

- Application logo or brand name.
- Navigation links.
- A prominent button/link to navigate to the **Movie Listing Page**.

#### Hero Banner

A visually attractive section to hook the user. It must include:

- A movie-related background image or gradient.
- Application title/heading.
- A short, engaging description.
- A Call-To-Action (CTA) button navigating to the **Movie Listing Page**.

**📐 UI Wireframe Example:**

```text
╭──────────────────────────────────────────────────────╮
│  🎬 MovieExplorer                        [ Movies ]  │
├──────────────────────────────────────────────────────┤
│                                                      │
│                 DISCOVER MOVIES                      │
│                                                      │
│        Explore and discover your favorite            │
│        movies from around the world.                 │
│                                                      │
│                 [   Explore Now ]                    │
│                                                      │
╰──────────────────────────────────────────────────────╯
```

#### Footer

- Application name.
- Copyright information (e.g., `© 2026 MovieExplorer`).
- Optional social media or GitHub links.

---

### 2. Movie Listing Page

Create a dedicated page where users can browse and search for movies.

#### Search Functionality

- Include a prominent search bar at the top of the page.
- Users must be able to search by **movie title**.
- The movie grid should dynamically update based on the search query.

** UI Wireframe Example:**

```text
╭──────────────────────────────────────────────────────╮
│  🔍 Search for a movie...                            │
╰──────────────────────────────────────────────────────╯
```

### Search Shows

**Endpoint:** `GET /search/shows?q=:query`

**Example:**

```bash
GET https://api.tvmaze.com/search/shows?q=girls
```

#### 🌐 API Integration & State Management

Fetch movie data from your chosen **Free Movie Database API**.

#### 🎬 Movie Cards

Display movies using reusable Card components. Each card must include:

- Movie poster image.
- Movie title/name.
- Release year/date.
- Rating (e.g., ⭐ 8.5).
- A `See Details` button.

** UI Wireframe Example:**

```text
╭─────────────────────╮
│                     │
│       Poster        │
│                     │
├─────────────────────┤
│  Movie Title        │
│  ⭐ 8.5  •  📅2024 │
│                     │
│  [ See Details ]    │
╰─────────────────────╯
```

> **Requirement:** Cards must be displayed using a **responsive CSS Grid or Flexbox layout**.

---

### All Shows/Movie

**Endpoint:**  
`GET /shows`

**Example:**

```bash
GET https://api.tvmaze.com/shows
```

**Description:**  
Fetch all available TV shows.

### 🎞️ 3. Movie Details Modal

When a user clicks the **See Details** button, open a modal overlay displaying in-depth information about the selected movie.

**Modal Contents:**

- Movie backdrop image or large poster.
- Movie title.
- Overview / Summary.
- Rating and Release date.
- Any additional relevant info from the API (e.g., Genre, Director).

** UI Wireframe Example:**

```text
╭──────────────────────────────────────────────╮
│                                      [ ✕ ]   │
├──────────────────────────────────────────────┤
│                                              │
│               MOVIE BACKDROP                 │
│                                              │
├──────────────────────────────────────────────┤
│  Movie Title                                 │
│  ⭐ Rating: 8.5   |   📅 Release: 2024      │
│                                              │
│  Overview:                                   │
│  Movie description goes here...              │
│                                              │
│                              [ ❌ Close ]    │
╰──────────────────────────────────────────────╯
```

**Interaction Requirements:**

- Must be closable via the `✕` (Close) button.
- _Optional:_ Closable by clicking outside the modal (on the backdrop).

---

## 📱 Responsive Design & UX

The application must be fully responsive and provide a seamless experience across all devices:

- **Mobile:** Single column layout, stacked elements, touch-friendly buttons.
- **Desktop:** 3-4+ column grid for movie cards, optimized spacing.

---

## Submission Guidelines

Students must submit the following via the designated submission portal:

1.  **GitHub Repository Link** _(Ensure it is public and includes a `README.md`)_.
2.  **Live Deployment Link** _(e.g., Vercel, Netlify, GitHub Pages)_.

---

## License:

Copyright information © 2026 MovieExplorer. All rights reserved. Built by Md. Jahirul Islam.

<!-- ## Assignment Deadline: (2 Days)


* **60 Marks:** September 17, 2026, 11:59 PM
* **50 Marks:** September 18, 2026, 11:59 PM

---

## ⚠️ Plagiarism & AI Policy:

* **Zero Tolerance:** Plagiarism will result in **0 marks**.
* **No Copying:** Do not copy code from peers or online sources.
* **No AI Code:** Do not use AI generators. We actively run AI code detection tools.
* **Original Work:** All code must be 100% your own.



 -->

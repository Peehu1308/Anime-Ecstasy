🧑‍💻 Anime Ecstasy – React SPA for Anime Browsing
Anime Ecstasy is a modern, responsive, and high-performance Single Page Application (SPA) built with React + Vite, styled using Tailwind CSS, and powered by the Jikan API. It allows users to browse trending anime, view details, and manage a local watchlist using localStorage.

🔧 Key Features
🎴 Trending Anime Grid – Dynamic gallery with posters and titles

📄 Anime Detail View – Renders expanded information on click

➕ Watchlist Management – Add/remove anime (stored in localStorage)

🔄 Pagination Support – Load more content efficiently

📱 Responsive Design – Tailwind-powered UI for all screen sizes

⚙️ API Integration – Uses Jikan REST API with Axios

⚡ Blazing Fast – Built using Vite for optimized builds and fast HMR

🧱 Stack & Tooling
Technology	Role
React + Vite	Frontend framework & bundler
Tailwind CSS	Utility-first CSS styling
Axios	HTTP client for API calls
Jikan API	Anime data source
LocalStorage	Persistent watchlist
ESLint	Linting for code consistency
PostCSS	Tailwind preprocessing

📁 Project Structure
csharp
Copy
Edit
anime-ecstasy/
├── public/                  # Static assets (favicon, etc.)
├── src/
│   ├── assets/              # Images/media
│   ├── components/          # UI components (Card, Navbar, etc.)
│   ├── App.css              # Global styles
│   ├── App.jsx              # Main component
│   ├── index.css            # Tailwind + base styling
│   └── main.jsx             # React entry point
├── .env.dev                 # Environment variables (if needed)
├── .eslintrc.cjs            # ESLint config
├── index.html               # Root HTML template
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS config
├── vite.config.js           # Vite config
├── CONTRIBUTION.md          # Guidelines for contributors
├── README.md                # You're here :)
🚀 Getting Started (Local Dev)
bash
Copy
Edit
# Clone repo
git clone https://github.com/yourusername/anime-ecstasy.git
cd anime-ecstasy

# Install dependencies
npm install

# Start development server
npm run dev
Requires Node.js ≥ v16 and npm.

🧑‍💻 Contributing
We welcome all contributions! Before submitting a PR:

Fork the repo

Create a new branch (git checkout -b feature/my-feature)

Make changes

Run linter and test UI

Submit a PR and link to related issue (if any)

📌 Read CONTRIBUTION.md for detailed instructions

🌐 API Usage
This app fetches anime data using:

https://api.jikan.moe/v4/anime for trending and detailed info

Handles pagination and error states with basic fallbacks.

🧪 Testing
✅ Manual testing for now (no unit/integration tests yet).
You can test:

Watchlist persistence

Detail views rendering

Pagination working across API pages

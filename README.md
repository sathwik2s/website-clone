# Cogniq AI Website Clone

A complete clone of the Cogniq AI website (https://cogniqqai.com/) with a **light mode design** and full backend integration.

## 🎨 Features

- ✅ **Light Mode Design** - Clean white background with dark text
- ✅ **Responsive Layout** - Works on desktop, tablet, and mobile
- ✅ **Backend API Integration** - Content served from Express.js backend
- ✅ **Smooth Animations** - Framer Motion for scroll reveals and interactions
- ✅ **Modern Tech Stack** - React + Vite + Express.js
- ✅ **Premium UI/UX** - Glassmorphism effects, gradient accents, hover states

## 🚀 Tech Stack

### Frontend
- **React 18** - Component-based UI framework
- **Vite** - Lightning-fast build tool
- **Framer Motion** - Animation library
- **Lucide React** - Modern icon library
- **Vanilla CSS** - Custom styling with CSS variables

### Backend
- **Express.js** - RESTful API server
- **CORS** - Cross-origin resource sharing
- **Node.js** - JavaScript runtime

## 📁 Project Structure

```
clone website/
├── src/
│   ├── App.jsx          # Main React component
│   ├── App.css          # Component-specific styles
│   ├── index.css        # Global styles and CSS variables
│   └── main.jsx         # React entry point
├── server/
│   ├── index.js         # Express API server
│   └── package.json     # Server dependencies
├── index.html           # HTML template
└── package.json         # Frontend dependencies
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Install Frontend Dependencies
```bash
npm install
```

### 2. Install Backend Dependencies
```bash
cd server
npm install
cd ..
```

## ▶️ Running the Application

You need to run **both** the frontend and backend servers:

### Terminal 1: Start Backend Server
```bash
cd server
node index.js
```
Backend will run on: **http://localhost:5001**

### Terminal 2: Start Frontend Dev Server
```bash
npm run dev
```
Frontend will run on: **http://localhost:5173**

## 📡 API Endpoints

The backend provides the following REST API endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/hero` | GET | Hero section content |
| `/api/services` | GET | Services list |
| `/api/features` | GET | Features/Why Choose Us |
| `/api/process` | GET | Process steps |

### Example Response (`/api/hero`):
```json
{
  "badge": "Engineering the Next Generation",
  "title": "Building Intelligent, Scalable AI Solutions",
  "subtitle": "Your premier AI & Software engineering partner...",
  "primaryBtn": "Explore our services",
  "secondaryBtn": "Book a Strategy Call"
}
```

## 🎨 Design System

### Color Palette (Light Mode)
```css
--bg-dark: #ffffff          /* Main background */
--bg-card: #f3f4f6          /* Card backgrounds */
--text-primary: #111827     /* Primary text */
--text-secondary: #4b5563   /* Secondary text */
--accent-primary: #4f46e5   /* Brand purple */
--border-color: rgba(0, 0, 0, 0.1)
```

### Typography
- **Font Family**: Outfit (Google Fonts)
- **Hero Title**: 4.5rem, Bold
- **Section Titles**: 2.5rem, Bold
- **Body Text**: 1rem, Regular

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🔧 Customization

### Changing Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #your-color;
}
```

### Adding New API Endpoints
1. Add route in `server/index.js`
2. Update fetch calls in `src/App.jsx`

### Modifying Content
Edit the data objects in `server/index.js`:
- `HERO_CONTENT`
- `SERVICES`
- `FEATURES`
- `PROCESS`

## 📦 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🐛 Troubleshooting

### Port 5000 Already in Use
If you see "Port 5000 is already in use", the backend is configured to use port **5001** to avoid conflicts with macOS AirPlay.

### Backend Not Connecting
1. Ensure backend server is running (`node index.js` in server folder)
2. Check console for CORS errors
3. Verify API URL in `App.jsx` matches backend port (5001)

### Animations Not Working
Ensure `framer-motion` is installed:
```bash
npm install framer-motion
```

## 📄 License

This is a clone project for educational purposes.

## 👨‍💻 Development

Built with ❤️ using modern web technologies.

---

**Live URLs:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5001
# website-clone
# website-clone

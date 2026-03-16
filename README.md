# House Help Finder

A full-stack web platform that connects households with local domestic workers such as maids, cooks, drivers, babysitters, and cleaners. The platform enables homeowners to find trusted help for daily household tasks, while creating employment opportunities for domestic workers.

---

## Live Demo

| Platform | URL |
|----------|-----|
| Frontend | [househelpfinder.vercel.app](https://househelpfinder.vercel.app) |
| Backend API | [househelpfinder-1.onrender.com](https://househelpfinder-1.onrender.com) |

---

## Features

- Worker registration with full profile — name, service type, experience, city, salary, availability
- Search and filter workers by service type, city, area, and availability
- Individual worker profile pages with contact options (call and WhatsApp)
- Responsive design with full mobile support and hamburger navigation
- Dark mode and light mode toggle with localStorage persistence
- Contact form and FAQ page
- About page with platform stats and mission
- Custom 404 Not Found page
- JWT-based user authentication (register and login)
- RESTful backend API with pagination and filtering
- Soft delete for workers (admin only)
- MongoDB Atlas cloud database
- Deployed frontend on Vercel, backend on Render

---

## Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Tailwind CSS | Styling |
| React Router DOM v6 | Client-side routing |
| Axios | HTTP requests |
| Context API | Theme (dark/light mode) state |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB | Database |
| Mongoose | ODM for MongoDB |
| JSON Web Token (JWT) | Authentication |
| bcryptjs | Password hashing |
| dotenv | Environment variable management |
| CORS | Cross-origin resource sharing |
| Nodemon | Development server |

### Deployment
| Service | Usage |
|---------|-------|
| Vercel | Frontend hosting |
| Render | Backend hosting |
| MongoDB Atlas | Cloud database |

---

## Project Structure

```
househelpfinder/
├── house-help-finder/              # Frontend (React)
│   ├── public/
│   │   ├── index.html
│   │   └── _redirects              # Netlify/Vercel routing fix
│   ├── src/
│   │   ├── api/
│   │   │   └── index.js            # Axios instance with JWT interceptor
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Spinner.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.js     # Dark/light mode context
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── RegisterSuccess.jsx
│   │   │   ├── WorkerDetail.jsx
│   │   │   └── Workers.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   └── package.json
│
└── house-help-finder-backend/      # Backend (Node + Express)
    ├── controllers/
    │   ├── authController.js
    │   └── workerController.js
    ├── middleware/
    │   └── auth.js                 # JWT protect & adminOnly middleware
    ├── models/
    │   ├── User.js
    │   └── Worker.js
    ├── routes/
    │   ├── auth.js
    │   └── workers.js
    ├── server.js
    ├── .env.example
    └── package.json
```

---

## Installation and Setup

### Prerequisites

- Node.js v18 or above
- npm v9 or above
- MongoDB Atlas account (or local MongoDB)
- Git

---

### Clone Repository

```bash
git clone https://github.com/hetsakariya0111-gi/househelpfinder.git
cd househelpfinder
```

---

### Frontend Setup

```bash
cd house-help-finder
npm install
```

Create a `.env` file in the `house-help-finder` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm start
```

The frontend runs at `http://localhost:3000`

---

### Backend Setup

```bash
cd house-help-finder-backend
npm install
```

Create a `.env` file in the `house-help-finder-backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/househelpfinder
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Start the development server:

```bash
npm run dev
```

The backend runs at `http://localhost:5000`

---

## Environment Variables

### Backend

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB Atlas connection string | `mongodb+srv://...` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Frontend

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_URL` | Backend API base URL | `https://househelpfinder-1.onrender.com/api` |

---

## API Documentation

### Base URL

```
https://househelpfinder-1.onrender.com/api
```

---

### Health Check

```
GET /api/health
```

**Response:**
```json
{
  "status": "ok",
  "message": "API is running"
}
```

---

### Authentication Endpoints

#### Register User

```
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "Het Sakariya",
  "email": "het@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64abc123...",
    "name": "Het Sakariya",
    "email": "het@example.com",
    "role": "user"
  }
}
```

---

#### Login User

```
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "het@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "64abc123...",
    "name": "Het Sakariya",
    "email": "het@example.com",
    "role": "user"
  }
}
```

---

#### Get Current User (Protected)

```
GET /api/auth/me
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "64abc123...",
    "name": "Het Sakariya",
    "email": "het@example.com",
    "role": "user"
  }
}
```

---

### Worker Endpoints

#### Get All Workers

```
GET /api/workers
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `serviceType` | string | Filter by role (maid, cook, driver, etc.) |
| `city` | string | Filter by city or area |
| `experience` | string | Filter by experience level |
| `availability` | string | Filter by availability |
| `page` | number | Page number (default: 1) |
| `limit` | number | Results per page (default: 12) |

**Response:**
```json
{
  "success": true,
  "total": 30,
  "page": 1,
  "pages": 3,
  "workers": [
    {
      "_id": "64abc123...",
      "name": "Priya Sharma",
      "phone": "+919876543210",
      "serviceType": "maid",
      "experience": "3-5 years",
      "city": "Mumbai",
      "area": "Andheri West",
      "expectedSalary": 9000,
      "availability": "full-time",
      "about": "Experienced in full household cleaning...",
      "rating": 5,
      "isActive": true,
      "createdAt": "2024-01-01T00:00:00.000Z"
    }
  ]
}
```

---

#### Get Worker by ID

```
GET /api/workers/:id
```

**Response:**
```json
{
  "success": true,
  "worker": {
    "_id": "64abc123...",
    "name": "Priya Sharma",
    "serviceType": "maid",
    "city": "Mumbai",
    "expectedSalary": 9000
  }
}
```

---

#### Register Worker

```
POST /api/workers
```

**Request Body:**
```json
{
  "name": "Priya Sharma",
  "phone": "+919876543210",
  "serviceType": "maid",
  "experience": "3-5 years",
  "city": "Mumbai",
  "area": "Andheri West",
  "expectedSalary": 9000,
  "availability": "full-time",
  "about": "Experienced in full household cleaning."
}
```

**Response:**
```json
{
  "success": true,
  "worker": {
    "_id": "64abc123...",
    "name": "Priya Sharma",
    "isActive": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

#### Update Worker (Protected)

```
PUT /api/workers/:id
Authorization: Bearer <token>
```

---

#### Delete Worker (Admin Only)

```
DELETE /api/workers/:id
Authorization: Bearer <token>
```

---

## Error Handling

The API returns consistent error responses in the following format:

```json
{
  "error": "Error message description"
}
```

| Status Code | Description |
|-------------|-------------|
| `200` | Success |
| `201` | Created successfully |
| `400` | Bad request / Validation error |
| `401` | Unauthorized — missing or invalid JWT |
| `403` | Forbidden — admin access required |
| `404` | Resource not found |
| `500` | Internal server error |

---

## Deployment

### Frontend — Vercel

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Set **Root Directory** to `house-help-finder`
4. Add environment variable: `REACT_APP_API_URL`
5. Deploy

Vercel auto-deploys on every push to `main` branch.

---

### Backend — Render

1. Push code to GitHub
2. Create a new **Web Service** on [Render](https://render.com)
3. Connect repository
4. Set **Root Directory** to `house-help-finder-backend`
5. Set **Build Command** to `npm install`
6. Set **Start Command** to `node server.js`
7. Add environment variables: `MONGODB_URI`, `JWT_SECRET`, `NODE_ENV`, `PORT`
8. Deploy

---

## Future Improvements

- Worker verification system with document upload
- Rating and review system for workers
- Real-time chat between households and workers
- Location-based search using Google Maps API
- Booking and scheduling system
- Admin dashboard for managing users and workers
- Image upload for worker profiles
- Push notifications for new job matches
- Mobile application (React Native)
- Multi-language support

---

## Contributing

Contributions are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request with a clear title and description

Please follow the existing commit message convention (`feat:`, `fix:`, `docs:`, `refactor:`).

---

## License

This project is licensed under the MIT License.

---

## Author

**Het Sakariya**

- GitHub: [hetsakariya0111-gi](https://github.com/hetsakariya0111-gi)
- Frontend: [househelpfinder.vercel.app](https://househelpfinder.vercel.app)
- Backend: [househelpfinder-1.onrender.com](https://househelpfinder-1.onrender.com)

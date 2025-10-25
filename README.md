# Task Manager - Full Stack Application

A modern, full-stack task management application built with React, Tailwind CSS, Node.js, Express, and PostgreSQL. Features include user authentication with JWT, complete task CRUD operations, and a responsive dashboard with task statistics.

## Features

- 🔐 **User Authentication**: Secure registration and login with JWT tokens
- ✅ **Task Management**: Create, read, update, and delete tasks
- 📊 **Dashboard Statistics**: Visual overview of task status and priorities
- 🎨 **Modern UI**: Clean and responsive design with Tailwind CSS
- 🔍 **Task Filtering**: Filter tasks by status (pending, in-progress, completed)
- 🏷️ **Priority Levels**: Organize tasks by low, medium, or high priority
- 📅 **Due Dates**: Set and track task deadlines
- 🔒 **Protected Routes**: Secure API endpoints with middleware authentication

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **React Router** for navigation
- **Axios** for API requests
- **React Icons** for UI icons

### Backend
- **Node.js** with Express
- **TypeScript** for type safety
- **PostgreSQL** database
- **JWT** for authentication
- **bcryptjs** for password hashing
- **express-validator** for input validation

## Project Structure

```
laughing-waddle/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.ts       # PostgreSQL connection
│   │   │   └── schema.sql        # Database schema
│   │   ├── controllers/
│   │   │   ├── authController.ts # Authentication logic
│   │   │   └── taskController.ts # Task CRUD operations
│   │   ├── middleware/
│   │   │   └── auth.ts           # JWT authentication middleware
│   │   ├── routes/
│   │   │   ├── authRoutes.ts     # Auth endpoints
│   │   │   └── taskRoutes.ts     # Task endpoints
│   │   ├── utils/
│   │   │   ├── jwt.ts            # JWT utilities
│   │   │   └── password.ts       # Password hashing
│   │   └── server.ts             # Express server setup
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PrivateRoute.tsx  # Protected route wrapper
│   │   │   ├── StatsCard.tsx     # Statistics display
│   │   │   ├── TaskForm.tsx      # Task create/edit form
│   │   │   └── TaskList.tsx      # Task list display
│   │   ├── contexts/
│   │   │   └── AuthContext.tsx   # Authentication context
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx     # Main dashboard
│   │   │   ├── Login.tsx         # Login page
│   │   │   └── Register.tsx      # Registration page
│   │   ├── services/
│   │   │   └── api.ts            # API client
│   │   ├── types/
│   │   │   └── index.ts          # TypeScript types
│   │   ├── App.tsx               # Main app component
│   │   ├── main.tsx              # Entry point
│   │   └── index.css             # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── .env.example
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Database Setup

1. Install PostgreSQL and create a database:

```bash
# Login to PostgreSQL
psql -U postgres

# Create database
CREATE DATABASE taskmanager;

# Exit psql
\q
```

2. Run the database schema:

```bash
# Navigate to backend directory
cd backend

# Run the schema
psql -U postgres -d taskmanager -f src/config/schema.sql
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:

```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=5432
DB_NAME=taskmanager
DB_USER=postgres
DB_PASSWORD=your_password_here

JWT_SECRET=your_jwt_secret_key_change_this_in_production
JWT_EXPIRES_IN=7d
```

5. Start the development server:

```bash
npm run dev
```

The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update the `.env` file if needed:

```env
VITE_API_URL=http://localhost:5000/api
```

5. Start the development server:

```bash
npm run dev
```

The frontend application will start on `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Tasks

- `GET /api/tasks` - Get all tasks (protected)
- `GET /api/tasks/stats` - Get task statistics (protected)
- `GET /api/tasks/:id` - Get single task (protected)
- `POST /api/tasks` - Create new task (protected)
- `PUT /api/tasks/:id` - Update task (protected)
- `DELETE /api/tasks/:id` - Delete task (protected)

## Usage

1. **Register**: Create a new account on the registration page
2. **Login**: Sign in with your credentials
3. **Dashboard**: View your task statistics and task list
4. **Create Task**: Click "New Task" to add a new task
5. **Edit Task**: Click the edit icon on any task to modify it
6. **Delete Task**: Click the trash icon to remove a task
7. **Filter**: Use the status dropdown to filter tasks

## Building for Production

### Backend

```bash
cd backend
npm run build
npm start
```

### Frontend

```bash
cd frontend
npm run build
```

The build files will be in the `frontend/dist` directory.

## Environment Variables

### Backend

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development |
| DB_HOST | Database host | localhost |
| DB_PORT | Database port | 5432 |
| DB_NAME | Database name | taskmanager |
| DB_USER | Database user | postgres |
| DB_PASSWORD | Database password | - |
| JWT_SECRET | JWT secret key | - |
| JWT_EXPIRES_IN | Token expiration | 7d |

### Frontend

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | http://localhost:5000/api |

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes with middleware
- Input validation with express-validator
- SQL injection prevention with parameterized queries
- CORS configuration for cross-origin requests

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue on the GitHub repository.

# Nalanda Institute College Management System

A comprehensive College Management System built with Node.js, Express, MongoDB, Next.js 14, and Tailwind CSS.

## Features

- **Student Management**: Complete student registration, profile management, and academic tracking
- **Faculty Management**: Faculty profiles, course assignments, and workload management
- **Admission System**: Online application processing, document verification, and approval workflow
- **Fee Management**: Fee tracking, payment processing, and receipt generation
- **Result Management**: Grade calculation, report card generation, and PDF export
- **Attendance System**: Daily attendance tracking with percentage calculation
- **Gallery Management**: Photo gallery with categorization and upload functionality
- **Authentication**: Role-based access control (Admin, Faculty, Student)
- **Responsive Design**: Modern UI built with Tailwind CSS

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- PDFKit for PDF generation
- Multer for file uploads
- Express Validator
- Helmet, CORS, Rate Limiting

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Axios
- React Hooks
- Lucide Icons

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd college-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```
MONGODB_URI=mongodb://localhost:27017/nalanda-institute
JWT_SECRET=your_jwt_secret_key_here
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

5. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd college-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

## Usage

### Access the Application

- **Frontend URL**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **API Documentation**: Check the routes in `src/routes/` directory

### Demo Credentials

Create initial admin user via API:
```bash
POST /api/auth/register
{
  "name": "Admin",
  "email": "admin@nalanda.edu",
  "password": "admin123",
  "role": "admin"
}
```

## Project Structure

### Backend
```
college-backend/
├── src/
│   ├── config/          # Database and environment configuration
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth, role validation, error handling
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API route definitions
│   ├── utils/           # JWT, PDF generation utilities
│   ├── app.js           # Express app configuration
│   └── server.js        # Server entry point
├── uploads/             # File upload directory
├── .env                 # Environment variables
└── package.json
```

### Frontend
```
college-frontend/
├── app/                 # Next.js app router pages
│   ├── admin/           # Admin panel
│   ├── faculty-panel/   # Faculty panel
│   └── [public pages]/  # Public website pages
├── components/          # Reusable components
├── lib/                 # API client and auth utilities
├── public/              # Static assets
├── middleware.ts        # Next.js middleware
└── package.json
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create student (Admin)
- `PUT /api/students/:id` - Update student (Admin)
- `DELETE /api/students/:id` - Delete student (Admin)

### Faculty
- `GET /api/faculty` - Get all faculty
- `GET /api/faculty/:id` - Get faculty by ID
- `POST /api/faculty` - Create faculty (Admin)
- `PUT /api/faculty/:id` - Update faculty (Admin)
- `DELETE /api/faculty/:id` - Delete faculty (Admin)

### Admissions
- `GET /api/admissions` - Get all admissions
- `GET /api/admissions/:id` - Get admission by ID
- `POST /api/admissions` - Create admission application
- `PATCH /api/admissions/:id/status` - Update admission status (Admin)

### Fees
- `GET /api/fees` - Get all fees
- `GET /api/fees/:id` - Get fee by ID
- `POST /api/fees` - Create fee record (Admin)
- `POST /api/fees/:id/pay` - Pay fee
- `GET /api/fees/student/:studentId` - Get student fees

### Results
- `GET /api/results` - Get all results
- `GET /api/results/:id` - Get result by ID
- `POST /api/results` - Create result (Admin/Faculty)
- `GET /api/results/:id/pdf` - Download result PDF
- `GET /api/results/student/:studentId` - Get student results

### Attendance
- `GET /api/attendance` - Get all attendance
- `GET /api/attendance/:id` - Get attendance by ID
- `POST /api/attendance` - Create attendance record
- `POST /api/attendance/student/:studentId/mark` - Mark attendance

### Gallery
- `GET /api/gallery` - Get all gallery
- `GET /api/gallery/featured` - Get featured images
- `POST /api/gallery` - Upload images (Admin/Faculty)
- `DELETE /api/gallery/:id` - Delete gallery (Admin/Faculty)

## Deployment

### Backend (Render)
The backend is configured for deployment on Render using `render.yaml`.

### Frontend (Vercel)
The frontend is configured for deployment on Vercel using `vercel.json`.

## Development

### Adding New Features
1. Create/Update models in `college-backend/src/models/`
2. Add controllers in `college-backend/src/controllers/`
3. Define routes in `college-backend/src/routes/`
4. Create frontend pages in `college-frontend/app/`
5. Add components in `college-frontend/components/`

### Running Tests
```bash
# Backend
cd college-backend
npm test

# Frontend
cd college-frontend
npm run lint
```

## License

ISC

## Support

For support, email info@nalanda.edu or open an issue in the repository.

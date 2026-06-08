Athenura Restaurant - Restaurant Management System
A full-stack Restaurant Website built with React (frontend) and designed for the MERN stack. Athenura Restaurant is an authentic Indian restaurant where customers can view the menu, add items to cart, place online orders, and reserve tables. Admins have a secure dashboard to manage menu items, orders, and reservations.

📋 Table of Contents
Project Overview
Features
Technology Stack
Implementation Status
Getting Started
Project Structure
Environment Variables
API Endpoints
Database Schema
Authentication Flow
Deployment
Future Enhancements
🎯 Project Overview
This project delivers a responsive, secure web application that helps restaurants in India manage their online presence, accept orders, and handle reservations efficiently. All prices are displayed in Indian Rupees (₹).

Goals
✅ Provide responsive UI for customers and admins
🔄 Implement secure authentication using Google Sign-In
✅ Offer CRUD for menus, orders, reservations
🔄 Provide checkout flow with payment integration
🔄 Deliver maintainable, deployable MERN codebase
✨ Features
Customer Features
✅ Browse menu by category
✅ Search and filter menu items
✅ Add to cart with quantity management
✅ Checkout and place orders
✅ Table reservation system
🔄 Google Sign-In authentication
✅ User profile with order history
✅ Responsive design (mobile-first)
✅ Prices displayed in Indian Rupees (₹)
Admin Features
✅ Admin dashboard with analytics
✅ Manage menu items (CRUD)
✅ View and update orders
✅ Manage reservations
✅ View user list
✅ Sales analytics and charts
Additional Pages
✅ About page
✅ Contact page
✅ Gallery page
✅ Terms & Conditions
✅ Privacy Policy
🛠 Technology Stack
Frontend (✅ Fully Implemented)
Framework: React 18 with TypeScript
Build Tool: Vite
Routing: React Router v6
State Management: Context API (Auth & Cart)
Styling: Tailwind CSS
UI Components: Radix UI + shadcn/ui
Forms: React Hook Form + Zod validation
HTTP Client: TanStack Query (React Query)
Charts: Recharts
Icons: Lucide React
Authentication: @react-oauth/google (frontend ready)
Payment: Razorpay SDK (frontend ready)
Testing: Vitest + Testing Library
Backend (❌ Not Implemented)
Runtime: Node.js + Express.js
Database: MongoDB with Mongoose
Authentication: Google OAuth 2.0 + JWT
Email: SendGrid or Nodemailer
Payment: Razorpay integration
DevOps (🔄 Partial)
✅ Git version control
✅ ESLint configuration
✅ Testing setup (Vitest)
❌ CI/CD pipeline
❌ Docker containerization
📊 Implementation Status
✅ COMPLETED (Frontend)
1. UI/UX & Pages
 Landing/Home page with hero section
 Menu page with category filters
 Dish detail page
 Shopping cart (drawer)
 Checkout page
 Reservation page
 Login page (UI ready)
 User profile page
 Admin dashboard layout
 Admin orders management
 Admin reservations management
 Admin menu management
 Admin users list
 Admin analytics with charts
 About, Contact, Gallery pages
 Terms & Privacy pages
 404 Not Found page
 Responsive header with navigation
 Footer with links
2. State Management
 Auth Context (mock implementation)
 Cart Context with full functionality
 Cart persistence logic
3. Components
 Reusable UI components (shadcn/ui)
 Menu card component
 Cart drawer component
 Admin sidebar
 Form components with validation
4. Mock Data
 Menu items with categories
 Sample orders
 Sample reservations
 Sample users
 Gallery images
5. Frontend Integrations (Ready for Backend)
 Google OAuth (@react-oauth/google)
 Razorpay payment gateway
 Image upload UI with validation
 Environment variables setup
 Logout functionality in header and admin panel
🔄 IN PROGRESS / PARTIAL
Backend integration is required for full functionality. All frontend features are complete and ready for backend connection.

❌ NOT IMPLEMENTED (Backend Required)
1. Backend API
 Express.js server setup
 MongoDB connection
 Mongoose models (User, Menu, Order, Reservation)
 RESTful API endpoints
 Error handling middleware
 Request validation
 API documentation
2. Authentication Backend
 Google OAuth verification
 JWT generation and validation
 Auth middleware
 Role-based access control
 Session management
3. Database Operations
 User CRUD operations
 Menu CRUD operations
 Order management
 Reservation management
 Data validation
 Indexing for performance
4. Email Service
 SendGrid/Nodemailer setup
 Order confirmation emails
 Order status update emails
 Reservation confirmation emails
 Reservation status update emails
 Email templates
5. Payment Processing
 Razorpay API integration
 Payment webhook handling
 Order status updates
 Payment failure handling
 Refund processing
6. File Upload
 Image upload for menu items
 Cloudinary/S3 integration
 Image optimization
 File validation
7. Security
 HTTPS configuration
 CORS setup
 Rate limiting
 Input sanitization
 XSS protection
 CSRF protection
 Helmet.js security headers
8. Testing
 Backend unit tests
 Integration tests
 E2E tests
 API testing (Postman/Jest)
9. Deployment
 Backend deployment (Heroku/Railway/Render)
 Frontend deployment (Vercel/Netlify)
 Database hosting (MongoDB Atlas)
 Environment configuration
 Domain setup
 SSL certificate
10. DevOps
 Docker setup
 CI/CD pipeline
 Logging (Winston)
 Monitoring
 Backup strategy
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
npm or bun package manager
MongoDB (for backend)
Google OAuth credentials (for authentication)
Razorpay account (for payments)
Frontend Installation
# Clone the repository
git clone <repository-url>
cd restaurant-management-system

# Install dependencies
npm install
# or
bun install

# Run development server
npm run dev
# or
bun dev

# Build for production
npm run build
# or
bun run build

# Run tests
npm test
# or
bun test
The application will be available at http://localhost:8080

Backend Setup (To Be Implemented)
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your credentials

# Run development server
npm run dev

# Run in production
npm start
📁 Project Structure
restaurant-management-system/
├── public/
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/              # Images and static files
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn/ui components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── MenuCard.tsx
│   │   └── AdminSidebar.tsx
│   ├── context/            # React Context providers
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── data/               # Mock data
│   │   └── menuData.ts
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   │   ├── admin/         # Admin pages
│   │   ├── Index.tsx
│   │   ├── MenuPage.tsx
│   │   ├── CheckoutPage.tsx
│   │   └── ...
│   ├── test/               # Test files
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── backend/ (To be created)
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── utils/         # Helper functions
│   │   └── server.js      # Entry point
│   ├── tests/
│   ├── .env.example
│   └── package.json
├── .gitignore
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
🔐 Environment Variables
Frontend (.env)
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
VITE_RAZORPAY_KEY_ID=your-razorpay-key-id
Backend (.env) - To Be Created
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/restaurant

# Authentication
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
JWT_EXPIRE=7d

# Email
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=noreply@restaurant.com
FROM_NAME=Restaurant Name

# Payment
RAZORPAY_KEY_ID=your-razorpay-key-id
RAZORPAY_KEY_SECRET=your-razorpay-key-secret

# Frontend URL
CLIENT_URL=http://localhost:8080

# File Upload (Optional)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
🔌 API Endpoints
Authentication
POST   /api/auth/google          # Google Sign-In
POST   /api/auth/refresh          # Refresh JWT token
POST   /api/auth/logout           # Logout user
Menu
GET    /api/menu                  # Get all menu items
GET    /api/menu/:id              # Get single menu item
POST   /api/menu                  # Create menu item (admin)
PUT    /api/menu/:id              # Update menu item (admin)
DELETE /api/menu/:id              # Delete menu item (admin)
Orders
POST   /api/orders                # Create new order
GET    /api/orders                # Get orders (user: own, admin: all)
GET    /api/orders/:id            # Get single order
PUT    /api/orders/:id/status     # Update order status (admin)
DELETE /api/orders/:id            # Cancel order
Reservations
POST   /api/reservations          # Create reservation
GET    /api/reservations          # Get reservations (user: own, admin: all)
GET    /api/reservations/:id      # Get single reservation
PUT    /api/reservations/:id      # Update reservation (admin)
DELETE /api/reservations/:id      # Cancel reservation
Users
GET    /api/users/me              # Get current user profile
PUT    /api/users/me              # Update user profile
GET    /api/users                 # Get all users (admin)
GET    /api/users/:id             # Get user by ID (admin)
PUT    /api/users/:id/role        # Update user role (admin)
Analytics (Admin)
GET    /api/analytics/overview    # Dashboard overview stats
GET    /api/analytics/sales       # Sales data
GET    /api/analytics/popular     # Popular menu items
🗄 Database Schema
User Model
{
  _id: ObjectId,
  googleId: String,        // Google sub
  email: String,           // unique, required
  name: String,
  avatar: String,
  role: String,            // "user" | "admin"
  createdAt: Date,
  lastLogin: Date
}
Menu Model
{
  _id: ObjectId,
  name: String,            // required
  description: String,
  category: String,        // required
  price: Number,           // required (in ₹)
  imageUrl: String,
  isAvailable: Boolean,    // default: true
  ingredients: [String],
  createdAt: Date,
  updatedAt: Date
}
Order Model
{
  _id: ObjectId,
  userId: ObjectId,        // ref: User
  items: [{
    menuId: ObjectId,      // ref: Menu
    name: String,
    qty: Number,
    price: Number          // in ₹
  }],
  totalPrice: Number,      // in ₹
  contact: {
    name: String,
    phone: String,
    address: String
  },
  payment: {
    method: String,        // "COD" | "Razorpay"
    status: String,        // "pending" | "completed" | "failed"
    transactionId: String
  },
  status: String,          // "pending" | "preparing" | "ready" | "delivered" | "cancelled"
  createdAt: Date,
  updatedAt: Date
}
Reservation Model
{
  _id: ObjectId,
  userId: ObjectId,        // ref: User, nullable
  name: String,            // required
  phone: String,           // required
  email: String,
  guests: Number,          // required
  date: Date,              // required, future date
  time: String,            // required
  notes: String,
  status: String,          // "confirmed" | "cancelled" | "completed"
  createdAt: Date,
  updatedAt: Date
}
🔒 Authentication Flow
Google Sign-In Flow (To Be Implemented)
Frontend: User clicks "Sign in with Google"
Google: User authenticates and grants permission
Frontend: Receives id_token from Google
Frontend: Sends id_token to backend /api/auth/google
Backend: Verifies id_token with Google
Backend: Creates/updates user in database
Backend: Generates site JWT token
Backend: Returns JWT + user data
Frontend: Stores JWT (localStorage or httpOnly cookie)
Frontend: Includes JWT in subsequent API requests
Security Considerations
Use HTTPS in production
Verify Google token audience matches your client ID
Use httpOnly, secure cookies for JWT (preferred over localStorage)
Implement token refresh mechanism
Add rate limiting to prevent brute force
Sanitize all user inputs
Implement CORS properly
📧 Email Service (To Be Implemented)
Email Triggers
Order Placed

To: Customer
Subject: "Order Confirmation #ORDER_ID"
Content: Order details, items, total, estimated delivery
Order Status Changed

To: Customer
Subject: "Order #ORDER_ID - Status Update"
Content: New status, tracking info
Reservation Confirmed

To: Customer
Subject: "Reservation Confirmed"
Content: Date, time, guests, special notes
Reservation Status Changed

To: Customer
Subject: "Reservation Update"
Content: New status, cancellation reason if applicable
Email Provider Setup
Recommended: SendGrid (free tier: 100 emails/day)
Alternative: Nodemailer with Gmail SMTP
Use email templates with dynamic content
Implement email queue for reliability
🚀 Deployment
Frontend Deployment (Vercel/Netlify)
# Build the project
npm run build

# Deploy to Vercel
vercel --prod

# Or deploy to Netlify
netlify deploy --prod
Backend Deployment (Railway/Render/Heroku)
# Ensure all environment variables are set
# Deploy using platform CLI or Git integration
Database (MongoDB Atlas)
Create cluster on MongoDB Atlas
Whitelist IP addresses
Create database user
Get connection string
Add to backend .env
🔮 Future Enhancements
High Priority
 Real-time order tracking
 Push notifications
 Multiple payment gateways
 Loyalty points system
 Coupon/discount codes
 Order rating and reviews
Medium Priority
 Multi-language support (i18n)
 Dark mode
 Advanced search with filters
 Dietary preferences (vegan, gluten-free)
 Nutritional information
 Delivery time estimation
Low Priority
 Mobile app (React Native)
 Social media integration
 Live chat support
 Table QR code ordering
 Kitchen display system
 Inventory management
📝 Testing
Backend Testing (To Be Implemented)
# Run all tests
npm test

# Run specific test suite
npm test -- auth.test.js

# Run with coverage
npm run test:coverage
🤝 Contributing
Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
This project is licensed under the MIT License.

👥 Authors
Your Name - Initial work
🙏 Acknowledgments
shadcn/ui for beautiful UI components
Radix UI for accessible primitives
Tailwind CSS for styling
React community for excellent tools and libraries
📞 Support
For support, email support@restaurant.com or join our Slack channel.

🐛 Bug Reports
Please use the GitHub issue tracker to report bugs.

Note: This is currently a frontend-only implementation with mock data. Backend implementation is required for full functionality including authentication, database operations, payment processing, and email services.

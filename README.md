# ArgoValue - Rural Entrepreneurship Platform

A complete React application for supporting farmers to produce value-added agricultural products and promoting rural entrepreneurship.

## 🌾 Features

- **JWT Authentication** - Secure login/register with localStorage
- **Protected Routes** - Dashboard and profile accessible only to authenticated users
- **Product Management** - Add, view, and manage agricultural products
- **Training Programs** - Access expert-led courses
- **Community Forum** - Connect with fellow farmers
- **Responsive Design** - Works on mobile and desktop
- **Modern UI** - Clean green gradient design with smooth animations

## 📁 Folder Structure

```
argovalue/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   └── PrivateRoute.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Auth.css
│   │   ├── Dashboard.js
│   │   ├── Dashboard.css
│   │   ├── Products.js
│   │   ├── Products.css
│   │   ├── AddProduct.js
│   │   ├── AddProduct.css
│   │   ├── Training.js
│   │   ├── Training.css
│   │   ├── Community.js
│   │   ├── Community.css
│   │   ├── Profile.js
│   │   └── Profile.css
│   ├── services/
│   │   ├── api.js
│   │   ├── authService.js
│   │   └── productService.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd argovalue
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your backend API URL:
```
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🔐 Authentication Flow

1. **Register**: User creates account with name, email, and password
2. **Login**: User logs in with email and password
3. **JWT Token**: Token stored in localStorage
4. **Axios Interceptor**: Automatically attaches token to all API requests
5. **Protected Routes**: PrivateRoute component checks authentication
6. **Logout**: Clears token and redirects to login

## 🛣️ Routes

| Route | Component | Protected | Description |
|-------|-----------|-----------|-------------|
| `/` | Home | No | Landing page with hero section |
| `/login` | Login | No | User login |
| `/register` | Register | No | User registration |
| `/dashboard` | Dashboard | Yes | User dashboard with stats |
| `/products` | Products | No | View all products |
| `/add-product` | AddProduct | Yes | Add new product |
| `/training` | Training | Yes | Training programs |
| `/community` | Community | Yes | Community forum |
| `/profile` | Profile | Yes | User profile |

## 🎨 UI Components

### Navbar
- Dynamic navigation based on authentication status
- Shows Login/Register for guests
- Shows Dashboard, Products, Training, Community, Profile, Logout for authenticated users

### Hero Section (Home)
- Green gradient background
- Large heading and subtitle
- CTA buttons
- Farmer image on right side
- Feature cards below

### Forms
- Clean input fields with validation
- Error message display
- Loading states
- Responsive design

### Cards
- Product cards with hover effects
- Training cards with badges
- Discussion cards with avatars
- Stat cards with icons

## 🔧 API Integration

### Services

**authService.js**
- `register(userData)` - Register new user
- `login(credentials)` - Login user
- `logout()` - Logout user
- `getCurrentUser()` - Get current user from localStorage
- `isAuthenticated()` - Check if user is authenticated

**productService.js**
- `getAllProducts()` - Fetch all products
- `getProductById(id)` - Fetch single product
- `createProduct(productData)` - Create new product
- `updateProduct(id, productData)` - Update product
- `deleteProduct(id)` - Delete product

**api.js**
- Axios instance with base URL
- Request interceptor to attach JWT token
- Response interceptor to handle 401 errors

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Grid layouts adapt to screen size
- Navigation optimized for mobile

## 🚢 Deployment on Vercel

### Step 1: Prepare for Deployment

1. Build the project:
```bash
npm run build
```

2. Test the build locally:
```bash
npx serve -s build
```

### Step 2: Deploy to Vercel

**Option A: Using Vercel CLI**

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and deploy to production:
```bash
vercel --prod
```

**Option B: Using Vercel Dashboard**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Environment Variables: Add `REACT_APP_API_URL`
6. Click "Deploy"

### Step 3: Configure Environment Variables

In Vercel Dashboard:
1. Go to Project Settings
2. Navigate to Environment Variables
3. Add:
   - Key: `REACT_APP_API_URL`
   - Value: Your production API URL
4. Redeploy

### Example Deployed URL

```
https://argovalue.vercel.app
```

## 🔄 Application Workflow

1. **User visits homepage** → Sees hero section with features
2. **User clicks Register** → Fills form → Account created → Redirected to dashboard
3. **User logs in** → JWT token stored → Navbar updates → Access to protected routes
4. **User views products** → Sees all products in card layout
5. **User adds product** → Fills form → Product created → Redirected to products list
6. **User views training** → Sees available courses → Can enroll
7. **User visits community** → Sees discussions → Can participate
8. **User views profile** → Sees personal info and stats
9. **User logs out** → Token cleared → Redirected to login

## 🎯 Key Technologies

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with gradients and animations
- **localStorage** - JWT token storage

## 🔒 Security Features

- JWT token-based authentication
- Protected routes with PrivateRoute component
- Automatic token attachment via Axios interceptors
- 401 error handling with auto-logout
- Form validation
- Password minimum length requirement

## 📝 Notes

- Backend API is assumed to exist at the URL specified in `.env`
- Mock data is used in some components for demonstration
- Images use Unsplash for demo purposes
- All forms include basic validation
- Error handling implemented for API calls

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

Built with ❤️ for rural entrepreneurs

---

**Live Demo**: https://argovalue.vercel.app

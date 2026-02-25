# Role-Based Portal System - ArgoValue

## 🎯 Overview
The application now has completely separate portals for Admin and User roles with distinct login flows.

## 🚀 User Flow

### 1. Landing Page (/)
- Click "Get Started" or "Login" → Redirects to Role Selection

### 2. Role Selection (/role-selection)
Two options:
- **👑 Login as Admin** → `/admin-login`
- **👤 Login as User** → `/user-login`

### 3. Separate Login Portals

#### Admin Portal
- **Login**: `/admin-login`
- **Register**: `/admin-register`
- **Dashboard**: `/admin-dashboard`
- **Validation**: Only admin role can access

#### User Portal
- **Login**: `/user-login`
- **Register**: `/user-register`
- **Dashboard**: `/user-dashboard`
- **Validation**: Only user role can access

## 👑 Admin Capabilities

### Admin Dashboard Features:
✅ View system statistics (Total Users, Active Users, Total Products)
✅ **Edit user details** (Name, Phone, Location)
✅ Change user roles (User ↔ Admin)
✅ Delete users
✅ Access all sensitive data
✅ Full system control

### Admin Can Edit:
- User Name
- User Phone
- User Location
- User Role
- Delete users

### How to Edit Users:
1. Login as admin
2. Go to Admin Dashboard
3. Click "Edit" button next to any user
4. Modify Name, Phone, or Location
5. Click "Save" to update

## 👤 User Capabilities

### User Dashboard Features:
✅ View personal statistics
✅ Manage own products
✅ Add new products
✅ Access training programs
✅ Participate in community
✅ **Edit own profile only**
❌ Cannot access other users' data
❌ Cannot view sensitive information
❌ Cannot manage other users

### User Can Edit:
- Own Name
- Own Phone
- Own Location
- Own Products

## 🔐 Security & Separation

### Portal Separation:
- Admin login validates role = 'admin'
- User login validates role = 'user'
- Cross-portal access is blocked
- Separate dashboards for each role

### Access Control:
- Admin trying to use user portal → Redirected
- User trying to use admin portal → Redirected
- Unauthenticated users → Redirected to login

## 📁 New Files Created

### Pages:
- `RoleSelection.js` - Role selection page
- `AdminLogin.js` - Admin login portal
- `UserLogin.js` - User login portal
- `AdminRegister.js` - Admin registration
- `UserRegister.js` - User registration

### Styles:
- `RoleSelection.css` - Role selection styling
- Updated `Auth.css` - Auth pages styling
- Updated `AdminDashboard.css` - Edit buttons styling

## 🛣️ Complete Route Structure

```
/ (Home)
  ↓
/role-selection (Choose Role)
  ↓
  ├─→ /admin-login → /admin-dashboard (Admin Portal)
  │     ↓
  │   /admin-register
  │
  └─→ /user-login → /user-dashboard (User Portal)
        ↓
      /user-register
```

## 🎨 Visual Differences

### Admin Portal:
- 👑 Crown icon
- Yellow/Gold color scheme
- "Admin Dashboard" title
- User management table with edit capabilities

### User Portal:
- 👤 User icon
- Green color scheme
- "User Dashboard" title
- Personal stats and quick actions

## 🧪 Testing

### Test Admin Access:
1. Go to `/role-selection`
2. Click "Login as Admin"
3. Register with any email
4. Access admin dashboard
5. Try editing a user's details

### Test User Access:
1. Go to `/role-selection`
2. Click "Login as User"
3. Register with any email
4. Access user dashboard
5. Try editing own profile only

## 🔑 Key Features

1. **Role Selection on Entry** - Users choose their role before login
2. **Separate Portals** - Completely isolated admin and user experiences
3. **Admin User Management** - Edit, update, and delete user details
4. **User Self-Management** - Users can only edit their own data
5. **Access Control** - Strict role-based access validation
6. **Data Privacy** - Users cannot access sensitive system data

## 📊 Permissions Matrix

| Feature | Admin | User |
|---------|-------|------|
| View All Users | ✅ | ❌ |
| Edit Any User | ✅ | ❌ |
| Delete Users | ✅ | ❌ |
| Change Roles | ✅ | ❌ |
| View System Stats | ✅ | ❌ |
| Edit Own Profile | ✅ | ✅ |
| Manage Own Products | ✅ | ✅ |
| Access Training | ✅ | ✅ |
| Join Community | ✅ | ✅ |

---

**Status**: ✅ Fully Implemented
**Last Updated**: 2024

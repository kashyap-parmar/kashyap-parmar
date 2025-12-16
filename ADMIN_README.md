# Admin Panel Documentation

## 🎨 Overview

This admin panel is a complete UI/UX design system built for managing the portfolio content. It includes authentication, dashboard, project management, gallery, and settings modules.

## 📋 Features Implemented

### 1. **Authentication System**
- **Login Page** (`/admin`)
  - Email & password authentication
  - Demo credentials: `admin@example.com` / `admin123`
  - Protected routes with redirect logic
  - Remember me functionality
  - Password visibility toggle

### 2. **Dashboard** (`/admin/dashboard`)
- Statistics cards (Total Projects, Published, Drafts, Views)
- Charts (Bar chart for projects, Line chart for views)
- Recent activities timeline
- Quick action buttons
- Responsive grid layout

### 3. **Project Management**
- **List Projects** (`/admin/projects`)
  - Table view with pagination
  - Search and filter functionality
  - Status badges (Published/Draft)
  - Edit and delete actions
  - Featured star indicator
  
- **Create Project** (`/admin/projects/create`)
  - Basic information form
  - Rich text editor for content
  - Image uploader for thumbnail
  - Technology stack input
  - Live URL and GitHub URL fields
  - Featured toggle
  
- **Edit Project** (`/admin/projects/[id]/edit`)
  - Pre-filled form with existing data
  - Same fields as create page

### 4. **Gallery** (`/admin/gallery`)
- Grid view of images
- Upload modal with image uploader
- Preview modal
- Delete confirmation
- Category organization
- Upload date tracking

### 5. **Settings**
- **Profile** (`/admin/settings/profile`)
  - Avatar upload
  - Personal information (name, email, phone, location)
  - Bio textarea
  - Change password section
  
- **Social Links** (`/admin/settings/social`)
  - Links for GitHub, LinkedIn, Twitter, Instagram, YouTube, Facebook
  - Live preview of social links
  
- **Theme** (`/admin/settings/theme`)
  - Light/Dark/System mode toggle
  - Primary color display
  - Theme preview cards

## 🧩 Reusable Components

All components are located in `/src/components/admin/` and exported from `/src/components/index.js`:

### Form Components
- `AdminButton` - Multi-variant button with loading state
- `AdminInput` - Text input with label, icon, and validation
- `AdminTextarea` - Multi-line text input
- `AdminSelect` - Dropdown select with options
- `AdminImageUploader` - Drag & drop image upload
- `AdminRichTextEditor` - WYSIWYG editor using react-quill

### UI Components
- `AdminCard` - Container with optional hover effect
- `AdminModal` - Popup dialog with header and footer
- `AdminTable` - Data table with custom columns
- `AdminPagination` - Page navigation
- `AdminBadge` - Status indicators
- `AdminAlert` - Notification banners
- `AdminBreadcrumb` - Page navigation trail
- `AdminStatCard` - Dashboard statistics card
- `AdminEmptyState` - No data placeholder

### Layout Components
- `AdminSidebar` - Collapsible navigation sidebar
- `AdminHeader` - Top bar with theme toggle and logout
- `AdminLayout` - Main wrapper with authentication check

## 🎨 Design System

### Colors
- **Primary**: `#2563eb` (Blue)
- **Success**: Green (#22c55e)
- **Warning**: Orange (#f97316)
- **Danger**: Red (#ef4444)
- **Dark Background**: `dark:bg-[#020817]/70`

### Theme Support
- Light mode (default)
- Dark mode (fully supported)
- System preference detection
- Consistent across all components

### Typography
- Font: Poppins (from existing theme)
- Responsive text sizes
- Consistent spacing

## 📁 File Structure

```
/app/src/
├── app/
│   └── admin/
│       ├── page.js                    # Login page
│       ├── layout.js                  # Auth provider wrapper
│       ├── dashboard/
│       │   └── page.js                # Dashboard
│       ├── projects/
│       │   ├── page.js                # Project list
│       │   ├── create/
│       │   │   └── page.js            # Create project
│       │   └── [id]/
│       │       └── edit/
│       │           └── page.js        # Edit project
│       ├── gallery/
│       │   └── page.js                # Gallery management
│       └── settings/
│           ├── profile/
│           │   └── page.js            # Profile settings
│           ├── social/
│           │   └── page.js            # Social links
│           └── theme/
│               └── page.js            # Theme settings
├── components/
│   └── admin/
│       ├── Button/
│       ├── Input/
│       ├── Textarea/
│       ├── Select/
│       ├── Card/
│       ├── Modal/
│       ├── Table/
│       ├── Pagination/
│       ├── Badge/
│       ├── Alert/
│       ├── Breadcrumb/
│       ├── StatCard/
│       ├── Sidebar/
│       ├── Header/
│       ├── ImageUploader/
│       ├── RichTextEditor/
│       ├── EmptyState/
│       └── AdminLayout/
├── contexts/
│   └── AuthContext.js                 # Authentication context
└── mock/
    └── adminData.js                   # Mock data for admin

```

## 🔐 Authentication Flow

1. User visits `/admin`
2. If not authenticated → Login page
3. On successful login → Redirect to `/admin/dashboard`
4. All `/admin/*` routes are protected
5. Logout clears auth and redirects to `/admin`

### Mock Credentials
- Email: `admin@example.com`
- Password: `admin123`

## 📦 Dependencies Used

- **recharts** - For dashboard charts
- **react-quill** - For rich text editing
- **@iconify/react** - For icons
- **next-themes** - For theme management
- **framer-motion** - For animations (existing)

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Touch-friendly interactions
- Responsive tables and grids

### Dark Mode Support
- Complete dark mode styling
- React Quill dark mode custom CSS
- Theme persistence
- Smooth transitions

### Data Management
- Mock data in `/src/mock/adminData.js`
- LocalStorage for auth state
- Ready for backend integration

### User Experience
- Loading states
- Success/error alerts
- Empty states
- Confirmation modals
- Breadcrumb navigation
- Hover effects
- Smooth animations

## 🚀 Getting Started

1. Navigate to `/admin` route
2. Login with demo credentials
3. Explore dashboard, projects, gallery, and settings
4. All data is currently mocked (no backend)

## 📝 Notes

- **NO BACKEND** - All functionality is UI only
- **NO API CALLS** - Mock data is used throughout
- **AUTHENTICATION** - Client-side only with localStorage
- **FILE UPLOADS** - Preview only, no actual file storage
- **RICH TEXT EDITOR** - Fully functional with dark mode support
- **CHARTS** - Recharts library with sample data

## 🎨 Customization

To customize the admin panel:

1. **Colors**: Update `tailwind.config.js` primary color
2. **Mock Data**: Edit `/src/mock/adminData.js`
3. **Components**: Modify component files in `/src/components/admin/`
4. **Layout**: Adjust sidebar menu in `Sidebar/index.js`
5. **Theme**: Add more theme options in settings page

## 🔒 Security Notes

- Authentication is mock implementation
- No sensitive data should be stored
- Ready for backend integration
- All forms have basic validation UI
- Password fields are properly masked

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Sidebar: Collapses on < 1024px

## ✅ Testing

All interactive elements include `data-testid` attributes for easy testing:
- Login form: `admin-login-form`, `email-input`, `password-input`
- Dashboard: `dashboard-title`, `stat-card-*`, `quick-action-*`
- Projects: `create-project-btn`, `edit-project-*`, `delete-project-*`
- Gallery: `upload-media-btn`, `view-image-*`, `delete-image-*`
- Settings: Various input and button testids

## 🎉 What's Included

✅ Complete Authentication UI
✅ Dashboard with Charts
✅ Full Project CRUD Interface
✅ Image Gallery Management
✅ Profile Settings
✅ Social Links Management
✅ Theme Customization
✅ 17+ Reusable Components
✅ Dark Mode Support
✅ Responsive Design
✅ Mock Data System
✅ Loading States
✅ Error Handling UI
✅ Confirmation Dialogs
✅ Empty States
✅ Breadcrumb Navigation

## 🚧 Ready for Backend Integration

The admin panel is structured to easily connect to a backend:

1. Replace mock data with API calls
2. Update AuthContext to use real authentication
3. Implement file upload handling
4. Add form validation with backend
5. Connect charts to real analytics data

---

**Built with**: Next.js 15, React 19, Tailwind CSS, Recharts, React Quill
**Theme**: Maintains existing portfolio design system
**Primary Color**: #2563eb (Blue)

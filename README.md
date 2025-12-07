# Resto - Restaurant Reservation Platform

A modern, full-stack Next.js application for restaurant reservations built with the latest Next.js 16, shadcn/ui, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4
- **Beautiful UI**: Extensive use of shadcn/ui components for a polished, accessible interface
- **Smooth Animations**: Framer Motion animations throughout the app
- **Responsive Design**: Mobile-first design with Sheet/Drawer navigation for mobile devices
- **Component Architecture**: Well-structured, reusable components for maintainability
- **Full Page Coverage**: All navigation links have corresponding pages
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: Custom 404 and error boundary pages

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── category/                 # Category pages
│   │   ├── desserts/            # Desserts category
│   │   ├── drinks/              # Drinks category
│   │   └── foods/               # Foods category
│   ├── chef/[id]/               # Individual chef page (dynamic)
│   ├── chefs/                   # Chefs listing page
│   ├── login/                   # Login page
│   ├── reservation/             # Reservation page
│   ├── restaurant/[id]/         # Individual restaurant page (dynamic)
│   ├── restaurants/             # Restaurants listing page
│   ├── services/                # Services page
│   ├── error.tsx                # Error boundary
│   ├── layout.tsx               # Root layout with Navbar
│   ├── loading.tsx              # Global loading state with skeletons
│   ├── not-found.tsx            # Custom 404 page
│   └── page.tsx                 # Home page
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   └── skeleton.tsx
│   ├── sections/                # Page sections
│   │   ├── expert-chefs.tsx
│   │   ├── hero-carousel.tsx
│   │   ├── near-you.tsx
│   │   ├── popular-restaurants.tsx
│   │   └── why-us.tsx
│   ├── navbar.tsx               # Main navigation with mobile drawer
│   └── restaurant-card.tsx      # Reusable restaurant card
├── lib/
│   └── utils.ts                 # Utility functions
└── public/
    └── assets/                  # Static assets (images, icons)

```

## 🎨 Design Features

- **Custom Theme**: Original color scheme maintained with custom Tailwind configuration
- **Animations**: Smooth page transitions and hover effects using Framer Motion
- **Mobile Navigation**: Sheet/Drawer component for mobile menu
- **Responsive Cards**: Interactive restaurant and chef cards with hover effects
- **Carousel**: Auto-playing hero carousel with smooth transitions

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 🌐 Available Pages

- **Home** (`/`) - Landing page with hero carousel, benefits, popular restaurants, nearby restaurants, and expert chefs
- **Categories**:
  - Foods (`/category/foods`)
  - Drinks (`/category/drinks`)
  - Desserts (`/category/desserts`)
- **Services** (`/services`) - Detailed service offerings
- **About** (`/about`) - Company information and values
- **Restaurants** (`/restaurants`) - All restaurants listing
- **Restaurant Detail** (`/restaurant/[id]`) - Individual restaurant page with booking
- **Chefs** (`/chefs`) - Expert chefs listing
- **Chef Detail** (`/chef/[id]`) - Individual chef profile
- **Login** (`/login`) - User authentication page
- **Reservation** (`/reservation`) - Table booking form

## 🎯 Key Components

### Navigation
- Desktop navigation with dropdown menus
- Mobile sheet/drawer navigation
- Sticky navbar with animations

### Sections
- **Hero Carousel**: Auto-playing restaurant showcase
- **Why Us**: Benefits cards with icons
- **Popular Restaurants**: Interactive expanding cards
- **Near You**: Location-based restaurant listing
- **Expert Chefs**: Tabbed chef profiles

### UI Components
All components are built with shadcn/ui and customized for the design:
- Buttons with variants (default, secondary, outline, ghost)
- Cards with hover effects
- Input fields with focus states
- Dropdown menus
- Sheet/Drawer for mobile
- Skeleton loaders

## 🚧 Development

The app uses Next.js 16 with Turbopack for fast development builds and hot module replacement.

### Environment Variables
No environment variables required for basic functionality. All data is currently mocked.

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

```css
Primary: #FDC886 (Warm orange)
Secondary: #5A4FCF (Purple)
Background: #FAFAFA (Light gray)
Foreground: #232631 (Dark blue-gray)
Muted: #656565 (Gray)
Star: #FFB800 (Gold)
```

## 📝 License

ISC

## 🙏 Acknowledgments

- Design inspired by modern restaurant booking platforms
- UI components from shadcn/ui
- Icons from Lucide React

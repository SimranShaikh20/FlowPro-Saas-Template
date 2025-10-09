# FlowPro - Modern SaaS Landing Page

A stunning, fully responsive SaaS landing page built with React, TypeScript, and Tailwind CSS. Features a dark theme with vibrant purple/blue gradients, glassmorphism effects, and smooth animations.

![FlowPro Landing Page](https://img.shields.io/badge/React-18.3-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### 🎨 Design
- **Dark Theme** with vibrant purple/blue gradient accents
- **Glassmorphism** card effects throughout
- **Smooth Animations** - fade-in, hover effects, and floating elements
- **Fully Responsive** - mobile (320px+), tablet (768px+), and desktop (1024px+)
- **Modern Typography** with semantic design system

### 📄 Complete Landing Page Sections
1. **Sticky Navigation** - Responsive navbar with mobile hamburger menu
2. **Hero Section** - Animated headline with dual CTAs and floating background effects
3. **Social Proof Stats** - 4 key metrics in glass-morphism cards
4. **Features Grid** - 8 feature cards with icons and hover effects
5. **How It Works** - 4-step process visualization
6. **Pricing Table** - 3 tiers with monthly/yearly toggle
7. **Testimonials** - 6 customer reviews with ratings
8. **FAQ Accordion** - 8 common questions with smooth expand/collapse
9. **Final CTA** - Conversion-focused call-to-action section
10. **Footer** - Complete with links, social media, and newsletter signup

### 🚀 Interactive Elements
- Sign-up modal with form validation
- Pricing plan toggle (monthly/yearly)
- Smooth scroll to sections
- All CTAs trigger sign-up dialog
- Toast notifications for user feedback

## 🛠️ Tech Stack

- **Framework:** React 18.3 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Forms:** React Hook Form with Zod validation
- **State Management:** React Query (TanStack Query)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080`

## 🎨 Customization

### Design System

All colors, gradients, and design tokens are defined in:
- `src/index.css` - CSS variables and design tokens
- `tailwind.config.ts` - Tailwind configuration

#### Changing Brand Colors

Edit `src/index.css`:

```css
:root {
  --primary: 263 70% 65%;        /* Main brand color */
  --accent: 280 80% 70%;         /* Accent color */
  --gradient-primary: linear-gradient(...);
  --gradient-accent: linear-gradient(...);
}
```

### Content Customization

- **Brand Name:** Search and replace "FlowPro" across components
- **Copy:** Update text in component files under `src/components/`
- **Images:** Replace hero image in `src/assets/hero-bg.jpg`
- **Features:** Modify `src/components/Features.tsx`
- **Pricing:** Update plans in `src/components/Pricing.tsx`
- **Testimonials:** Edit reviews in `src/components/Testimonials.tsx`

### Button Variants

Custom button variants are defined in `src/components/ui/button.tsx`:
- `hero` - Gradient primary CTA button
- `cta` - Accent gradient button
- `glass` - Glassmorphism transparent button

## 📁 Project Structure

```
src/
├── assets/           # Images and static files
├── components/       # React components
│   ├── ui/          # shadcn UI components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   └── ...
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
├── App.tsx          # Root component
├── index.css        # Global styles & design system
└── main.tsx         # Entry point
```

## 🚀 Deployment

### Deploy with Lovable (Recommended)
1. Visit [Lovable Project](https://lovable.dev/projects/5a5a2d58-7fae-479b-951b-85c5ce972d3f)
2. Click **Share → Publish**
3. Your site will be live instantly

### Deploy Manually

#### Build for Production
```bash
npm run build
```

#### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

#### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

#### Other Platforms
The `dist/` folder contains static files that can be deployed to:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 SEO Optimization

This project includes:
- Semantic HTML structure
- Meta tags for social sharing (Open Graph)
- Descriptive alt attributes on images
- Proper heading hierarchy
- Mobile-responsive design
- Fast loading times

## 🤝 Contributing

Built with [Lovable](https://lovable.dev) - the AI-powered web development platform.

### Development Workflow

1. **Edit in Lovable:** Visit the project URL and use AI prompts
2. **Edit Locally:** Clone repo, make changes, and push to GitHub
3. **Bidirectional Sync:** Changes sync automatically between Lovable and GitHub

## 📄 License

This project is licensed under the MIT License.

## 🔗 Links

- **Live Project:** [Lovable Project](https://lovable.dev/projects/5a5a2d58-7fae-479b-951b-85c5ce972d3f)
- **Documentation:** [Lovable Docs](https://docs.lovable.dev/)
- **Custom Domain Setup:** [Domain Guide](https://docs.lovable.dev/features/custom-domain)

## 💡 Tips

- Use **Visual Edits** in Lovable for quick design tweaks without using credits
- Leverage the design system - avoid inline styles
- All animations are CSS-based for optimal performance
- Mobile-first responsive design approach

---

Built with ❤️ using [Lovable](https://lovable.dev)

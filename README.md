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
git clone https://github.com/SimranShaikh20/FlowPro-Saas-Template

# Navigate to project directory
cd FlowPro-Saas-Template

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

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Other Platforms
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

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💡 Tips

- Use the design system - avoid inline styles
- All animations are CSS-based for optimal performance
- Mobile-first responsive design approach
- Leverage Tailwind's utility classes for consistent styling

## 🤝 Support

Need help or want to contribute? Feel free to:
- Open an issue on GitHub
- Submit a pull request
- Share your customization ideas

## 🔧 Extending the Template

### Adding Backend Features
To add backend functionality like user authentication, database, or API endpoints, consider integrating:
- **Supabase** - For authentication, database, and storage
- **Firebase** - For real-time database and auth
- **Custom API** - Build your own backend with Node.js/Express

### Adding Email Functionality
For newsletter signups and contact forms:
- **Resend** - Modern email API for developers
- **SendGrid** - Enterprise email service
- **EmailJS** - Client-side email service

### Payment Integration
For monetizing your SaaS:
- **Stripe** - Payment processing and subscriptions
- **Paddle** - All-in-one payment solution
- **PayPal** - Traditional payment gateway

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
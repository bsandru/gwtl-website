# GWTL Website

The official website for **Global Women TechLeaders** - a non-profit organization empowering women in technology since 2017.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Sanity](https://sanity.io/) (Headless CMS)
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 🏗️ Project Structure

```
gwtl-website/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/
│   │   ├── contact/
│   │   ├── for-companies/
│   │   ├── for-leaders/
│   │   ├── news/
│   │   └── programs/
│   ├── components/
│   │   ├── layout/          # Header, Footer
│   │   ├── sections/        # Page sections (Hero, CTA, etc.)
│   │   └── ui/              # Reusable UI components
│   └── lib/                 # Utilities
├── sanity/
│   ├── schemas/             # Content schemas
│   └── lib/                 # Sanity client
└── public/                  # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bsandru/gwtl-website.git
cd gwtl-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management (Sanity CMS)

### Setting up Sanity

1. Create a new project at [sanity.io](https://www.sanity.io/)
2. Copy your Project ID to `.env.local`
3. Run Sanity Studio locally or deploy it

### Content Types

- **Posts**: News articles and updates
- **Events**: Upcoming and past events
- **Team Members**: Leadership and Advisory Board
- **Partners**: Corporate and institutional partners

## 🎨 Customization

### Brand Colors

Theme tokens (colors, fonts, shadows, animations) live in the `@theme` block of `src/app/globals.css` (Tailwind v4, no JS config):

- **Brand**: `brand-teal` (#00A3A3) and `brand-navy` (#051D28), each with `-light` / `-dark` variants
- **Primary**: teal scale `primary-50` … `primary-950`, with `primary-500` = brand teal
- **Secondary**: slate scale `secondary-50` … `secondary-950` for text and neutrals
- **Fonts**: `font-sans` (DM Sans), `font-display` (Playfair Display), `font-brand` (Mulish, wordmark)

### Adding Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/layout/Header.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Docker

## 📄 License

This project is proprietary to Global Women TechLeaders.

## 🤝 Contributing

Internal contributions only. Please contact the team for access.

---

Built with ❤️ for the global women in tech community.

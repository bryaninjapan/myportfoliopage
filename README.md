# Personal Portfolio Website

A minimalist, modern single-page portfolio website built with Next.js (App Router), Tailwind CSS, Framer Motion, and Shadcn/ui.

## Features

- **Three Main Sections:**
  - **What Have I Done (我做了什么)**: Career milestones and investment achievements in a two-column layout with metric cards
  - **What Did I Think (我想了什么)**: Long-form philosophical content with editorial typography and callout boxes
  - **What Am I Working On (我正在做什么)**: Current projects showcased in engaging cards with status badges

- **Sticky Navigation**: Smooth scrolling navigation with active section highlighting
- **Responsive Design**: Fully responsive across all device sizes
- **Animations**: Smooth Framer Motion animations for enhanced user experience
- **Modern UI**: Clean, professional design using Shadcn/ui components

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Shadcn/ui** (UI components)
- **Radix UI** (underlying primitives)

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   └── ui/                 # Shadcn/ui components
│       ├── tabs.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── button.tsx
└── lib/
    └── utils.ts            # Utility functions
```

## Customization

### Content

Edit `app/page.tsx` to update:
- Career milestones and investment achievements
- Philosophical content and quotes
- Current projects and their descriptions

### Styling

- Global styles: `app/globals.css`
- Component styles: Tailwind classes in components
- Theme customization: Update CSS variables in `globals.css`

### Fonts

The project uses:
- **Geist Sans**: Primary font (clean, modern)
- **Playfair Display**: Editorial serif font for the "What Did I Think" section

Fonts can be customized in `app/layout.tsx`.

## License

MIT

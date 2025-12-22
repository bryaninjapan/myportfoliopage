# Personal Portfolio Website

A minimalist portfolio website with a retro diskette (floppy disk) theme, built with Next.js (App Router), TypeScript, and Tailwind CSS. Each project is displayed as a 3.5" floppy disk with interactive animations.

## Features

- **Diskette Theme**: Each project is displayed as a 3.5" floppy disk with realistic visual details
- **Theme Toggle**: Switch between dark and light modes with preferences saved in localStorage
- **Language Toggle**: Full Chinese/English support with synchronized text switching
- **Scalable Layout**: Works beautifully with 4 projects or 20-30 projects
- **Responsive Design**: Fully responsive across all device sizes
- **Easy Project Management**: Add or remove projects by editing a single data file
- **Minimalist Design**: Clean, retro-inspired interface inspired by soniclab.cc

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/ui** (UI components)
- **GitHub Pages** (deployment)

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
│   ├── page.tsx            # Main portfolio page with diskette gallery
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   └── ui/                 # UI components
│       ├── Diskette.tsx    # 3.5" floppy disk component
│       ├── ThemeToggle.tsx # Dark/light theme toggle
│       ├── LanguageToggle.tsx # Language switcher
│       └── button.tsx      # Button component
├── lib/
│   ├── projects.ts         # Project data (easy to add/remove projects)
│   ├── translations.ts     # Internationalization strings
│   └── utils.ts            # Utility functions
└── .github/
    └── workflows/
        └── deploy-github-pages.yml # GitHub Pages deployment
```

## Customization

### Adding/Removing Projects

Edit `lib/projects.ts` to add or remove projects. See `PROJECTS_README.md` for detailed instructions.

Each project requires:
- `id`: Unique identifier
- `name`: Object with `zh` (Chinese) and `en` (English) names
- `link`: Project URL
- `category`: Optional (e.g., "tools", "archive")
- `year`: Optional year to display on diskette

### Styling

- Global styles: `app/globals.css`
- Theme colors: CSS variables automatically adjust for dark/light mode
- Diskette appearance: Customize in `components/ui/Diskette.tsx`

### Internationalization

Edit `lib/translations.ts` to update UI text in both Chinese and English.

### Deployment

The site is deployed to GitHub Pages. See `GITHUB_PAGES_SETUP.md` for deployment instructions.

## License

MIT

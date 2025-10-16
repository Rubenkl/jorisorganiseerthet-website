
# Joris Organiseert Het Website

## Website Structure

The website is a one-page design with the following sections:

1. **Hero Section** - Eye-catching introduction with a summer BBQ background image and main call-to-action buttons.
2. **Wat ik doe Section** - Introduction to Joris and his services for private events (friends, bachelor parties, family outings).
3. **Portfolio Section (Impressie)** - Showcase of previous successful events.
4. **Testimonials Section (Reviews)** - Feedback from satisfied clients.
5. **Contact Section** - Contact information and form.
6. **Footer** - Additional navigation and contact details.

The site also features floating WhatsApp and phone buttons for easy contact.

## Brand Guidelines

### Color Palette

- **Deep Teal (primary text)**: #004957 - Used for text and primary elements
- **Warm Orange (accent)**: #F5AB41 - Used for accents and highlights
- **Citrus Yellow (secondary accent)**: #F5D649 - Used for subtle highlights and hover states
- **Soft Cream (light background)**: #FDF5EC - Used for backgrounds
- **Midnight Teal (dark backdrop)**: #012E36 - Used for dark backgrounds

Additional happy colors for playful elements:
- **Happy Pink**: #FF6B9D
- **Playful Teal-Green**: #4ECDC4
- **Soft Mint Green**: #A8E6CF
- **Warm Coral**: #FFB347

### Typography

- **Headlines & Logo**: Poppins SemiBold
- **Body copy**: Poppins Regular
- **Small UI / Captions**: Poppins Medium

### Button Style

Rectangular with 8px radius corners:
- Primary buttons: Deep Teal background, Soft Cream text
- Secondary buttons: Warm Orange background, Soft Cream text
- Hover states: Buttons switch colors (Primary → Orange, Secondary → Teal)

## Target Audience

The website focuses on private events:
- Vriendenfeesten (Friends parties)
- Vrijgezellenfeesten (Bachelor/Bachelorette parties)
- Familie-uitjes (Family outings)
- Familiedagen (Family days)

## Contact Information

- **Phone/WhatsApp**: +31 6 37549012
- **Email**: info@jorisorganiseerthet.nl
- **Website**: jorisorganiseerthet.nl
- **Location**: Albergen

## Images Used

- **Homepage Background**: summer-bbq.png - A vibrant summer BBQ scene with string lights
- **Logo**: joris-logo.png - The official Joris Organiseert Het logo

## Project URL

**URL**: https://lovable.dev/projects/ca0e7222-0ac3-41a0-a788-08bbed4dba6b

## Development

Follow these steps to run the project locally:

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server
npm run dev
```

## GitHub Pages Compatibility & Deployment

This project is configured to be deployed as a static single-page application on GitHub Pages. The following adjustments ensure smooth hosting:

- **Base path awareness** – `vite.config.ts`, the React router, and every static image reference rely on `import.meta.env.BASE_URL`. During local development the base is `/`, while production builds now default to the site root (`/`). You can still override the production base by setting the `VITE_BASE_PATH` environment variable when building (e.g. for previewing under a subdirectory).
- **Static asset paths** – All components now build their image URLs from `import.meta.env.BASE_URL`, so assets resolve correctly whether the site is hosted at the root domain or under a repository sub-path.
- **SPA fallback page** – After every build a `404.html` copy of the generated `index.html` is created automatically (see `scripts/create-404.js`). GitHub Pages serves this file for unknown routes, allowing React Router to hydrate the correct view.
- **Automatic deployment** – The workflow defined in `.github/workflows/deploy.yml` builds the project with a root-relative base path, uploads the `dist` folder as an artifact, and publishes it with `actions/deploy-pages`.

### Triggering a Deployment

1. Push to the `main` branch (or trigger the workflow manually via the GitHub UI).
2. GitHub Actions will execute the **Deploy static site to GitHub Pages** workflow.
3. The workflow runs `npm ci`, `npm run build`, copies `dist/index.html` to `dist/404.html`, and publishes the result to the GitHub Pages environment.
4. Once the workflow succeeds, GitHub Pages serves the site from `https://<your-username>.github.io/` by default (or the custom domain you have configured).

### Manual Build & Preview

```sh
# Build with the default root-relative base path
npm run build

# Serve the production build locally
npm run preview

# Build for a custom base path (e.g. to test a subdirectory deploy)
VITE_BASE_PATH=/preview/ npm run build
```

## Updating the Portfolio Section

`src/components/PortfolioSection.tsx` exposes two data structures:

- `packageItems` – the list of arrangement cards rendered at the top of the section. Add, remove, or edit objects in this array to change the textual content.
- `activityImages` – an array with the image filenames displayed beneath the packages. Add more entries that point to files in `public/images/` using the pattern ```${import.meta.env.BASE_URL}images/<your-image>```.

When adding new images, place the optimized files in `public/images/` to keep deployment simple.

## Technologies Used

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

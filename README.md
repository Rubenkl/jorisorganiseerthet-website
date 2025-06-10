
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

## How to Add a New Portfolio Item

To add a new portfolio item to the existing portfolio section:

1. Open `src/components/PortfolioSection.tsx`
2. Find the `portfolioItems` array
3. Add a new object to the array with the following structure:
```js
{
  title: "Your New Portfolio Item Title",
  description: "Description of the event or service provided",
  image: "/images/your-new-image.jpg" // Make sure to add the image to the images folder
}
```

## How to Create a Dedicated Portfolio Page

If you want to create a dedicated page for portfolio items with more details:

1. Create a new file in `src/pages/Portfolio.tsx`
2. Import the necessary components and create a portfolio page layout
3. Add the route to `src/App.tsx` by adding a new `<Route>` element
4. Add navigation links to the new page in the Navbar component

Example Portfolio page implementation:

```jsx
import React from 'react';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import FloatingButtons from '@/components/FloatingButtons';

const Portfolio = () => {
  // Portfolio items with more details
  const detailedPortfolioItems = [
    // Add detailed portfolio items here
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-16 bg-joris-cream">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-semibold text-joris-teal mb-8">Portfolio</h1>
          {/* Portfolio items layout */}
        </div>
      </section>
      <FooterSection />
      <FloatingButtons />
    </div>
  );
};

export default Portfolio;
```

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

## Technologies Used

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

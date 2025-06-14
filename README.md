# Pest Defenders London - Professional Pest Control Website

A comprehensive React.js website for a London-based pest control company, featuring detailed pest information, service areas, and professional services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Pest Library**: Comprehensive database of 15+ common London pests
- **Service Areas**: Coverage across all 32 London boroughs
- **Professional Services**: Residential, commercial, and emergency pest control
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Performance**: Optimized for speed and user experience

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: Custom CSS with CSS Variables
- **Build Tool**: Create React App
- **Deployment**: Ready for Vercel/Netlify

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── PestLibrary.tsx # Pest library main page
│   ├── PestCategory.tsx # Category pages
│   ├── PestDetail.tsx  # Individual pest pages
│   ├── ServiceAreas.tsx # Service areas main page
│   ├── ServiceAreaDetail.tsx # Individual area pages
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Emergency.tsx   # Emergency services
├── data/               # Data files
│   ├── pests.ts        # Pest database
│   └── serviceAreas.ts # Service areas data
├── styles/             # CSS files
│   ├── globals.css     # Global styles
│   ├── Header.css      # Header styles
│   └── Hero.css        # Hero section styles
└── App.tsx             # Main app component
```

## 🐛 Pest Library

The website includes detailed information on 15+ common London pests:

### Categories:
- **Rodents**: Rats, Mice
- **Insects**: Cockroaches, Ants, Carpet Beetles, Silverfish, Woodworm, Booklice
- **Bed Bugs**: Blood-feeding parasites
- **Wasps & Bees**: Stinging insects
- **Moths & Flies**: Clothes moths, House flies, Cluster flies
- **Spiders**: House spiders
- **Fleas & Mites**: Pet parasites

Each pest entry includes:
- Health risks and property damage
- Signs of infestation
- Prevention methods
- Professional treatment options
- Pricing and response times

## 🗺️ Service Areas

Complete coverage across London regions:

- **Central London**: Westminster, Camden
- **North London**: Hackney, Islington
- **South London**: Southwark, Lambeth, Greenwich, Wandsworth
- **East London**: Tower Hamlets, Newham
- **West London**: Hammersmith & Fulham, Kensington & Chelsea, Richmond

Each area includes:
- Local pest challenges
- Response times
- Pricing information
- Service highlights

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SenatorNetworks/PestPro.git
cd PestPro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming:

```css
:root {
  --forest: #004225;
  --primary: #2563EB;
  --lime: #22C55E;
  --navy: #1E40AF;
  /* ... more colors */
}
```

### Content
- Update pest data in `src/data/pests.ts`
- Modify service areas in `src/data/serviceAreas.ts`
- Customize company information in components

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1200px
- Desktop: > 1200px

## 🔧 Performance Features

- Lazy loading for images
- Optimized animations
- Efficient routing
- Minimal bundle size
- Fast loading times

## 📞 Contact Information

- **Phone**: 0800-772-3999
- **Email**: info@pestdefenderslondon.co.uk
- **Coverage**: All 32 London Boroughs
- **Hours**: 24/7 Emergency Service

## 📄 License

This project is proprietary software for Pest Defenders London.

## 🤝 Contributing

This is a private project. For any changes or updates, please contact the development team.

---

Built with ❤️ for professional pest control services in London.

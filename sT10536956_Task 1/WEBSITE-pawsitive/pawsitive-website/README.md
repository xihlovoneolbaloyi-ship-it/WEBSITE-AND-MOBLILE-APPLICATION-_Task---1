# Pawsitive – Marketing Website

Full marketing website for **Pawsitive Pet Academy**, matching the design system aesthetic from the provided design collage.

## Features

- **Home** – Hero, values, featured programs, CTA
- **Programs** – Full catalogue of 6 programs
- **Program detail** – Learning outcomes + enrolment CTA
- **About** – Story, principles, focus
- **Pricing** – Transparent fee cards
- **Contact** – Enquiry form
- **Enrol** – Request a place form (pre-fills program if coming from a detail page)
- **Success** – Confirmation after form submission

## Design language

- Deep forest green (`#1b4332`) primary
- Cream backgrounds
- Playfair Display for headings, Inter for body
- Soft shadows, rounded cards, pill buttons
- Mobile-responsive navigation

## Quick start

```bash
cd pawsitive-website
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

```
pawsitive-website/
├── public/logo.svg
├── src/
│   ├── components/   Header, Footer, Layout
│   ├── data/         programs.js
│   ├── pages/        Home, Programs, ProgramDetail, About, Pricing, Contact, Enrol, Success
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

Built with React + Vite + React Router.

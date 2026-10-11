# Pawsitive Pet Academy – Mobile App

React + Vite mobile web app that **exactly matches** the provided wireframes.

## Project structure

```
pawsitive-pet-academy/
├── assets/
│   ├── icon.svg
│   ├── logo.svg
│   └── splash.svg
├── src/
│   ├── components/
│   │   ├── BottomNav.jsx
│   │   ├── Header.jsx
│   │   └── CourseCard.jsx
│   ├── data/
│   │   └── courses.js
│   ├── screens/
│   │   ├── SplashScreen.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── CoursesScreen.jsx
│   │   ├── CourseDetailScreen.jsx
│   │   ├── SelectionScreen.jsx
│   │   ├── QuoteCalculatorScreen.jsx
│   │   ├── RequestQuoteScreen.jsx
│   │   ├── QuoteSubmittedScreen.jsx
│   │   ├── EnquiryScreen.jsx
│   │   ├── AboutScreen.jsx
│   │   ├── ContactScreen.jsx
│   │   └── MenuScreen.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Screens (matching wireframes)

| Route | Screen |
|-------|--------|
| `/` | Splash / Landing |
| `/home` | Home |
| `/courses` | Courses catalogue |
| `/courses/:id` | Course Details |
| `/selection` | Course Selection |
| `/discount` | Discount Calculator |
| `/quote` | Request a Quote |
| `/submitted` | Quote Submitted |
| `/enquiry` | Enquiry |
| `/about` | About Us |
| `/contact` | Contact |
| `/menu` | Menu (More) |

Bottom nav: Home · Courses · Discount · Quote · More

## Quick start

```bash
cd pawsitive-pet-academy
npm install
npm run dev
```

Open http://localhost:3000 (best viewed at ~390 px width or on a phone).

## Features

- Fully interactive multi-course selection
- Live discount calculation (5% for 2+ courses, 10% for 3+)
- React Router navigation
- Shared selection state across screens
- Pixel-matched styling to the original wireframes
- No backend required – pure front-end

## Design tokens

| Token | Value |
|-------|-------|
| Primary green | `#3d8b40` |
| Navy | `#1a2744` |
| Cream / Beige | `#f7f3eb` / `#f0ebe3` |

Built to match the original wireframe PDF exactly.

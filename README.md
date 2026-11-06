# Nutriguide — React (Lab Exercise 5 & 6)

Part 2 of the Nutriguide diet & nutrition tracker, rebuilt in React from the Part 1 HTML/CSS/JS module.
Every section of the Part 1 page is kept; the **meal log** is now a full **CRUD** module backed by **JSON Server** (`db.json`).

## Run it
```bash
npm install
npm start        # runs JSON Server (http://localhost:3001) + Vite (http://localhost:5173) together
```
Or separately: `npm run server` and `npm run dev`.
Put your `Sample_Video.mp4` in the `public/` folder for the Journal video.

If JSON Server is not running, the app falls back to **Local Storage** automatically (the dashboard badge shows which store is active).

## Requirement checklist
| Requirement | Where |
|---|---|
| Functional components, JSX | every file in `src/components` |
| `useState()` | `MealTracker`, `MealForm`, `Header`, `Features`, `Goals`, `Journal`, `EmailForm`, `HowItWorks` |
| Event handling | onClick / onChange / onSubmit / onMouseOver / onKeyDown throughout |
| Form handling + multiple inputs | `MealForm.jsx` (name, calories, protein, carbs, fat), `EmailForm.jsx` |
| Radio buttons | Diet type (Veg / Non-Veg / Vegan) in `MealForm.jsx` |
| Select dropdown | Meal type in `MealForm.jsx`, filter dropdown in `MealTracker.jsx` |
| Reusable components | `ui/Button`, `ui/Chip`, `ui/Field`, `ui/EmailForm`, `ui/Toast`, `MealItem`, charts |
| CSS styling | `src/index.css` (original Part 1 styles) + Tailwind |
| CRUD | `src/api/mealApi.js` + `MealTracker.jsx` (Create, Read, Update, Delete) |
| Bonus: Search | Live search box + meal-type filter in `MealTracker.jsx` |
| Responsive design | Tailwind responsive layout, mobile menu, resizable canvas charts |

## Database
`db.json` (JSON Server) → `GET/POST/PUT/DELETE /meals`.

## Mobile later
Wrap with **Capacitor**: `npm i @capacitor/core @capacitor/cli && npx cap init && npm run build && npx cap add android`.

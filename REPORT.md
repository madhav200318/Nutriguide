# Brief Report — Nutriguide React Application

**Domain & module:** Diet and nutrition tracking. Part 1 delivered a static page with a log-a-meal demo (HTML/CSS/JS, Tailwind, Canvas charts, Geolocation, Local Storage, File API, video, event handling). Part 2 re-implements the whole page in React and turns the meal log into a persistent CRUD module.

**Architecture:** The page is split into small functional components (`Header`, `Hero`, `HowItWorks`, `MealTracker`, `Features`, `Goals`, `Journal`, `Signup`, `Footer`) plus reusable UI pieces (`Button`, `Chip`, `Field`, `EmailForm`, `Toast`). Static copy lives in `data/constants.jsx`; database calls live in `api/mealApi.js`; custom hooks (`useCanvas`, `useToast`) hold reusable behaviour.

**State management:** `useState` holds the meal list, the record being edited, the search text and filter, form fields, menu/hover state and toasts. Totals, chart data, nutrient bars and the filtered list are *derived* from the meal list, so the UI always stays in sync — Part 1 had to update each element by hand.

**CRUD & database:** JSON Server serves `db.json`. *Create* – the form (text, number, select and radio inputs) or quick-add chips POST a record. *Read* – records load on start and render as cards. *Update* – Edit loads a record into the same form; Update sends a PUT. *Delete* – removes the record with confirmation (DELETE). *Bonus* – search filters by name/diet as you type, with a meal-type dropdown. If the server is offline, the same functions use Local Storage.

**Improvements over Part 1:** component-based structure, hook-based state, dynamic rendering, no manual DOM manipulation, persistent data, responsive canvas charts and easier maintenance.

**Mobile path:** Wrap the built app with Capacitor to produce an Android APK.

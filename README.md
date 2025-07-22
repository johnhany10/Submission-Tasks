# Full-Stack & UI Assessment Tasks – Weather Dashboard & Favorites Feature

This repository contains two separate frontend-focused tasks aimed at evaluating practical skills in real-world full-stack and UI development.

## 📁 Project Structure

- `/favorites-feature/` – Full-Stack Enhancement Task (Angular + ASP.NET Core)
- `/weather-dashboard/` – New Challenge in UI/UX + API Integration (React)

---

## 🧩 Part 1: Favorites Feature

**Objective:**  
Enhance an existing booking app by implementing a "Favorites" feature using Angular (Frontend) and .NET Core Web API (Backend).

**Key Features:**

- ✅ Users can mark/unmark items (e.g., listings/services) as favorites.
- ✅ Dedicated "Favorites" page to view all saved items.
- ✅ RESTful API endpoints using ASP.NET Core:
  - `POST /favorites/{itemId}` – Add item to favorites.
  - `DELETE /favorites/{itemId}` – Remove item.
  - `GET /favorites` – Get all favorites for the user.
- ✅ Uses mock user/items data (no authentication required).

**Frontend:** Angular  
**Backend:** ASP.NET Core Web API  

---

## 🌦️ Part 2: Weather Dashboard

**Objective:**  
Create a responsive single-page weather dashboard using React and an external weather API.

**Key Features:**

- ✅ Current weather: temperature, humidity, wind speed.
- ✅ 3-day forecast with icons.
- ✅ Responsive layout using Bootstarap.
- ✅ Built using React with functional components and hooks.
- ✅ Fetches data from [OpenWeatherMap API](https://openweathermap.org/api).

**What's included in the `/weather-dashboard` folder:**

- Source code for the React app.
- Instructions on how to run the app.
- A dedicated `README.md` inside the folder describing:
  - Setup steps
  - What was new to me and how I approached it

---

## 💡 Notes

- Each task is **self-contained** in its own directory.
- Please refer to the individual project READMEs for more detailed information on setup, design decisions, and challenges faced.

---

## ✅ Tech Stack Overview

| Task              | Frameworks / Tech Used              |
|-------------------|--------------------------------------|
| Favorites Feature | Angular 16+, .NET Core Web API       |
| Weather Dashboard | React (Vite), Bootstrap , OpenWeatherMap API |

---



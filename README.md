# React + Vite

# TravelTrucks 🚐

**TravelTrucks** is a frontend application for a camper rental company.  
The project allows users to browse available campers, filter them by different criteria, add favorites, and book a camper online.

Live Demo: [travel-tracks-front-back.vercel.app](https://travel-tracks-front-back.vercel.app)

---

## ✨ Features

- **Home Page**:  
  Welcome banner with a call-to-action to explore the catalog.

- **Catalog Page**:

  - Displays a list of available campers.
  - Filtering by location, vehicle type, and equipment (AC, kitchen, bathroom, etc.).
  - Add campers to **Favorites** (saved in local storage).
  - Pagination with "Load More" functionality.
  - Price formatting (e.g. `8000.00`).

- **Camper Details Page**:
  - Detailed description with gallery.
  - Camper specifications: transmission, engine, AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water.
  - Vehicle details: form, length, width, height, tank, consumption.
  - User reviews with 5-star rating system.
  - Booking form with success notification.

---

## 🛠️ Tech Stack

- **React + Vite** – frontend framework and bundler
- **Redux Toolkit** – state management
- **React Router** – navigation
- **Axios** – API requests
- **CSS Modules** – component styling

---

## 📡 API

The app uses a ready backend:  
[https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers)

- `GET /campers` – fetch all campers (with backend-side filtering)
- `GET /campers/:id` – fetch camper details

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/Orkneya/travel-trucks.git
cd travel-trucks
npm install

```

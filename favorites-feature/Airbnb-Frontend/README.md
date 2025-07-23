# Favorites Feature - Full-Stack Enhancement Task

## 🔍 Overview

This is a **Full-Stack enhancement** for a simple booking application (e.g., hotel/service booking). The task focuses on implementing a **"Favorites" feature**, where users can mark and view favorite items.

✅ Built using **Angular** for the frontend and **ASP.NET Core Web API** for the backend.

---

## 🎯 Task Scope

**Objective**: Enhance an existing booking app by adding a "Favorites" functionality.

### 📌 Features Implemented

- ✅ "Add to Favorites ❤️" button on each item card.
- ✅ A dedicated "Favorites" page showing all marked items.
- ✅ RESTful API endpoints to:
  - `POST` a favorite for a user.
  - `DELETE` a favorite.
  - `GET` all favorites for a user.
- ✅ Integration between Angular and ASP.NET Core API.

---

## 🧩 Technologies Used

### Frontend (Angular)
- Angular 16+
- Standalone Components
- Tailwind CSS
- Angular Routing and Services
- HTTP Client for API interaction

### Backend (ASP.NET Core)
- ASP.NET Core Web API

---
## 🎥 Live Demo

Watch a short walkthrough of the app in action:

[▶️ Click here to watch the demo video](https://drive.google.com/file/d/1zrOlGtVFmFLMOqCdSlMJhCEC6jrS7paY/view?usp=sharing)

> This video demonstrates how to register, log in, and interact with the Airbnb Clone app.



---
## 📁 Project Structure



---

## 🚀 Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [SQL Server Management Studio (SSMS)](https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms)

## 🔧 Setup Database

To set up the local database `AirbnbDB`, follow these steps:

1. Open the solution using **Visual Studio**.
2. Open the **Package Manager Console** from:
   ```
   Tools → NuGet Package Manager → Package Manager Console
   ```
3. Run the following commands to generate and apply the migration:
   ```powershell
   Add-Migration InitialCreate -Context AirbnbDBContext
   Update-Database -Context AirbnbDBContext
   ```

4. Once the migration is applied and the database is created, run the SQL script to seed the database:
   - Open `AirbnbDB_Script.sql` located in `/favorites-feature/` .
   - Connect to your local SQL Server (e.g., `(local)` or `.`).
   - Execute the script to populate the `AirbnbDB` database.

> 💡 Ensure your connection string in `appsettings.json` looks like this:
```json
"ConnectionStrings": {
  "WebApplication1ContextConnection": "Data Source=.;Initial Catalog=AirbnbDB;Integrated Security=True;Trust Server Certificate=True;"
}
```

---

## ▶️ Run the Project

1. Build the solution to restore dependencies.
2. Make sure the **startup project** is set to `Airbnb-backend`.
3. Press `F5` or click the **Start Debugging** button.

The API will launch at:

```
https://localhost:7200/swagger/index.html
```

This will open the **Swagger UI**, where you can:
- View all available endpoints.
- Test the API directly from your browser.
- Explore request and response formats.



## 🌐 Frontend Setup

### 📁 Folder Structure

Make sure you are inside the frontend project folder.

### ⚙️ Requirements

- ✅ [Node.js](https://nodejs.org/) 
- ✅ Angular CLI — if you don’t have it installed globally, run:

```bash
npm install -g @angular/cli
```

### 🚀 Run the Frontend App

```bash
# 1. Open a terminal inside the frontend folder
# 2. Install project dependencies
npm install

# 3. Start the Angular development server
ng serve
```

Once the app is running, open your browser and navigate to:

```
http://localhost:4200/
```

> ⚠️ Make sure the backend is running as well, so the frontend can fetch data from the API.

### 🔗 Connect to the Backend

The frontend communicates with the backend via HTTP requests sent to:

```
https://localhost:7200/
```

If you change the backend URL, make sure to update it in your Angular services or the `environment.ts` file accordingly.


## 👤 Start Using the App

After running both the backend and the frontend:

1. Go to the frontend in your browser: http://localhost:4200/

2. Register a new account using the signup form.

**OR**
use these demo credentials to log in:
```
Email: admin@email.com
Password: Admin@1
```

### 🚀 You Can Now:

- 🔍 Explore available listings  
- ❤️ Add listings to favorites  
- 📅 Make bookings  





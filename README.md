# To-Do Task Web Application

A simple **full-stack To-Do app** built with **React (frontend), Node.js/Express (backend), and PostgreSQL (database)**, all Dockerized. Users can add tasks, see the latest 5 tasks, and mark tasks as completed. The app is responsive and includes frontend and backend tests.

---


---

## 🛠 Tech Stack

- **Frontend:** React + Vite + JSX + CSS  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL  
- **Testing:** Jest, React Testing Library  
- **Containerization:** Docker + Docker Compose

---

## 🚀 Features

- Add a task with **title** and **description**  
- Display **latest 5 tasks**  
- Mark tasks as **Done** (completed tasks are removed)  
- Input validation with **error messages**  
- Responsive and colorful UI  
- Unit tests for frontend and backend  

---

## 📦 Getting Started

### Prerequisites

- Docker & Docker Compose installed  
- Node.js and npm (optional if using Docker)

---

### Run the App

1. Clone the repository:

```bash
git clone <repo-link>
cd todo-app

2. Start all services using Docker Compose:

```bash
docker compose up --build

Open your browser:

Frontend: http://localhost:5173

Backend API: http://localhost:4000/api/tasks

PostgreSQL database runs on port 5432.

##Running Tests

Backend Tests
```bash
cd backend
npm install
npm test

Runs Jest tests for the backend REST API
Test coverage included

Frontend Tests
```bash
cd frontend
npm install
npm test

Runs Jest + React Testing Library tests
TaskForm unit tests included



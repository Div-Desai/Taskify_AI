# 🚀 Taskify — Kanban-Based Task Management System

A scalable task management application built with **React + TypeScript**, designed to simulate real-world product architecture including authentication, modular state management, and a Kanban-style workflow.

---

## ✨ Overview

Taskify is built to go beyond a basic todo app.
It focuses on **how modern frontend applications are structured and scaled** — including clean separation of concerns, predictable state handling, and user-centric UI patterns.

---

## 🧠 Core Features

* 🔐 Authentication with JWT + session persistence
* 🛡️ Role-based access control (RBAC)
* 📋 Kanban-style task workflow (Create / Update / Delete)
* 💬 Comments system (extensible structure)
* 🔍 Search, filters & pagination via URL params
* ⚡ Optimistic UI updates for better UX
* 📄 Form validation using React Hook Form + Zod
* 🔄 Hybrid state management (Redux Toolkit + React Query)

---

## 🏗️ Tech Stack

| Category           | Tech                                         |
| ------------------ | -------------------------------------------- |
| Frontend           | React 18, TypeScript, Vite                   |
| State Management   | Redux Toolkit, React Query                   |
| Routing            | React Router v6 (nested + protected routes)  |
| Forms & Validation | React Hook Form, Zod                         |
| Styling            | Tailwind CSS                                 |
| Auth               | JWT-based (extensible to Firebase/Auth APIs) |

---

## 📁 Architecture

The project follows a **feature-driven and scalable structure**:

src/
│
├── features/        # Domain modules (tasks, auth, projects)
├── components/      # Shared reusable UI
├── routes/          # Route configs & guards
├── services/        # API layer
├── store/           # Redux store setup
├── hooks/           # Custom hooks
└── utils/           # Helpers

---

## ⚙️ Key Engineering Decisions

* **Redux Toolkit** → predictable global state (auth, UI)
* **React Query** → server state & caching
* **Separation of concerns** → API, UI, and logic are decoupled
* **URL-driven state** → filters & pagination are shareable
* **Optimistic updates** → improves perceived performance

## 📈 Future Improvements

* 🌐 Backend integration (Node / Express / Next.js API routes)
* 🧪 Testing (React Testing Library + Vitest)
* 📊 Analytics & activity tracking


## 🎯 What This Project Demonstrates

* Real-world React architecture
* State management at scale
* Clean, maintainable code practices
* Thoughtful UX decisions

⭐ If you found this useful, consider giving it a star!

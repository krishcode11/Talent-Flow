<div align="center">

# 🎯 TalentFlow

### AI-Powered Mock Interview Platform

Practice job interviews with a voice-based AI interviewer and get instant, detailed feedback to sharpen your skills.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Firebase](https://img.shields.io/badge/Firebase-12-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [API Routes](#-api-routes)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🧠 Overview

**TalentFlow** is a full-stack AI-powered mock interview platform that helps candidates prepare for job interviews. It uses a real-time **voice AI agent** (via VAPI) to simulate realistic interview conversations and **Google Gemini** to generate structured feedback across multiple evaluation categories.

Whether you're a junior dev prepping for your first interview or a senior engineer brushing up on behavioural questions — TalentFlow gives you a safe space to practice, fail, and improve.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🎙️ **Voice AI Interviews** | Real-time voice-based interviews powered by VAPI with Deepgram transcription and ElevenLabs TTS |
| 🤖 **AI Question Generation** | Automatically generates role-specific interview questions using Google Gemini |
| 📊 **Structured Feedback** | Get scored across 5 categories: Communication, Technical Knowledge, Problem-Solving, Cultural Fit, and Confidence |
| 🔐 **Authentication** | Full sign-up / sign-in flow with Firebase Auth and session cookies |
| 📝 **Interview History** | View your past interviews and take interviews created by other users |
| 🎨 **Dark Mode UI** | Sleek dark-themed interface with Mona Sans typography and custom animations |

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16** — App Router, Server Components, Server Actions
- **React 19** — Latest with concurrent features
- **TypeScript 5** — End-to-end type safety
- **Tailwind CSS 4** — Utility-first styling
- **shadcn/ui + Radix UI** — Accessible UI primitives
- **Sonner** — Toast notifications

### Backend & AI
- **Google Gemini (gemini-2.0-flash-001)** — Question generation + structured feedback via Vercel AI SDK
- **VAPI** — Voice AI agent orchestration
- **Deepgram Nova-2** — Speech-to-text transcription
- **ElevenLabs** — Text-to-speech (Sarah voice)
- **OpenAI GPT-4** — Interview conversation model (via VAPI)

### Infrastructure
- **Firebase Auth** — User authentication with session cookies
- **Firebase Firestore** — Database for users, interviews, and feedback
- **Firebase Admin SDK** — Server-side operations
- **Vercel** — Deployment (recommended)

---

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────┐
│                     Client (Browser)                 │
│  ┌──────────┐  ┌──────────────┐  ┌───────────────┐  │
│  │ Auth UI  │  │  Dashboard   │  │  Voice Agent  │  │
│  │ (Sign In │  │ (Interview   │  │  (VAPI SDK)   │  │
│  │ Sign Up) │  │  Cards)      │  │               │  │
│  └────┬─────┘  └──────┬───────┘  └───────┬───────┘  │
└───────┼───────────────┼──────────────────┼──────────┘
        │               │                  │
        ▼               ▼                  ▼
┌──────────────────────────────────────────────────────┐
│                  Next.js Server                      │
│  ┌──────────────┐  ┌────────────┐  ┌──────────────┐ │
│  │ Server       │  │ API Route  │  │ Server       │ │
│  │ Actions      │  │ /api/vapi/ │  │ Components   │ │
│  │ (auth,       │  │ generate   │  │ (SSR pages)  │ │
│  │  feedback)   │  │            │  │              │ │
│  └──────┬───────┘  └─────┬──────┘  └──────────────┘ │
└─────────┼────────────────┼──────────────────────────┘
          │                │
          ▼                ▼
┌─────────────────┐  ┌─────────────────┐
│ Firebase Admin  │  │  Google Gemini  │
│ (Auth + DB)     │  │  (AI SDK)       │
└─────────────────┘  └─────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, **pnpm**, or **bun**
- A **Firebase** project with Auth and Firestore enabled
- A **Google AI** API key (Gemini)
- A **VAPI** account with a workflow configured

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/talentflow.git
   cd talentflow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables) below).

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open the app**
   
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# ── Firebase Client SDK ──────────────────────────────
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=

# ── Firebase Admin SDK ───────────────────────────────
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=

# ── Google Gemini (AI SDK) ───────────────────────────
GOOGLE_GENERATIVE_AI_API_KEY=

# ── VAPI Voice AI ────────────────────────────────────
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
```

> **Note:** The `FIREBASE_ADMIN_PRIVATE_KEY` should include the full PEM string with `\n` newlines.

---

## 📁 Project Structure

```
talentflow/
├── app/
│   ├── api/
│   │   └── vapi/
│   │       └── generate/
│   │           └── route.ts          # POST: AI question generation endpoint
│   ├── auth/
│   │   ├── sign-in/                  # Sign-in page
│   │   ├── sign-up/                  # Sign-up page
│   │   └── layout.tsx                # Auth layout
│   ├── root/
│   │   ├── interview/
│   │   │   ├── [id]/
│   │   │   │   ├── feedback/         # Feedback results page
│   │   │   │   └── page.tsx          # Interview session page
│   │   │   └── page.tsx              # Interview generation page
│   │   ├── layout.tsx                # Authenticated layout
│   │   └── page.tsx                  # Dashboard (home)
│   ├── globals.css                   # Global styles + Tailwind
│   ├── layout.tsx                    # Root layout
│   └── page.tsx                      # Landing page
├── components/
│   ├── ui/                           # shadcn/ui components
│   ├── Agent.tsx                     # Voice AI agent component (VAPI)
│   ├── DisplayTechIcons.tsx          # Tech stack icon display
│   ├── FormField.tsx                 # Reusable form field
│   └── InterviewCard.tsx             # Interview card component
├── constants/
│   └── index.ts                      # App constants, VAPI config, schemas
├── firebase/
│   ├── admin.ts                      # Firebase Admin SDK init
│   └── client.ts                     # Firebase Client SDK init
├── lib/
│   ├── actions/
│   │   ├── auth.action.ts            # Auth server actions
│   │   └── general.action.ts         # Interview & feedback server actions
│   ├── utils.ts                      # Utility functions
│   └── vapi.sdk.ts                   # VAPI client instance
├── types/
│   └── index.d.ts                    # Global TypeScript type definitions
└── public/                           # Static assets (avatars, logos, covers)
```

---

## 🔌 API Routes

### `POST /api/vapi/generate`

Generates interview questions using Google Gemini and saves the interview to Firestore.

**Request Body:**
```json
{
  "type": "technical | behavioural | mixed",
  "role": "Frontend Developer",
  "level": "Junior | Mid | Senior",
  "techstack": "React, TypeScript, Next.js",
  "amount": 5,
  "userid": "firebase-user-id"
}
```

**Response:**
```json
{
  "success": true
}
```

---

## 📊 Feedback Categories

After completing an interview, the AI evaluates your performance across **5 categories** (scored 0–100):

| Category | What It Measures |
|---|---|
| 💬 Communication Skills | Clarity, articulation, structured responses |
| 💻 Technical Knowledge | Understanding of key concepts for the role |
| 🧩 Problem-Solving | Ability to analyze problems and propose solutions |
| 🤝 Cultural & Role Fit | Alignment with company values and job role |
| ✅ Confidence & Clarity | Confidence in responses, engagement, and clarity |

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is private and not licensed for public distribution.

---

<div align="center">

**Built with ❤️ using Next.js, Firebase, Google Gemini & VAPI**

</div>

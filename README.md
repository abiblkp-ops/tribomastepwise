# StepWise Triboma (Socratic AI Learning Assistant)

> **NextGen Digital Innovation: Crafting Creative Solutions for a Better Society**  
> Subtema: **Smart & Fun Education** | Logicodix 2026 Hackathon Competition

---

## 📌 Team Profile
* **Team Name:** Triboma
* * **Developers Name:** Abib Musa Chris Wardana, Bagas, Satria
* **Category:** Web Application
* **Repository Status:** Public

---

## 🎯 Problem Statement
Di era pesatnya perkembangan kecerdasan buatan, banyak pelajar menjadi bergantung pada AI instan (seperti sekadar *copy-paste* jawaban tanpa memahami proses logika di baliknya). Hal ini menurunkan kemampuan berpikir kritis (*critical thinking*) dan *problem-solving* siswa.

## 💡 Solution: StepWise Triboma
**StepWise Triboma** adalah platform pembelajaran berbasis AI Sokratik yang berfungsi sebagai **mentor yang memandu, bukan pemberi jawaban instan**. 

AI dalam platform ini diprogram secara khusus untuk:
1. **Tidak memberikan jawaban akhir** atau rumus jadi secara langsung.
2. Memecah satu permasalahan kompleks menjadi beberapa **langkah logis (*step-by-step scaffolding*)**.
3. Memberikan **petunjuk (*hints*) dan pertanyaan pemancing** jika siswa mengalami kesulitan.
4. Meminta siswa melakukan **rangkuman reflektif (*Reflective Summary*)** di akhir sesi untuk memastikan retensi pemahaman.

---

## 🚀 Key Features (MVP)
* **Guided Problem Breakdown:** Pembagian langkah pengerjaan soal secara logis.
* **Socratic Prompt Engineering:** AI menuntun logika siswa lewat pertanyaan pancingan.
* **Interactive Clarification Q&A:** Fitur tanya-jawab jika ada langkah yang kurang dipahami.
* **Reflective Summary:** Evaluasi pemahaman mandiri oleh siswa di akhir sesi.

---

## 🛠️ Technology Stack
* **Frontend:** React / Next.js / HTML-CSS-JS (Sesuai pilihan tim)
* **Backend & AI Integration:** Node.js / Python API Server + Gemini API (Google AI)
* **Deployment:** Vercel / Netlify

---

## ⚙️ Local Setup & Installation

```bash
# Clone repository
git clone [https://github.com/abibmusa1/stepwise-triboma.git](https://github.com/abibmusa1/stepwise-triboma.git)

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Run development server
npm run dev

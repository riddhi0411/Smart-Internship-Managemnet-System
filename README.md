# Smart Internship Matching System (SmartMatch)

A modern, responsive, and intelligent frontend web platform built with **React.js**, **Tailwind CSS**, **React Router**, and **Lucide React**. The system connects college students with high-affinity internship opportunities using NLP-based resume parsing and automated skill matching.

---

## 🌟 Key Architecture & Flow

The application follows the complete end-to-end lifecycle:
`Home / Landing Page ➔ Authentication (Login / Register) ➔ Role-Based Dashboard ➔ Project Modules`

### Three Dedicated Portals:
1. **Student Portal**
   - Profile Management (Personal, College, CGPA, Branch, Year).
   - Resume Upload (PDF / DOCX) with live progress and simulated OCR/NLP extraction.
   - Skill Taxonomy Editor (Technical Skills, Languages, Frameworks).
   - Personalized Recommendations with matching percentages (94%, 91%, 82%).
   - One-click Internship Application & Interactive Application Progress Timeline.
   - Saved / Bookmarked Internships.
   - Notification Inbox.

2. **Recruiter Portal**
   - Company Profile & Verified Recruiter status.
   - Post Internship Form (with Save Draft & Publish).
   - Manage Postings with applicant count indicators.
   - AI Student Matches: Ranked student profiles for each position.
   - Application Review: Pipeline progression (Shortlist, Schedule Interview, Selected).

3. **Admin Portal**
   - System Overview & Platform Growth Charts (Recharts).
   - Manage Students (Verify, Suspend, Activate).
   - Manage Recruiters (Verify, Approve, Reject).
   - Manage Internship Listings & Content Moderation.
   - Reports & Analytics (In-demand skills, domain share, PDF export simulation).
   - AI Model Tuning & Minimum Match Threshold configuration.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Open your terminal in this directory and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the URL printed in the terminal).

### 3. Build for Production
```bash
npm run build
```

---

## 🔑 Demo Access & Role Testing

For presentations, college project evaluations, or examiner testing:
- **Instant Demo Switcher**: Use the **"Demo Role"** pill in the top navigation bar to switch between Student, Recruiter, and Admin in one click.
- **Login Page Quick Buttons**: Click **Student**, **Recruiter**, or **Admin** to instantly sign in with pre-configured accounts:
  - **Student**: `priya.sharma@college.edu`
  - **Recruiter**: `vikram.sen@nexgen.com`
  - **Admin**: `admin@smartmatch.edu`
- **Sample Resumes**: In the *Upload Resume* section, click any of the 3 pre-built sample resumes (*Full-Stack*, *AI/ML*, *Cloud DevOps*) to test live parsing without needing a PDF file on hand.

---

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (custom blue & purple palette)
- **Routing**: React Router DOM v6 (protected routes with role-based authorization)
- **Icons**: Lucide React
- **Visualizations**: Recharts (Monthly growth, Skill distribution, In-demand skills)

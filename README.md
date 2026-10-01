# Quiz Builder

## Project Status

🚧 **Currently Under Development**

Quiz Builder is a frontend-based online quiz application developed as part of the Frontend Development Frameworks project. The core features have been implemented, while additional improvements and enhancements are planned for future development.

---

## 📌 Project Overview

Quiz Builder is a web-based application designed to provide a simple platform for creating, managing, participating in, and evaluating quizzes.

The application provides separate modules for **Creators** and **Participants**.

Creators can create quizzes with different types of questions, set time limits, add explanations, and preview their quizzes.

Participants can join quizzes using a unique quiz code, answer questions within the given time, submit their answers, and view their results and answer explanations.

The project uses **Local Storage** for storing authentication details, quizzes, attempts, answers, and results.

---

## 🎯 Problem Statement

Traditional quiz creation and participation can require separate tools for preparing questions, sharing quizzes, collecting responses, and evaluating results.

The Quiz Builder project aims to provide a single frontend application where users can:

- Create and manage quizzes
- Share quizzes using unique quiz codes
- Participate in quizzes
- Answer different types of questions
- Automatically calculate scores
- Review answers and explanations
- Preview quizzes before sharing them

---

## ✨ Key Features

### 🔐 Authentication

- User signup and login
- Creator and Participant roles
- User information stored using Local Storage
- Role-based navigation

### 👨‍💻 Creator Module

Creators can:

- Access a creator dashboard
- Create new quizzes
- Add quiz title, category, description, and time limit
- Add multiple questions
- Add MCQ questions
- Add True/False questions
- Add text-answer questions
- Add optional images to questions
- Add explanations for questions
- Define correct answers
- Generate unique quiz codes
- View created quizzes
- Edit/manage quizzes
- Preview and play their own quizzes
- View quiz results

### 👨‍🎓 Participant Module

Participants can:

- Join a quiz using a quiz code
- Enter their participant details
- Answer quiz questions
- Navigate between questions
- View quiz progress
- Enter text-based answers
- Submit the quiz
- Experience automatic submission when the timer ends
- View their score
- Review answers and explanations

### ⏱️ Quiz Features

- Timed quizzes
- Countdown timer
- Automatic submission when time expires
- Automatic scoring
- MCQ evaluation
- True/False evaluation
- Text-answer evaluation
- Multiple accepted text answers using `|`
- Answer review after submission
- Question explanations

### 🎨 User Interface

- Glow-in-the-dark neon theme
- Responsive layout
- CSS Grid and Flexbox
- Interactive cards and buttons
- Neon effects and animations
- Cute mascot illustrations
- Separate Creator and Participant experiences

---

## 🛠️ Technologies Used

- **HTML5** – Structure of web pages
- **CSS3** – Styling, layouts, animations, Grid and Flexbox
- **JavaScript** – Application logic, navigation, quiz functionality, validation, scoring and interactions
- **Local Storage** – Client-side data storage
- **Git** – Version control
- **GitHub** – Source code management and collaboration
- **Visual Studio Code** – Development environment

> This Review 1 implementation uses HTML, CSS and JavaScript without a backend framework.

---

## 📂 Project Structure

```text
Quiz-Builder-Review1/
│
├── Admin/
│   ├── create.html
│   ├── creator-results.html
│   ├── dashboard.html
│   ├── profile.html
│   └── quizzes.html
│
├── Authentication/
│   ├── index.html
│   ├── login.html
│   ├── role.html
│   └── signup.html
│
├── Shared/
│   ├── app.js
│   ├── storage.js
│   ├── styles.css
│   └── assets/
│       ├── mascot-astronaut.png
│       ├── mascot-jellyfish.png
│       ├── mascot-penguin.png
│       └── mascot-turtle.png
│
├── User/
│   ├── join.html
│   ├── play.html
│   └── result.html
│
├── index.html
├── test-seed.html
├── .gitignore
└── README.md
"# Quiz-Builder-Review1" 
"# Quiz-Builder" 

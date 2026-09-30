# Quiz Builder — Faculty Review 1 Version

A frontend-only Quiz Builder built to match the faculty Review-1 constraints.

## Faculty requirements covered
- HTML5, CSS3 and vanilla JavaScript only
- Admin/Creator and Participant/User modules
- CSS Grid/Flexbox responsive layout
- Signup and Login using Local Storage
- JavaScript navigation/redirection
- Creator quiz creation and management
- MCQ, True/False and Text Answer questions
- Optional image upload for questions (resized in browser)
- Question explanations shown after submission
- Quiz code generation and participant joining
- Timer with automatic submission
- Automated scoring and answer review
- Creator result viewing for quizzes created by that creator
- GitHub-ready static folder structure

## Run
Use VS Code Live Server and open `Authentication/index.html` (or `index.html`).

## Important prototype limitation
Data is stored in browser Local Storage, so accounts, quizzes and attempts are specific to the browser/origin. Cross-device sharing requires a backend/database, which is intentionally not added because Review 1 requires frontend-only implementation.

## Folder structure
Authentication / Admin / User / Shared


### Creator quiz preview
Creators can open **Your Quizzes → ▶ Play** to preview and play their own quiz. The resulting attempt is marked as a Creator Preview.
"# Quiz-Builder-Review1" 

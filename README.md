# Front-End Intern Test – EZ Labs

## 🚀 Project Overview
This is a responsive single-page **React.js** application created as part of the *Front-End Intern Test* for **EZ Labs**.  
It includes a simple **Contact Us** form that integrates with a backend API using **Axios**.  
All input fields are validated before submission.

---

## 🧩 Features
- 🧠 **Form Validation**
  - All fields (Name, Email, Phone, Message) are required.
  - Email format validation on the front end.
- 🔗 **API Integration**
  - Submits form data using `POST` request to the provided endpoint:
    ```
    https://vernanbackend.ezlab.in/api/contact-us/
    ```
- 📱 **Responsive Design**
  - Optimized for:
    - 480p (Mobile)
    - 720p (Tablet)
    - 1080p
    - iPad (2732×2048)
    - MacBook (1440×823)
- 💬 **Success Message**
  - Displays “Form Submitted” when API response is successful (HTTP 200).

---

## 🛠️ Tech Stack
- **React.js (Vite)**
- **Axios** (for API requests)
- **CSS** (for responsive styling)

---

## 📁 Folder Structure
frontend-test/
│── public/
│── src/
│ ├── components/
│ │ └── ContactForm.jsx
│ ├── pages/
│ │ └── Home.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│── index.html
│── package.json
│── vite.config.js



---

## ⚙️ Installation and Setup
Follow these steps to run the project locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/frontend-test.git
cd frontend-test
npm install
npm run dev


📬 API Example (for Postman)

POST → https://vernanbackend.ezlab.in/api/contact-us/

Body (JSON):

{
  "name": "Divyanshu Maurya",
  "email": "divyanshu@gmail.com",
  "phone": "9876543210",
  "message": "Hello, this is a test message!"
}


Expected Response:

Status: 200 OK
Message: Form Submitted

🧑‍💻 Developer

Name: Divyanshu Maurya
Role: Front-End Developer (Internship Test)
Tech: React, Vite, Axios, HTML, CSS

🏁 Final Notes

The project fulfills all the given requirements.

Front-end validations and API integration are implemented correctly.

UI is fully responsive and matches the provided Figma design.


---

### ✅ What to Do Now
1. Create a new file named **`README.md`** in your project root folder.  
2. Paste the above text inside it.  
3. Replace:
   - `your-username` → your GitHub username  
   - API example details (if needed)

---

Would you like me to write the **Git commands** next (for pushing this whole project to GitHub step-by-step)?

<img width="1440" height="900" alt="Screenshot 2025-11-11 at 4 11 36 PM" src="https://github.com/user-attachments/assets/3a8ca44a-bdcd-4407-8d23-368f424b0aae" />


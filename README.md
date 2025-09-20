# 🚀 QR Code Generator Web App (React)

![Project Badge](https://img.shields.io/badge/React-18-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.3-blueviolet)

A **React-based web application** for generating QR codes with authentication, legal policy pages, and a modular layout.  
The project is designed to be scalable, with **React Router** for navigation and **Tailwind CSS** for styling.

---

## 🚀 Features Implemented (So Far)

- **Routing (React Router v6)**
  - `Home Page` → `/`
  - `Login Page` → `/login`
  - `Signup Page` → `/signup`
  - `Terms & Conditions` → `/terms`
  - `Privacy Policy` → `/privacy`
  - `404 Page` → `*`

- **Authentication Forms**
  - Separate **Login** and **Signup** components
  - Google Auth placeholder link for future integration

- **Reusable Layout Components**
  - **Navbar** with navigation links
  - **Footer** with 4 columns (Product, Resources, Legal, Help)  
    - Links included: QR Code Generator, Plans, Blog, Support, Docs, FAQ, Terms, Privacy, Cookies Policy, Contact, etc.

- **UI**
  - Responsive design (works on Desktop & Mobile)
  - Clean 4-column footer layout
  - Placeholder content for Home/About/Legal pages

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── LoginForm.jsx
│   ├── SignupForm.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Terms.jsx
│   ├── Privacy.jsx
│   ├── NotFound.jsx
│
├── App.jsx
├── main.jsx


# 🛠️ Tech Stack
- **Frontend:** React 18, React Router DOM  
- **Styling:** Tailwind CSS (or plain CSS fallback)  
- **Auth:** Google OAuth (planned integration)  
- **Icons/Assets:** PNGs for social links  

# ⚙️ Setup Instructions
1. **Clone the repository**
git clone https://github.com/your-username/qr-code-app.git
cd qr-code-app

text

2. **Install dependencies**
npm install

text

3. **Start the development server**
npm run dev

text

4. **Open in browser**  
[http://localhost:5173/](http://localhost:5173/)

# 🔮 Next Steps (Planned)

### QR Code Generator
- Implement the main QR code generation functionality  

### Authentication
- Connect Google Auth & backend authentication  

### Plans & Pricing
- Add page for subscription plans  
- Integrate payment functionality  
- Option to cancel subscription  

### UI Enhancements
- Improve animations & gradient background effects  
- Enhance the footer with dynamic social links  

### Content Pages
- About Us  
- Blog  
- Support  
- Documentation  
- FAQ  
- Terms & Conditions  
- Privacy Policy  
- Cookies Policy  
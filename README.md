# Northwind.App.Frontend

A modern vanilla JavaScript frontend application demonstrating best practices for web components, API integration, and user interface design. Built with HTML5, CSS3, and modern JavaScript ES6+ modules, this application consumes the Northwind Backend API.

## 🌟 Features

- ✅ **Web Components** - Reusable custom elements without frameworks
- ✅ **Vanilla JavaScript** - No framework dependencies, just modern ES6+
- ✅ **Responsive Design** - Fomantic UI for consistent styling
- ✅ **API Integration** - REST API client for Northwind backend
- ✅ **Customer Dashboard** - Top customers sorted by revenue
- ✅ **Customer Management** - CRUD operations for customers
- ✅ **Code Quality Tools** - ESLint, HTMLHint, and Stylelint
- ✅ **Modular Architecture** - Organized component structure

## 🚀 Live Demo

**Frontend:** [https://devcronberg.github.io/Northwind.App.Frontend](https://devcronberg.github.io/Northwind.App.Frontend)

The frontend application connects to the deployed backend API:

**Backend API:** [https://northwind-backend-b088.onrender.com](https://northwind-backend-b088.onrender.com)

> ⚠️ **Note:** The backend API is hosted on Render.com's free tier and spins down after 15 minutes of inactivity. The first request may take 30-50 seconds.

## 🛠️ Technology Stack

- **HTML5** - Semantic markup with custom elements
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **JavaScript ES6+** - Modules, classes, async/await
- **Fomantic UI** - Responsive CSS framework (fork of Semantic UI)
- **jQuery** - Required by Fomantic UI
- **Web Components** - Custom Elements API
- **Fetch API** - Modern HTTP client

## 📋 Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Local web server (e.g., Live Server, http-server, or VS Code Live Server extension)
- Node.js and npm (for development tools and linting)

## 🏃 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/devcronberg/Northwind.App.Frontend.git
cd Northwind.App.Frontend
```

### 2. Install development dependencies

```bash
npm install
```

### 3. Start local web server

#### With VS Code Live Server extension:
- Right-click on `index.html`
- Select "Open with Live Server"

#### With http-server:
```bash
npx http-server -p 8080
```

#### With Python:
```bash
python -m http.server 8080
```

### 4. Open in browser

Navigate to: `http://localhost:8080`

## 📁 Project Structure

```text
Northwind.App.Frontend/
├── index.html                    # Dashboard page
├── customers.html                # Customer management page
├── package.json                  # NPM dependencies and scripts
├── eslint.config.mjs             # ESLint configuration
├── assets/
│   └── favicon.svg               # App icon
├── css/
│   └── styles.css                # Custom styling
├── js/
│   ├── app.js                    # Application entry point
│   ├── config/
│   │   └── settings.js           # API and app configuration
│   └── components/
│       ├── app-header.js         # Header component
│       ├── app-footer.js         # Footer component
│       ├── customer-table.js     # Customer list table
│       ├── customer-revenue-table.js  # Revenue dashboard table
│       └── form-text-input.js    # Reusable form input
└── .github/
    └── github-instructions.md    # AI assistant instructions
```

## 🧩 Web Components

The application uses modern Web Components (Custom Elements):

### `<app-header>`
Navigation header with logo and menu links.

### `<app-footer>`
Footer with copyright information.

### `<customer-table>`
Displays all customers in a table with CRUD operations.

**Attributes:**
- `limit` (optional) - Maximum number of customers to display

### `<customer-revenue-table>`
Dashboard table with top customers sorted by revenue.

**Attributes:**
- `limit` (required) - Number of top customers to display

### `<form-text-input>`
Reusable form input field component.

**Attributes:**
- `label` - Field label
- `name` - Form field name
- `required` (optional) - Whether the field is required
- `placeholder` (optional) - Placeholder text

## 🌐 API Integration

The application integrates with the Northwind Backend API:

### Configuration

API endpoints are configured in [js/config/settings.js](js/config/settings.js):

```javascript
export const API_CONFIG = {
    BASE_URL: 'https://northwind-backend-b088.onrender.com/api',
    TIMEOUT: 30000,
};
```

### Endpoints Used

- `GET /api/public/customers` - Get all customers
- `GET /api/public/customers-with-revenue` - Get customers with revenue
- `GET /api/public/customers/{id}` - Get specific customer
- `POST /api/public/customers` - Create new customer
- `PUT /api/public/customers/{id}` - Update customer
- `DELETE /api/public/customers/{id}` - Delete customer

## 🎨 Styling

The application uses **Fomantic UI** for consistent styling:

- Responsive grid system
- Pre-styled components (buttons, tables, forms)
- Icons via Fomantic UI icon font
- Custom styling in [css/styles.css](css/styles.css)

## 🧪 Code Quality

### Linting Scripts

```bash
# Lint HTML
npm run lint:html

# Lint CSS
npm run lint:css

# Lint JavaScript
npm run lint:js

# Lint all
npm run lint
```

### Tools

- **ESLint** - JavaScript linting
- **HTMLHint** - HTML validation
- **Stylelint** - CSS linting

## 📄 Pages

### Dashboard ([index.html](index.html))
- Displays top 5 customers by revenue
- Uses `<customer-revenue-table>` component

### Customer Management ([customers.html](customers.html))
- Complete customer list
- CRUD operations
- Uses `<customer-table>` component

## 🔧 Configuration

### API Configuration

Edit [js/config/settings.js](js/config/settings.js) to change the API URL:

```javascript
export const API_CONFIG = {
    BASE_URL: 'http://localhost:5000/api',  // For local backend
    TIMEOUT: 30000,
};
```

## 📝 Best Practices Demonstrated

- ✅ **Separation of Concerns** - Components, config, and styling separated
- ✅ **Reusable Components** - Web Components with custom attributes
- ✅ **Modern JavaScript** - ES6 modules, classes, async/await
- ✅ **Error Handling** - Try/catch blocks and user feedback
- ✅ **Loading States** - Visual feedback during API calls
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Code Quality** - Linting and consistent code style
- ✅ **Semantic HTML** - Proper use of HTML5 elements
- ✅ **Accessibility** - ARIA labels and semantic tags

## 🚀 Deployment

The frontend application can be deployed to any static hosting service:

### GitHub Pages (Automated)

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the `main` branch.

**Setup:**
1. Go to repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to the `main` branch to trigger deployment
4. The site will be available at: `https://<username>.github.io/Northwind.App.Frontend`

The workflow (`.github/workflows/deploy.yml`) automatically:
- Installs dependencies
- Runs linting checks
- Deploys the application to GitHub Pages

### GitHub Pages (Manual)
```bash
# Alternative: Enable GitHub Pages in repository settings
# Select main branch and root folder
```

### Netlify
```bash
# Drop the folder on netlify.com
# or connect your GitHub repository
```

### Vercel
```bash
npx vercel
```

### Render Static Site
```yaml
# render.yaml example
services:
  - type: web
    name: northwind-frontend
    env: static
    buildCommand: "echo 'No build needed'"
    staticPublishPath: .
```

## 🔗 Related Projects

- **Backend API**: [Northwind.App.Backend](https://github.com/devcronberg/Northwind.App.Backend)
- **Live Backend**: [https://northwind-backend-b088.onrender.com](https://northwind-backend-b088.onrender.com)
- **Swagger API Docs**: [https://northwind-backend-b088.onrender.com/swagger](https://northwind-backend-b088.onrender.com/swagger)

## 🤝 Contributing

This is a demo project for learning purposes. Feel free to:

- Fork the repository
- Create feature branches
- Submit pull requests
- Report issues
- Suggest improvements

## 📄 License

This project is open source and available for educational purposes.

## 🙏 Acknowledgments

- **Northwind Database** - Classic sample database from Microsoft
- **Fomantic UI Team** - For the excellent CSS framework
- **Web Components Community** - For standards and best practices

## 📞 Contact

- **Repository**: https://github.com/devcronberg/Northwind.App.Frontend
- **Backend API**: https://github.com/devcronberg/Northwind.App.Backend
- **Live Demo**: https://northwind-backend-b088.onrender.com

---

**Happy Coding! 🚀**

*This is a demo application for educational purposes. For production use, implement proper security, error logging, monitoring, and performance optimization.*

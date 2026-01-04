# Northwind Frontend - Undervisningsguide

## 📚 Indholdsfortegnelse

1. [Projektbeskrivelse](#projektbeskrivelse)
2. [Teknologier og Arkitektur](#teknologier-og-arkitektur)
3. [Projektstruktur](#projektstruktur)
4. [Kom i Gang](#kom-i-gang)
5. [Web Components](#web-components)
6. [Progressive Web App (PWA)](#progressive-web-app-pwa)
7. [API Integration](#api-integration)
8. [Styling med Vanilla CSS](#styling-med-vanilla-css)
9. [Best Practices](#best-practices)
10. [Deployment](#deployment)
11. [Undervisningsmateriale](#undervisningsmateriale)

---

## Projektbeskrivelse

Dette er en **demo frontend applikation** til undervisning, der viser hvordan man bygger en moderne webapplikation med:

- ✅ **Vanilla HTML, CSS og JavaScript** - Ingen frameworks
- ✅ **Web Components** - Moderne, genanvendelige komponenter
- ✅ **Progressive Web App (PWA)** - Installérbar, offline-capable
- ✅ **REST API Integration** - Kommunikerer med Northwind Backend
- ✅ **Responsiv Design** - Virker på mobil, tablet og desktop
- ✅ **Ingen Build Tools** - Kører direkte i browseren
- ✅ **English Language** - All code, comments, and UI text in English
- ✅ **Zero Errors** - No VS Code problems, warnings, or errors allowed

### Formål

Projektet demonstrerer **fundamentale web development koncepter** uden kompleksiteten fra frameworks som React, Vue eller Angular. Det er perfekt til:

- 🎓 Undervisning i web fundamentals
- 📖 Læring af Web Components
- 🔧 Forståelse af PWA koncepter
- 🌐 REST API integration
- 💡 Moderne JavaScript (ES6+)

---

## Teknologier og Arkitektur

### Ingen Frameworks - Kun Web Standards

| Teknologi          | Formål                     | Hvorfor?                          |
| ------------------ | -------------------------- | --------------------------------- |
| **HTML5**          | Struktur og semantik       | Native web platform               |
| **CSS3**           | Styling og layout          | Ingen Bootstrap, ren CSS          |
| **JavaScript**     | Logik og interaktivitet    | ES6+ modules, native features     |
| **Web Components** | Genanvendelige komponenter | Shadow DOM, Custom Elements       |
| **PWA**            | Offline, installérbar      | Service Workers, Web App Manifest |
| **Fetch API**      | HTTP requests til backend  | Native, ingen axios eller jQuery  |

### Arkitektur Diagram

```text
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (Browser)                      │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐          │
│  │   index.html │  │  manifest   │  │   sw.js     │          │
│  │             │  │   .json     │  │  (Service   │          │
│  │  (Shell)    │  │  (PWA)      │  │   Worker)   │          │
│  └─────────────┘  └─────────────┘  └─────────────┘          │
│         │                                   │                 │
│         v                                   v                 │
│  ┌──────────────────────────────────────────────────┐        │
│  │         Web Components (js/components/)          │        │
│  ├──────────────────────────────────────────────────┤        │
│  │  • <app-header>     • <customer-list>            │        │
│  │  • <app-navigation> • <customer-detail>          │        │
│  │  • <app-footer>     • <login-form>               │        │
│  └──────────────────────────────────────────────────┘        │
│         │                                                     │
│         v                                                     │
│  ┌──────────────────────────────────────────────────┐        │
│  │           Services (js/services/)                │        │
│  ├──────────────────────────────────────────────────┤        │
│  │  • api.service.js       (HTTP requests)          │        │
│  │  • auth.service.js      (JWT tokens)             │        │
│  │  • storage.service.js   (localStorage)           │        │
│  └──────────────────────────────────────────────────┘        │
│         │                                                     │
└─────────┼─────────────────────────────────────────────────────┘
          │
          │ HTTPS (JWT Bearer Token)
          v
┌─────────────────────────────────────────────────────────────┐
│               Backend REST API (ASP.NET Core)                │
│  https://northwind-backend.onrender.com/api/                 │
└─────────────────────────────────────────────────────────────┘
```

---

## Projektstruktur

```text
Northwind.App.Frontend.Simple/
│
├── .github/
│   └── README.md                    # Denne fil
│
├── index.html                       # Single Page Application shell
│
├── manifest.json                    # PWA manifest (app metadata)
├── sw.js                            # Service Worker (offline support)
│
├── css/
│   ├── styles.css                   # Global styles
│   ├── variables.css                # CSS custom properties (colors, spacing)
│   ├── layout.css                   # Layout utilities (grid, flexbox)
│   ├── components.css               # Component-specific styles
│   └── responsive.css               # Media queries
│
├── js/
│   ├── app.js                       # Application entry point
│   ├── router.js                    # Client-side routing
│   │
│   ├── components/
│   │   ├── app-header.js            # Header component
│   │   ├── app-navigation.js        # Navigation menu
│   │   ├── app-footer.js            # Footer component
│   │   ├── login-form.js            # Login form component
│   │   ├── customer-list.js         # Customer list component
│   │   ├── customer-detail.js       # Customer detail view
│   │   ├── customer-form.js         # Create/Edit customer form
│   │   └── loading-spinner.js       # Loading indicator
│   │
│   ├── services/
│   │   ├── api.service.js           # HTTP client (fetch wrapper)
│   │   ├── auth.service.js          # Authentication (JWT)
│   │   ├── storage.service.js       # localStorage wrapper
│   │   └── notification.service.js  # Toast notifications
│   │
│   └── utils/
│       ├── constants.js             # Constants (API URLs, etc.)
│       ├── validators.js            # Form validation
│       └── helpers.js               # Utility functions
│
└── assets/
    ├── icons/
    │   ├── icon-72x72.png           # PWA icons (various sizes)
    │   ├── icon-96x96.png
    │   ├── icon-128x128.png
    │   ├── icon-144x144.png
    │   ├── icon-152x152.png
    │   ├── icon-192x192.png
    │   └── icon-512x512.png
    │
    └── images/
        └── logo.svg                 # Application logo
```

---

## Kom i Gang

### Forudsætninger

- **Web Browser**: Chrome, Firefox, Safari eller Edge (seneste version)
- **Lokal Web Server**: Live Server, Python SimpleHTTPServer, eller lignende
- **Backend API**: Northwind Backend kørende (se backend README)

### Installation

**1. Clone Repository**

```bash
git clone https://github.com/[username]/Northwind.App.Frontend.Simple.git
cd Northwind.App.Frontend.Simple
```

**2. Start Lokal Web Server**

**Option A: VS Code Live Server**
- Installer [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Højreklik på `index.html` → "Open with Live Server"
- Åbner på `http://localhost:5500`

**Option B: Python SimpleHTTPServer**
```bash
# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```
- Åbn `http://localhost:8080`

**Option C: Node.js http-server**
```bash
npx http-server -p 8080
```

**3. Configure API URL**

Åbn [js/utils/constants.js](js/utils/constants.js) og opdater API URL:

```javascript
// Development
export const API_BASE_URL = 'http://localhost:5000/api';

// Production
export const API_BASE_URL = 'https://northwind-backend.onrender.com/api';
```

**4. Åbn i Browser**

Naviger til `http://localhost:8080` (eller den port du valgte)

---

## Web Components

### Hvad er Web Components?

**Web Components** er en samling af web platform APIs, der lader dig lave nye, genanvendelige, indkapslede HTML tags til brug i websider og webapps.

**3 Hovedteknologier**:

1. **Custom Elements**: Definer dine egne HTML elementer
2. **Shadow DOM**: Indkapslet DOM og styling
3. **HTML Templates**: `<template>` og `<slot>` elementer

### Opret en Web Component

**Eksempel: Customer Card Component**

```javascript
// js/components/customer-card.js

class CustomerCard extends HTMLElement {
  constructor() {
    super();
    // Attach shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Called when element is added to DOM
    this.render();
  }

  // Observed attributes (re-render when changed)
  static get observedAttributes() {
    return ['customer-id', 'company-name', 'contact-name', 'country'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Called when an observed attribute changes
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const customerId = this.getAttribute('customer-id');
    const companyName = this.getAttribute('company-name');
    const contactName = this.getAttribute('contact-name');
    const country = this.getAttribute('country');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          margin: 0.5rem 0;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .company-name {
          font-size: 1.2rem;
          font-weight: bold;
          color: #333;
        }

        .customer-id {
          font-size: 0.875rem;
          color: #666;
          font-family: monospace;
        }

        .contact-info {
          color: #555;
        }

        .country {
          display: inline-block;
          background: #e3f2fd;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
      </style>

      <div class="card-header">
        <span class="company-name">${companyName}</span>
        <span class="customer-id">${customerId}</span>
      </div>
      <div class="contact-info">${contactName}</div>
      <div class="country">📍 ${country}</div>
    `;
  }
}

// Register the custom element
customElements.define('customer-card', CustomerCard);
```

**Brug i HTML:**

```html
<customer-card
  customer-id="ALFKI"
  company-name="Alfreds Futterkiste"
  contact-name="Maria Anders"
  country="Germany">
</customer-card>
```

### Lifecycle Callbacks

| Callback                     | Hvornår kaldes                   |
| ---------------------------- | -------------------------------- |
| `constructor()`              | Element oprettes                 |
| `connectedCallback()`        | Element tilføjes til DOM         |
| `disconnectedCallback()`     | Element fjernes fra DOM          |
| `attributeChangedCallback()` | Observed attribute ændres        |
| `adoptedCallback()`          | Element flyttes til nyt dokument |

### Shadow DOM Benefits

✅ **Style Encapsulation**: CSS påvirker ikke resten af siden
✅ **DOM Encapsulation**: Intern struktur skjult for JavaScript
✅ **Reusability**: Kan bruges flere steder uden konflikter

**Eksempel:**

```javascript
this.attachShadow({ mode: 'open' });

// Styles kun påvirker dette component
this.shadowRoot.innerHTML = `
  <style>
    .button { color: red; }  /* Påvirker IKKE andre .button elementer */
  </style>
  <button class="button">Click Me</button>
`;
```

---

## Progressive Web App (PWA)

### Hvad er en PWA?

En **Progressive Web App** er en webapplikation, der opfører sig som en native app:

- 📱 **Installérbar**: Kan tilføjes til home screen
- 🔌 **Offline**: Virker uden internet
- 🔔 **Push Notifications**: (valgfrit)
- ⚡ **Fast**: Cacher ressourcer
- 🔒 **Sikker**: Kræver HTTPS

### PWA Komponenter

#### 1. Web App Manifest (manifest.json)

**Manifest** beskriver appen til browseren:

```json
{
  "name": "Northwind Customer Management",
  "short_name": "Northwind",
  "description": "Demo frontend for Northwind REST API",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#2196f3",
  "background_color": "#ffffff",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

**Link i index.html:**

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#2196f3">
```

#### 2. Service Worker (sw.js)

**Service Worker** er en JavaScript fil, der kører i baggrunden og intercepter network requests.

**Eksempel Service Worker:**

```javascript
// sw.js

const CACHE_NAME = 'northwind-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/app.js',
  '/js/router.js',
  '/assets/icons/icon-192x192.png',
  // ... andre assets
];

// Install event - cache alle assets
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Caching assets');
        return cache.addAll(ASSETS_TO_CACHE);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Clone request
        const fetchRequest = event.request.clone();

        // Make network request
        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone response
          const responseToCache = response.clone();

          // Cache the response
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        });
      })
  );
});
```

**Register Service Worker (app.js):**

```javascript
// js/app.js

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('✅ Service Worker registered:', registration.scope);
      })
      .catch((error) => {
        console.error('❌ Service Worker registration failed:', error);
      });
  });
}
```

### Caching Strategies

| Strategi                   | Hvornår brug                    | Fordel                    |
| -------------------------- | ------------------------------- | ------------------------- |
| **Cache First**            | Static assets (CSS, JS, images) | Hurtig, offline           |
| **Network First**          | API requests (dynamic data)     | Altid frisk data          |
| **Cache Only**             | App shell                       | Instant load              |
| **Network Only**           | Non-GET requests (POST, PUT)    | Ingen stale data          |
| **Stale While Revalidate** | Content der kan være gammelt    | Balance speed + freshness |

### PWA Install Prompt

**Lyt til install event:**

```javascript
// js/app.js

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent default browser prompt
  e.preventDefault();
  deferredPrompt = e;

  // Show custom install button
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Show install prompt
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ User accepted PWA install');
      } else {
        console.log('❌ User dismissed PWA install');
      }
      deferredPrompt = null;
    });
  });
});
```

---

## API Integration

### API Service (api.service.js)

**Centraliseret HTTP client:**

```javascript
// js/services/api.service.js

import { API_BASE_URL } from '../utils/constants.js';
import { AuthService } from './auth.service.js';

class ApiService {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;

    // Default headers
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    // Add JWT token if available
    const token = AuthService.getAccessToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      // Handle 401 Unauthorized (token expired)
      if (response.status === 401) {
        // Try to refresh token
        const refreshed = await AuthService.refreshToken();
        if (refreshed) {
          // Retry request with new token
          return this.request(endpoint, options);
        } else {
          // Redirect to login
          window.location.href = '/login';
          throw new Error('Authentication required');
        }
      }

      // Parse JSON response
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status}`);
      }

      return data;
    } catch (error) {
      console.error(`API Error: ${endpoint}`, error);
      throw error;
    }
  }

  // Convenience methods
  get(endpoint) {
    return this.request(endpoint, { method: 'GET' });
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' });
  }

  // Customer endpoints
  getCustomers() {
    return this.get('/customers');
  }

  getCustomer(id) {
    return this.get(`/customers/${id}`);
  }

  createCustomer(customer) {
    return this.post('/customers', customer);
  }

  updateCustomer(id, customer) {
    return this.put(`/customers/${id}`, customer);
  }

  deleteCustomer(id) {
    return this.delete(`/customers/${id}`);
  }
}

export const apiService = new ApiService();
```

### Auth Service (auth.service.js)

**JWT token management:**

```javascript
// js/services/auth.service.js

import { apiService } from './api.service.js';
import { StorageService } from './storage.service.js';

class AuthServiceClass {
  constructor() {
    this.ACCESS_TOKEN_KEY = 'access_token';
    this.REFRESH_TOKEN_KEY = 'refresh_token';
    this.USER_KEY = 'user';
  }

  // Login
  async login(username, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();

      // Store tokens
      StorageService.set(this.ACCESS_TOKEN_KEY, data.accessToken);
      StorageService.set(this.REFRESH_TOKEN_KEY, data.refreshToken);
      StorageService.set(this.USER_KEY, {
        username: data.username,
        role: data.role,
      });

      return data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  // Logout
  async logout() {
    const refreshToken = this.getRefreshToken();

    if (refreshToken) {
      try {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refreshToken }),
        });
      } catch (error) {
        console.error('Logout API call failed:', error);
      }
    }

    // Clear local storage
    StorageService.remove(this.ACCESS_TOKEN_KEY);
    StorageService.remove(this.REFRESH_TOKEN_KEY);
    StorageService.remove(this.USER_KEY);

    // Redirect to login
    window.location.href = '/login';
  }

  // Refresh access token
  async refreshToken() {
    const refreshToken = this.getRefreshToken();

    if (!refreshToken) {
      return false;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ refreshToken }),
      });

      if (!response.ok) {
        return false;
      }

      const data = await response.json();

      // Update tokens
      StorageService.set(this.ACCESS_TOKEN_KEY, data.accessToken);
      StorageService.set(this.REFRESH_TOKEN_KEY, data.refreshToken);

      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  }

  // Get access token
  getAccessToken() {
    return StorageService.get(this.ACCESS_TOKEN_KEY);
  }

  // Get refresh token
  getRefreshToken() {
    return StorageService.get(this.REFRESH_TOKEN_KEY);
  }

  // Check if authenticated
  isAuthenticated() {
    return !!this.getAccessToken();
  }

  // Get current user
  getCurrentUser() {
    return StorageService.get(this.USER_KEY);
  }
}

export const AuthService = new AuthServiceClass();
```

### Error Handling

**Global error handler:**

```javascript
// js/utils/error-handler.js

export class ErrorHandler {
  static handle(error) {
    console.error('Error:', error);

    let message = 'An unexpected error occurred';

    if (error.message) {
      message = error.message;
    }

    // Show toast notification
    this.showNotification(message, 'error');
  }

  static showNotification(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;

    document.body.appendChild(toast);

    // Auto-remove after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}
```

---

## Styling med Vanilla CSS

### CSS Variables (variables.css)

**Define design tokens:**

```css
/* css/variables.css */

:root {
  /* Colors */
  --color-primary: #2196f3;
  --color-primary-dark: #1976d2;
  --color-primary-light: #bbdefb;

  --color-secondary: #ff5722;
  --color-secondary-dark: #e64a19;
  --color-secondary-light: #ffccbc;

  --color-success: #4caf50;
  --color-warning: #ff9800;
  --color-error: #f44336;
  --color-info: #2196f3;

  --color-text-primary: #212121;
  --color-text-secondary: #757575;
  --color-text-disabled: #bdbdbd;

  --color-background: #ffffff;
  --color-surface: #f5f5f5;
  --color-border: #e0e0e0;

  /* Spacing */
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-xxl: 3rem;     /* 48px */

  /* Typography */
  --font-family-base: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  --font-family-mono: 'Courier New', Courier, monospace;

  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-md: 1rem;       /* 16px */
  --font-size-lg: 1.25rem;    /* 20px */
  --font-size-xl: 1.5rem;     /* 24px */
  --font-size-xxl: 2rem;      /* 32px */

  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.16);
  --shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.19);

  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 250ms ease-in-out;
  --transition-slow: 350ms ease-in-out;

  /* Z-index */
  --z-dropdown: 1000;
  --z-modal: 1050;
  --z-tooltip: 1100;
}
```

### Layout Utilities (layout.css)

**Flexbox and Grid utilities:**

```css
/* css/layout.css */

/* Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

/* Flexbox */
.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-between {
  justify-content: space-between;
  align-items: center;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-1 {
  flex: 1;
}

/* Grid */
.grid {
  display: grid;
  gap: var(--spacing-md);
}

.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

/* Spacing */
.mt-1 { margin-top: var(--spacing-sm); }
.mt-2 { margin-top: var(--spacing-md); }
.mt-3 { margin-top: var(--spacing-lg); }
.mt-4 { margin-top: var(--spacing-xl); }

.mb-1 { margin-bottom: var(--spacing-sm); }
.mb-2 { margin-bottom: var(--spacing-md); }
.mb-3 { margin-bottom: var(--spacing-lg); }
.mb-4 { margin-bottom: var(--spacing-xl); }

.p-1 { padding: var(--spacing-sm); }
.p-2 { padding: var(--spacing-md); }
.p-3 { padding: var(--spacing-lg); }
.p-4 { padding: var(--spacing-xl); }
```

### Responsive Design (responsive.css)

**Mobile-first media queries:**

```css
/* css/responsive.css */

/* Mobile First: Base styles for mobile */

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 0 var(--spacing-lg);
  }

  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }

  .grid-responsive {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Hide utilities */
@media (max-width: 767px) {
  .hide-mobile {
    display: none !important;
  }
}

@media (min-width: 768px) {
  .hide-desktop {
    display: none !important;
  }
}
```

---

## Best Practices

### 0. Code Quality - Zero VS Code Problems

**CRITICAL: All code must be error-free in VS Code**

**Mandatory Workflow:**

1. **BEFORE starting work:**
   ```javascript
   // Always check current state first
   get_errors() // See existing problems
   ```

2. **AFTER making changes:**
   ```javascript
   // Verify your changes introduced no errors
   get_errors() // Must return "No errors found"
   ```

3. **If errors found:**
   - Fix them IMMEDIATELY
   - Run `get_errors` again
   - Only continue when clean

**Example workflow:**
```text
User request → get_errors (check baseline)
  ↓
Make changes
  ↓
get_errors (verify clean) → ❌ Errors found
  ↓
Fix errors
  ↓
get_errors (verify again) → ✅ No errors
  ↓
Task complete
```

**Code examples:**

```javascript
// ❌ Bad: Syntax errors, duplicate code, missing semicolons
class MyComponent {
  render() { }
  render() { }  // Duplicate method - VS Code error!
}

// ✅ Good: Clean, no problems in VS Code
class MyComponent {
  render() {
    return '<div>Content</div>';
  }
}
```

**Linters configured:**
- **HTMLHint** - HTML validation (`.htmlhintrc`)
- **Stylelint** - CSS validation (`.stylelintrc.json`)
- **VS Code** - JavaScript/TypeScript validation

**Common issues to avoid:**
- Duplicate methods/properties
- Missing semicolons (if required by linter)
- Unused variables
- Type mismatches
- Import/export errors
- Invalid HTML structure
- CSS property errors
- Missing alt attributes on images

**NPM scripts available:**
- `npm run lint:html` - Check HTML files
- `npm run lint:css` - Check CSS files
- `npm run lint` - Check both

### 1. JavaScript ES6+ Modules

**Use modules for code organization:**

```javascript
// ✅ Good: Use import/export
import { apiService } from './services/api.service.js';

export class CustomerService {
  getAll() {
    return apiService.getCustomers();
  }
}

// ❌ Bad: Global variables
var customerService = {
  getAll: function() { ... }
};
```

### 2. Async/Await over Callbacks

```javascript
// ✅ Good: Async/await
async function loadCustomers() {
  try {
    const customers = await apiService.getCustomers();
    renderCustomers(customers);
  } catch (error) {
    handleError(error);
  }
}

// ❌ Bad: Callback hell
apiService.getCustomers(function(customers) {
  renderCustomers(customers, function() {
    loadOrders(function() {
      // ...
    });
  });
});
```

### 3. Error Handling

**Always handle errors:**

```javascript
// ✅ Good: Try/catch
async function deleteCustomer(id) {
  try {
    await apiService.deleteCustomer(id);
    showNotification('Customer deleted', 'success');
  } catch (error) {
    showNotification(error.message, 'error');
    console.error('Delete failed:', error);
  }
}

// ❌ Bad: No error handling
async function deleteCustomer(id) {
  await apiService.deleteCustomer(id);
  showNotification('Customer deleted', 'success');
}
```

### 4. Semantic HTML

```html
<!-- ✅ Good: Semantic elements -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Title</h1>
    <p>Content</p>
  </article>
</main>

<footer>
  <p>&copy; 2026</p>
</footer>

<!-- ❌ Bad: Divs everywhere -->
<div class="header">
  <div class="nav">
    <div class="menu">...</div>
  </div>
</div>
```

### 5. Accessibility (a11y)

```html
<!-- ✅ Good: Accessible -->
<button aria-label="Delete customer" onclick="deleteCustomer('ALFKI')">
  <svg aria-hidden="true">...</svg>
</button>

<img src="logo.png" alt="Northwind Logo">

<form>
  <label for="customer-name">Customer Name</label>
  <input id="customer-name" type="text" required>
</form>

<!-- ❌ Bad: Not accessible -->
<div onclick="deleteCustomer('ALFKI')">
  <svg>...</svg>
</div>

<img src="logo.png">

<form>
  <input type="text" placeholder="Customer Name">
</form>
```

### 6. Performance

**Debounce search input:**

```javascript
// js/utils/debounce.js
export function debounce(func, delay = 300) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// Usage
const searchInput = document.getElementById('search');
const debouncedSearch = debounce((value) => {
  apiService.searchCustomers(value);
}, 300);

searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});
```

### 7. Language and Localization

**All code and UI in English:**

```javascript
// ✅ Good: English
const customerName = document.getElementById('customer-name');
showNotification('Customer created successfully', 'success');

// ❌ Bad: Danish or mixed languages
const kundeNavn = document.getElementById('kunde-navn');
showNotification('Kunde oprettet succesfuldt', 'success');
```

**Currency and Formatting:**
```javascript
// Use USD for demonstration purposes
const formatted = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(amount);
```

### 8. Security

**Sanitize user input:**

```javascript
// js/utils/sanitize.js
export function sanitizeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Usage
const userInput = '<script>alert("XSS")</script>';
const safe = sanitizeHTML(userInput);
// Result: "&lt;script&gt;alert("XSS")&lt;/script&gt;"
```

**Never use `innerHTML` with user input:**

```javascript
// ❌ Bad: XSS vulnerability
element.innerHTML = userInput;

// ✅ Good: Use textContent
element.textContent = userInput;

// ✅ Good: Sanitize first
element.innerHTML = sanitizeHTML(userInput);
```

---

## Deployment

### Static Site Hosting

**Options:**

1. **GitHub Pages**
   - Free
   - Custom domain
   - HTTPS
   - Deploy: Push to `gh-pages` branch

2. **Netlify**
   - Free tier
   - Continuous deployment
   - Edge functions
   - Deploy: Connect GitHub repo

3. **Vercel**
   - Free tier
   - Fast CDN
   - Serverless functions
   - Deploy: `vercel deploy`

4. **Azure Static Web Apps**
   - Free tier
   - Azure integration
   - API support
   - Deploy: GitHub Actions

### GitHub Pages Deployment

**1. Build (if needed):**
```bash
# No build step needed for vanilla JS!
```

**2. Deploy:**
```bash
# Create gh-pages branch
git checkout -b gh-pages

# Push to GitHub
git push origin gh-pages
```

**3. Enable GitHub Pages:**
- Go to repo Settings → Pages
- Source: Deploy from branch `gh-pages`
- URL: `https://[username].github.io/[repo-name]`

### Environment Configuration

**Use environment-specific config:**

```javascript
// js/utils/constants.js

const ENV = 'production'; // 'development' | 'production'

export const API_BASE_URL = 
  ENV === 'production'
    ? 'https://northwind-backend.onrender.com/api'
    : 'http://localhost:5000/api';

export const DEBUG = ENV === 'development';
```

---

## Undervisningsmateriale

### Læringsmål

Efter gennemgang af dette projekt skal studerende kunne:

1. **HTML & CSS**
   - ✅ Skrive semantisk HTML5
   - ✅ Style med vanilla CSS (ingen frameworks)
   - ✅ Bruge CSS variables
   - ✅ Implementere responsivt design

2. **JavaScript**
   - ✅ Bruge ES6+ features (modules, arrow functions, async/await)
   - ✅ Arbejde med Fetch API
   - ✅ Håndtere asynkron kode
   - ✅ Implementere error handling

3. **Web Components**
   - ✅ Oprette custom elements
   - ✅ Bruge Shadow DOM
   - ✅ Lifecycle callbacks
   - ✅ Props og events

4. **PWA**
   - ✅ Oprette Web App Manifest
   - ✅ Registrere Service Worker
   - ✅ Implementere caching strategies
   - ✅ Gøre app installérbar

5. **API Integration**
   - ✅ Kalde REST API endpoints
   - ✅ Håndtere JWT authentication
   - ✅ Implementere CRUD operationer
   - ✅ Error handling

### Øvelser

#### Øvelse 1: Opret en ny Web Component

**Opgave**: Lav en `<order-card>` component, der viser ordre information.

**Krav**:
- Viser OrderID, OrderDate, CustomerID
- Klikbar (navigate til order detail)
- Shadow DOM med styling
- Responsive

#### Øvelse 2: Implementer Søgefunktionalitet

**Opgave**: Tilføj søgefelt til customer list.

**Krav**:
- Filter customers by company name
- Debounce input (300ms)
- Show loading indicator
- Handle empty results

#### Øvelse 3: Offline Support

**Opgave**: Udvid Service Worker til at cache API responses.

**Krav**:
- Cache GET /api/customers
- Stale-while-revalidate strategy
- Show "Offline" indicator
- Sync when online

#### Øvelse 4: Form Validation

**Opgave**: Lav client-side validation for customer form.

**Krav**:
- Validate required fields
- Email format validation
- Show error messages
- Disable submit if invalid

### Projekter

#### Projekt 1: Product Management

**Beskrivelse**: Tilføj product management til appen.

**Features**:
- List products (with category)
- Product detail view
- Create/Edit product
- Delete product
- Image upload

#### Projekt 2: Order Management

**Beskrivelse**: Implementer order functionality.

**Features**:
- List orders (with customer info)
- Order detail (with order items)
- Create new order
- Add/remove order items
- Calculate order total

#### Projekt 3: Dashboard

**Beskrivelse**: Lav et dashboard med statistik.

**Features**:
- Total customers count
- Recent orders
- Top products
- Revenue chart (with Chart.js eller Canvas API)

---

## Ressourcer

### Dokumentation

- [MDN Web Docs](https://developer.mozilla.org/) - Web platform reference
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [PWA](https://web.dev/progressive-web-apps/)

### Tools

- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Debugging
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - PWA audit
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [PWA Builder](https://www.pwabuilder.com/) - PWA manifest generator

### Inspiration

- [Web Components Examples](https://www.webcomponents.org/examples)
- [PWA Examples](https://pwa.rocks/)
- [Vanilla JS Projects](https://github.com/topics/vanilla-javascript)

---

## Support

### Problemer?

1. **Check browser console** for errors
2. **Verify API is running** (backend må køre)
3. **Check network tab** for failed requests
4. **Clear cache** og reload (Ctrl+Shift+R)
5. **Check Service Worker** status (DevTools → Application)

### Debugging Tips

**Service Worker Issues:**
```javascript
// Unregister all service workers
navigator.serviceWorker.getRegistrations()
  .then(registrations => {
    registrations.forEach(registration => registration.unregister());
  });
```

**Clear all caches:**
```javascript
caches.keys().then(keys => {
  keys.forEach(key => caches.delete(key));
});
```

**View stored tokens:**
```javascript
console.log('Access Token:', localStorage.getItem('access_token'));
console.log('Refresh Token:', localStorage.getItem('refresh_token'));
```

---

## Licens

Dette projekt er lavet til undervisningsformål og er frit tilgængeligt.

---

**God fornøjelse med undervisningen! 🚀**

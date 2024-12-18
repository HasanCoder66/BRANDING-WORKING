# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





{
  "name": "branding-frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^4.4.1",
    "@emotion/react": "^11.13.0",
    "@emotion/styled": "^11.13.0",
    "@heroicons/react": "^2.1.5",
    "@material-tailwind/react": "^2.1.10",
    "@mui/icons-material": "^5.16.6",
    "@mui/material": "^5.16.6",
    "@reduxjs/toolkit": "^2.2.7",
    "aos": "^2.3.4",
    "axios": "^1.7.5",
    "framer-motion": "^11.3.21",
    "i": "^0.3.7",
    "npm": "^10.8.3",
    "react": "^18.3.1",
    "react-bootstrap": "^2.10.4",
    "react-dom": "^18.3.1",
    "react-helmet-async": "^2.0.5",
    "react-multi-carousel": "^2.8.5",
    "react-redux": "^9.1.2",
    "react-router": "^6.12.0",
    "react-router-dom": "^6.26.0",
    "react-toastify": "^10.0.5",
    "react-type-animation": "^3.2.0",
    "redux-persist": "^6.0.0",
    "sweetalert2": "^11.6.13"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "eslint": "^8.57.0",
    "eslint-plugin-react": "^7.34.3",
    "eslint-plugin-react-hooks": "^4.6.2",
    "eslint-plugin-react-refresh": "^0.4.7",
    "postcss": "^8.4.40",
    "tailwindcss": "^3.4.7",
    "typescript": "^5.1.6",
    "vite": "^5.3.4"
  }
}

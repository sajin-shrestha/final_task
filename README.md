# React Login Page

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Introduction:

This project is a simple React login page built with TypeScript. It validates user credentials against an API endpoint and handles success and error scenarios appropriately. The /welcome page is protected and only accessible after successful login. A logout button is provided on the welcome page to log the user out and redirect them to the login page.

## Project Structre

```bash
  /src
  |-- /helpers
  | |-- AuthContext.tsx
  | |-- PrivateRoute.tsx
  |-- /pages
  | |-- LoginPage.tsx
  | |-- UnauthorizedPage.tsx.tsx
  | |-- WelcomePage.tsx
  |-- App.tsx
  |-- main.tsx
  |-- index.css
  vite-env.d.ts
  tsconfig.json
  vite.config.ts
  package.json
```

## Features

- **Login Page**: Includes fields for username and password.
- **Form Validation**: Ensures that the username and password fields are not empty before submitting.
- **Error Handling**: Displays appropriate error messages for incorrect credentials or failed API calls.
- **Protected Welcome Page**: The `/welcome` page is accessible only after a successful login.
- **Logout Functionality**: A logout button on the welcome page allows users to log out and be redirected to the login page.
- **Routing**: Utilizes `react-router-dom` for navigation between pages.
- **State Management**: Uses React Context API for managing authentication state.
- **Styling**: Styled with Material-UI for a modern and responsive design.
- **CORS Handling**: Uses Vite proxy configuration to handle CORS errors during API requests.

## Built With

List the technologies and tools that were used to build your project:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Material UI](https://mui.com/material-ui/getting-started/) - Material UI is an open-source React component library that implements Google's Material Design.It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box, and features a suite of customization options that make it easy to implement your own custom design system on top of our components.
- [Vite](https://vitejs.dev/) - A next-generation frontend tooling

## Prerequisites

List any prerequisites for your project:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/) (latest version)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/sajin-shrestha/final_task.git
   cd final_task
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   ```

## (IMP)Vite Configuration for CORS Handling

The application uses Vite's proxy configuration to handle CORS issues during API requests. This setup allows the frontend to make requests to the backend without encountering CORS errors.(only for development-purpose)

```ts
// vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://login.dataconstruct.com.np',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
})
```

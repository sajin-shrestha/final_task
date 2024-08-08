# React Login Page

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Built With](#built-with)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [ Vite Configuration for CORS Handling](#vite-configuration-for-cors-handling)

## Introduction:

This project is a simple React login page built with TypeScript focused on **code simplicity**. It validates user credentials against an API endpoint and handles success and error scenarios appropriately. The /welcome page is protected and only accessible after successful login. A logout button is provided on the welcome page to log the user out and redirect them to the login page.

## Project Structre

```bash
  /src
  |-- /components
  | |-- loading.tsx
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
- **CORS Handling**: Uses Vite proxy configuration to `handle CORS-errors` during API requests.
- **Local storage and Token**: uses `local-storage` to allow a user to retain access `/welcome` until the token expires

## Built With

List the technologies and tools that were used to build your project:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Material UI](https://mui.com/material-ui/getting-started/) - Material UI is an open-source React component library that implements Google's Material Design.It includes a comprehensive collection of prebuilt components that are ready for use in production right out of the box, and features a suite of customization options that make it easy to implement your own custom design system on top of our components.
- [Vite](https://vitejs.dev/) - A next-generation frontend tooling
- [Axios](https://axios-http.com/docs/intro) - A promise-based HTTP Client for node.js and the browser.

## Prerequisites

List any prerequisites for your project:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Vite](https://vitejs.dev/) (latest version)
- [Axios](https://axios-http.com/) (latest version)

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

## Vite Configuration for CORS Handling

**(IMP)**
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

- ### How It Works

The server.proxy configuration in Vite allows you to specify how requests to certain paths should be redirected to a different server. For instance, requests made to /api will be proxied to https://login.dataconstruct.com.np.

- ### Configuration Breakdown

-`target`: Defines the backend server where the requests will be forwarded. In this case, it is set to https://login.dataconstruct.com.np, the server that will handle the requests.

-`changeOrigin`: When set to true, it alters the Origin header of the request to match the target server. This adjustment is often necessary for proper request handling by the server.

-`secure`: Set to false to permit requests to servers with self-signed or invalid SSL certificates. This setting is generally used for development purposes and should be applied with caution in a production environment.

-`rewrite`: A function that modifies the URL path before it is forwarded to the target server. In this configuration, the function removes the /api prefix from the path. For example, a request to /api/some-endpoint is proxied as /some-endpoint to the target server

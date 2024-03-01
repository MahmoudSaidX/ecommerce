# React TypeScript Project Documentation

# Setting up "ecommerce" Project Locally

Follow these steps to set up the "ecommerce" project locally on your machine:

## Prerequisites

- Node.js and npm installed on your machine

## Instructions

1. Clone the repository:

   ```bash
   git clone <repository_url>

   ```

2. Navigate to the project directory:

   ```bash
   cd ecommerce
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit http://localhost:5173 to view the project.

## Deployed on vercel

[BrandStore](https://ms-brandstore.vercel.app "Brand Store")

## Folder Structure

- **assets:** This folder contains static assets such as images, fonts, or any other resources used in the project.
- **components:**
  - **ui:** This directory holds presentational components, focusing on the visual representation of the application.
  - **containers:** Container components reside here, responsible for managing state and logic, and coordinating the UI components.
- **hooks:** Custom hooks are stored in this directory. These hooks can encapsulate logic and state management for reuse across components.
- **layouts:** Layouts define the structure of different pages or sections within the application.
- **services:** All services utilized in the project are located here.

  - **api:** Contains modules for making HTTP requests to APIs.
  - **state:** Handles Redux state management.

- **utils:** This directory includes utility functions used throughout the project, such as formatting functions.

## Features

- **Mobile Friendly:** The project is designed to be responsive and optimized for mobile devices, ensuring a seamless user experience across different screen sizes.

- **Enhanced UX and UI:** The user experience and user interface are prioritized, with attention given to intuitive navigation, aesthetic design, and interactive elements to enhance usability.

- **ZoomIn Effect for Product Image:** Product images feature a zoom-in effect to provide users with a closer look at the details, improving the visual experience.

- **Enhanced Performance:** Efforts have been made to optimize the performance of the application, ensuring smooth interactions and fast loading times.

![Cat](./public/Screenshot%20from%202024-03-01%2014-39-02.png)
![Cat](./public/Screenshot%20from%202024-03-01%2014-39-12.png)

[Performance](https://pagespeed.web.dev/analysis/https-ms-brandstore-vercel-app/u2jyuparpx?form_factor=mobile "Check the performance")

## Tools Used and Reasons

- **Axios:** Axios is a popular HTTP client for making asynchronous HTTP requests in JavaScript and TypeScript. It provides a simple API and features such as interceptors and response transformations, making it suitable for handling API requests efficiently.

- **React-DOM:** React-DOM is a package that provides methods for interacting with the DOM (Document Object Model) in React applications. It is used to render React components into the browser DOM.

- **React-Icons:** React-Icons is a library that provides a collection of customizable icons for use in React applications. It offers a wide range of icon sets and allows easy integration of icons into components, enhancing the visual appeal of the UI.

- **React-Loading-Skeleton:** React-Loading-Skeleton is a library for creating skeleton screens to indicate loading states in React applications. It improves the perceived performance of the application by providing placeholders while content is loading, enhancing the user experience.

- **React-Redux:** React-Redux is the official React bindings for Redux, a predictable state container for JavaScript applications. It allows efficient management of application state and facilitates communication between React components, enabling scalable and maintainable state management.

- **React-Router-Dom:** React-Router-Dom is a package that provides routing capabilities for React applications. It enables navigation between different views or pages within the application, allowing for the creation of single-page applications with multiple routes.


 # Project Name

### Live Website Link:  assignment-gadget.surge.sh



---

## React Fundamentals Used in the Project

This project uses various React fundamentals, including but not limited to:

1. **JSX** - To write HTML structure inside JavaScript code.
2. **Components** - Reusable UI components for different sections like Navbar, Cart, Wishlist, etc.
3. **State Management** - Using `useState` and `useEffect` hooks for managing component states.
4. **Props** - Passing data between components.
5. **Event Handling** - Handling user interactions like button clicks, form submissions, etc.
6. **Conditional Rendering** - Displaying UI elements based on certain conditions (e.g., active tab, product details).
7. **React Router** - For routing between different pages such as Home, Dashboard, and Product Details.
8. **useEffect** - To manage side-effects and perform actions like data fetching and local storage updates.
9. **useContext** (if used) - For managing global state between components.
10. **useRef** (if used) - For accessing DOM elements directly.
11. **React Hooks** - In particular `useState`, `useEffect`, and possibly `useContext` for state management.

---

## Data Handling and Management

For handling and managing data in this project, the following methods were used:

1. **Local Storage**: Data like Cart and Wishlist are stored in local storage for persistence across page reloads. This ensures that users' selections are saved even after closing and reopening the browser.
   - **Functions used**:
     - `getStoredCartList()`
     - `getStoredWishList()`
     - `removeFromCartList()`
     - `removeFromWishList()`
2. **React Context API (if used)**: For managing and passing down global states across components, if the Context API is used.

---

## Features of the Website

1. **Cart Management**: Users can add products to the cart, remove them, and proceed with purchasing. The cart is saved in the browser’s local storage to persist across sessions.
2. **Wishlist**: Users can add products to their wishlist. It’s also saved in the local storage for persistence.
3. **Product Sorting**: Users can sort products in the cart by price.
4. **Modal Pop-up on Successful Purchase**: After a successful purchase, a modal appears to notify the user that their purchase was successful.
5. **Responsive Design**: The website is fully responsive and adapts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.































# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

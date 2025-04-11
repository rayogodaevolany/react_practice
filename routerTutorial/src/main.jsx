import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./routes/root"
import Contact from "./routes/contact"
import ErrorPage from "./error-page"


const router = createBrowserRouter([
    { path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: 
        [
            {
                path: "contacts/:contactId",
                element: <Contact />,
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)

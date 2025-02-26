import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router";
import Layout from "./layout";
import About from "./pages/about";
import Events from "./pages/events";
import Contact from "./pages/contact-us";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import News from "./pages/african-news";
import Employment from "./pages/employment";
import Health from "./pages/health";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "events",
        element: <Events />
      },
      {
        path: "contact-us",
        element: <Contact />
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          { index: true, element: <Navigate to="african-news" replace /> }, 
          { path: "african-news", element: <News /> },
          { path: "employment", element: <Employment /> },
          { path: "health", element: <Health /> },
        ],
      }
      
    ],
  },
]);


export default router;

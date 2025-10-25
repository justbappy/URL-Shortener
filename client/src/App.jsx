import { createBrowserRouter, RouterProvider, useNavigation } from "react-router-dom"
import "./App.css"
import AppLayout from "./components/layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <HomePage/>,
        },
        {
          path: '/home',
          element: <HomePage/>
        },
        {
          path: '/profile',
          element: <ProfilePage/>
        },
        {
          path: '/register',
          element: <RegisterPage/>,
        },
        {
          path: '/login',
          element: <LoginPage/>
        },
        {
          path: '/about',
          element: <AboutPage/>
        },
        {
          path: '/contact',
          element: <ContactPage/>
        },
      ]
    }
  ]);

  return <RouterProvider router={router}/>
}

export default App

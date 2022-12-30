import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main";
import About from "./components/pages/About";
import Details from "./components/pages/Details";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Media from "./components/pages/Media";
import Message from "./components/pages/Message";
import PrivateRoute from "./components/pages/PrivateRoute";
import Register from "./components/pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },

        {
          path: '/media',
          element: <Media></Media>
        },

        {
          path: '/message',
          element: <Message></Message>
        },

        {
          path: '/about',
          element: <About></About>
        },

        {
          path: '/details',
          element: <PrivateRoute><Details></Details></PrivateRoute>
        },

        {
          path: '/register',
          element: <Register></Register>
        },

        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;

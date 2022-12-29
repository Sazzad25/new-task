import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/layout/Main";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Media from "./components/pages/Media";
import Message from "./components/pages/Message";

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
        }
      ]
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

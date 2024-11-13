import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Users from "./pages/users/Users.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Menu from "./components/menu/Menu.jsx";
import Login from "./pages/login/Login.jsx";
import "./styles/global.css"

function App() {

    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menuContainer">
                        <Menu />
                    </div>
                    <div className="contentContainer">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
  const router = createBrowserRouter([
      {
          path: "/",
          element: <Layout/>,
          children: [
              {
                  path: "/",
                  element: <Home/>,
              },
              {
                  path: "courses",
                  element: <Courses/>,
              },
              {
                  path: "users",
                  element: <Users/>,
              },
              {
                  path: "login",
                  element: <Login />,
              },
          ]
      },

  ]);

  return <RouterProvider router={ router } />
}

export default App

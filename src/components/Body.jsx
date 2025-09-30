import React  from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  // since the header-page is always there/visible, so we call the useEffect() that checks the auth-state-change in Header.jsx component
  // if we keep it here in body, the navigate() won't work, because the body component is not inside the RouterProvider component, so it will throw error. So we have to keep it inside the RouterProvider component.

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

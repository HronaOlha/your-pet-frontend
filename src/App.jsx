import * as React from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { refreshUser } from "./redux/auth/auth-operations";

import NotFound from "./pages/NotFoundPage/NotFound";
import NoticesCategoriesList from "./modules/notices/components/NoticesCategoriesList/NoticesCategoriesList";
import { PrivateRoute } from "./protectedRouters/PrivateRoute";
import { RestrictedRoute } from "./protectedRouters/RestrictedRoute";
import Loader from "./shared/loader/Loader";

const SharedLayout = React.lazy(() =>
  import("./shared/components/SharedLayout/SharedLayout")
);
const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const NewsPage = React.lazy(() => import("./pages/NewsPage/NewsPage"));

const RegisterPage = React.lazy(() =>
  import("./pages/RegisterPage/RegisterPage")
);
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = React.lazy(() => import("./pages/NoticesPage/NoticesPage"));
const UserPage = React.lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = React.lazy(() => import("./pages/AddPetPage/AddPetPage"));

const OurFriends = React.lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const routes = [
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <MainPage /> },
        {
          path: "register",
          element: <RestrictedRoute component={RegisterPage} />,
        },
        { path: "login", element: <RestrictedRoute component={LoginPage} /> },
        { path: "friends", element: <OurFriends /> },
        { path: "news", element: <NewsPage /> },

        {
          path: "register",
          element: <RegisterPage />,
        },
        { path: "login", element: <LoginPage /> },
        {
          path: "notices",
          element: <NoticesPage />,
          children: [
            { index: true, path: "sell", element: <NoticesCategoriesList /> },
            { path: "lost-found", element: <NoticesCategoriesList /> },
            { path: "for-free", element: <NoticesCategoriesList /> },
            {
              path: "favorite",
              element: <NoticesCategoriesList />,
            },
            {
              path: "own",
              element: <NoticesCategoriesList />,
            },
          ],
        },
        { path: "user", element: <PrivateRoute component={UserPage} /> },
        { path: "add-pet", element: <PrivateRoute component={AddPetPage} /> },
        { path: "*", element: <NotFound /> }, // Not Found Route
      ],
    },
  ];
  return (
    <React.Suspense fallback={<Loader loading={true} />}>
      <RouterProvider router={createBrowserRouter(routes)} />
    </React.Suspense>
  );
};
export default App;

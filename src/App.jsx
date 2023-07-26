import * as React from "react";
// import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { refreshUser } from "./redux/auth/auth-operations";
import authSelectors from "./redux/auth/auth-selectors";
import NotFound from "./pages/NotFoundPage/NotFound";

const SharedLayout = React.lazy(() =>
  import("./shared/components/SharedLayout/SharedLayout")
);
const MainPage = React.lazy(() => import("./pages/MainPage/MainPage"));
const RegisterPage = React.lazy(() =>
  import("./pages/RegisterPage/RegisterPage")
);
const LoginPage = React.lazy(() => import("./pages/LoginPage/LoginPage"));
const NoticesPage = React.lazy(() => import("./pages/NoticesPage/NoticesPage"));
const UserPage = React.lazy(() => import("./pages/UserPage/UserPage"));
const AddPetPage = React.lazy(() => import("./pages/AddPetPage/AddPetPage"));
import NoticesCategoriesList from "./modules/notices/components/NoticesCategoriesList/NoticesCategoriesList";
import { Container } from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectRefreshing);

  React.useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const routes = [
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <MainPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "login", element: <LoginPage /> },
        {
          path: "notices/:categoryName",
          element: <NoticesPage />,
          children: [
            { index: true, element: <NoticesCategoriesList /> },
            // { path: "lost-found", element: <List /> },
            // { path: "for-free", element: <List /> },
          ],
        },
        { path: "user", element: <UserPage /> },
        { path: "add-pet", element: <AddPetPage /> },
        { path: "*", element: <NotFound /> }, // Not Found Route
      ],
    },
  ];

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {isRefreshing ? (
        <div>Вставить Спінер або щось що інформує про загрузку!</div>
      ) : (
        <Container>
          <RouterProvider router={createBrowserRouter(routes)} />
        </Container>
      )}
    </React.Suspense>
  );
};

export default App;

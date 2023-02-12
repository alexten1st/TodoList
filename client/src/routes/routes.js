import { Route, Routes } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import TodosList from "../components/TodosList/TodosList";

const AppRoutes = () => {
  const ROUTES = { ROOT: "/" };
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={`${ROUTES.ROOT}`} element={<TodosList />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };

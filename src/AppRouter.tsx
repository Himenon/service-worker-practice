import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./layout/Base";

const Top = React.lazy(() => import("./pages/Top.js"));
const Playground = React.lazy(() => import("./pages/Playground.js"));

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter basename="/service-worker-practice">
      <Routes>
        <Route path="/" element={<Base />}>
        <Route path="/" element={<Top />} />
        <Route path="/playground" element={<Playground />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

AppRouter.displayName = "AppRouter";

export default AppRouter;

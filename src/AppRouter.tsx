import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Top = React.lazy(() => import("./pages/Top.js"));

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </BrowserRouter>
  );
};

AppRouter.displayName = "AppRouter";

export default AppRouter;

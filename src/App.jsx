import "./App.css";
import { routes } from "./AppRoutes/AppRoutes";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </>
  );
}

export default App;

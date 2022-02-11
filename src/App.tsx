import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Header, Footer, MobileNavigation } from "components";
import routes from "routes";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="pb-16 md:pb-0 min-h-screen">
        <Routes>
          {routes.map(({ path, component: Component }) => (
            <Route key={path} element={<Component />} path={path} />
          ))}
        </Routes>
      </div>

      <Footer />
      <MobileNavigation />
    </div>
  );
}

export default App;

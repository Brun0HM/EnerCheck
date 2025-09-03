import React from "react";
import Header from "./components/Header";
import "./styles/main.scss"

const App = () => {
  return (
    <div>
      <Header />
      <div className={`mainContent`}>
      <div className="container mt-5 text-center d-flex flex-column align-items-center justify-content-center">
        <div>
          <p className="bg-primary text-light fw-semibold p-2 rounded-2">
            Conformidade com NBR 5410
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default App;

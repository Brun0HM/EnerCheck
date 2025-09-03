import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container-fluid mt-5 text-center d-flex flex-column align-items-center justify-content-center">
        <div>
          <p className="bg-primary text-light fw-semibold p-1 rounded-2 conformidade">
            Conformidade com NBR 5410
          </p>
        </div>
        <div className="container">
          <div>
            <h1 className="fw-bold display-3">
              Verificação Automatizada
              <br />
              de <span className="text-primary">Projetos Elétricos</span>
            </h1>
          </div>
          <div className="my-4">
            <span className="text-break fs-4">
              Transforme a análise de projetos elétricos com inteligência
              artificial. Relatórios <br /> detalhados de conformidade em
              minutos, reduzindo custos e aumentando a <br /> segurança.
            </span>
          </div>
          <div className="d-flex gap-3 justify-content-center">
            <button className="btn btn-dark fw-semibold">
              Experimente Agora
            </button>
            <button className="btn btn-outline-primary fw-semibold">
              Experimente Agora
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://placehold.co/900x900"
            alt="Hero Image"
            className="img-fluid mt-5"
          />
        </div>
      </div>
    </div>
  );
};

export default App;

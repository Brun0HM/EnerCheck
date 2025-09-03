import React from "react";
import "./App.css";
import Motivos from "./components/Motivos";

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
        <div className="mt-5">
          <h1 className="fw-bold fs-1">Por que escolher o EnerCheck?</h1>
          <p className="fs-4 text-secondary">
            Tecnologia de ponta para modernizar a verificação de projetos
            elétricos
          </p>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-3">
              <Motivos
                icon="bi bi-lightning-charge"
                title="análise instantânea"
                description="Upload de PDFs e receba relatórios detalhados em minutos, não em dias
              "
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Motivos
                icon="bi bi-shield"
                title="Conformidade NBR 5410"
                description="Verificação automática de conformidade com normas técnicas brasileiras"
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Motivos
                icon="bi bi-clock"
                title="Economia de tempo"
                description="Reduza o tempo de análise de semanas para minutos com IA avançada"
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Motivos
                description="Documentação completa com identificação de não conformidades"
                title="Relatórios detalhados"
                icon="bi bi-file-earmark-text"
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Motivos
                icon="bi bi-people"
                title="para profissionais"
                description="Ideal para engenheiros, construtoras e profissionais autônomos"
              />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Motivos
                icon="bi bi-award"
                title="Qualidade garantida"
                description="Redução significativa de erros e aumento da segurança das instalações"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

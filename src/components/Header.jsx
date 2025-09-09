import React, { useState } from "react";
import  "../styles/main.scss"

const Header = () => {
    const [MenuOpen, setMenuOpen] = useState(false);
  return (
    <header className={`container-fluid position-fixed fixed-top w-100  my-0 headerBlur`}>
 <div className="my-3 my-lg-5">
    <div className="row align-items-center">
      <div className="col-6 col-lg-auto">
        <div className="d-flex align-items-center ms-3 ms-lg-5">
          <div className="btn btn-dark text-light fw-bold">
            <i className="bi bi-lightning-charge "></i>
          </div>
          <h4 className="text-dark fw-bolder fs-3 ms-2 mb-0">Enercheck</h4>
        </div>
      </div>

      <div className="col-6 col-lg-auto ms-lg-auto">
        <nav className="navbar navbar-expand-lg p-0">
          <button
            className="navbar-toggler btn btn-dark fs-4 rounded-3 d-lg-none ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
              onClick={()=> setMenuOpen(!MenuOpen)}
            >
              <i className={`${MenuOpen ?"bi bi-x " : "bi bi-list" }`}></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav flex-column flex-lg-row ms-auto">
                <li className="nav-item">
                  <a
                    className="text-decoration-none text-dark mx-3 nav-link"
                    href="#"
                  >
                    Recursos
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="text-decoration-none text-dark mx-3 nav-link"
                    href="#"
                  >
                    Como Funciona
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="text-decoration-none text-dark mx-3 nav-link"
                    href="#"
                  >
                    Depoimentos
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-light border-black mx-3 my-1">
                    <a className="text-decoration-none text-dark" href="#">
                      Entrar
                    </a>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-dark mx-3 my-1">
                    <a className="text-decoration-none text-light" href="#">
                      Experimente Grátis!
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;

"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";

const Formulaire = () => {
  return (
    <div id="root" style={{ backgroundColor: "white" }}>
      <Sidebar activeClassName="dashboard" />
      <div className="page-wrapper">
        <div className="col-md-9 mx-auto">
          <div className="card" style={{ border: "none" }}>
            <div className="card-body">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    href="#bottom-justified-tab1"
                    data-bs-toggle="tab"
                  >
                    Info du Patient
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#bottom-justified-tab2"
                    data-bs-toggle="tab"
                  >
                    Données Cliniques
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#bottom-justified-tab3"
                    data-bs-toggle="tab"
                  >
                    Inviter des Médecins
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    href="#bottom-justified-tab4"
                    data-bs-toggle="tab"
                  >
                    Consentement
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane show active"
                  id="bottom-justified-tab1"
                ></div>
                <div className="tab-pane" id="bottom-justified-tab2">
                  Tab content 2
                </div>
                <div className="tab-pane" id="bottom-justified-tab3">
                  Tab content 3
                </div>
                <div className="tab-pane" id="bottom-justified-tab4">
                  Tab content 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formulaire;

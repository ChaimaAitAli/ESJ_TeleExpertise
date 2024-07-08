"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import Select from "react-select";
import MyFileInput from "@components/MyFileInput";

const Formulaire = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [Cas, setCas] = useState([
    { value: 2, label: "Atteint d'une maladie rare" },
    { value: 3, label: "Atteint d'une affection Longue Durée" },
    { value: 4, label: "En détention" },
    { value: 5, label: "Patient vivant en zone médiocre " },
    { value: 6, label: "Autre (à préciser en description)" },
  ]);
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
                    Info Générales
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
                >
                  <div className="col-md-14">
                    <div className="card-box">
                      <div className="card-titles">
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Info Générales
                        </h4>
                        <h4
                          className="card-title"
                          style={{ marginBottom: "50px", color: "#BDC0E3" }}
                        >
                          Remplissons les informations de base sur le patient et
                          la discussion
                        </h4>
                      </div>
                      <form action="#">
                        <div className="row">
                          <div className="col-md-5 mx-auto">
                            <label className="col-md-6 col-form-label">
                              Prénom du Patient
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <label className="col-md-3 col-form-label">
                              Sexe
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="gender_male"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="gender_male"
                                  >
                                    Male
                                  </label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="gender"
                                    id="gender_female"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="gender_female"
                                  >
                                    Femelle
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <label className="col-md-6 col-form-label">
                              Nom du Patient
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <label className="col-md-6 col-form-label">
                              Age du Patient
                            </label>
                            <div className="form-group row">
                              <div className="col-md-9">
                                <input type="number" className="form-control" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <label className="col-md-10 col-form-label">
                            Cas du Patient
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <Select
                                defaultValue={selectedOption}
                                onChange={setSelectedOption}
                                options={Cas}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <label className="col-form-label col-md-6">
                            Titre de la Discussion
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Titre"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-10 mx-auto">
                          <label className="col-form-label col-md-6">
                            Motif de Discussion
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <textarea
                                rows={5}
                                cols={5}
                                className="form-control"
                                placeholder="Détaillez la raison pour laquelle vous voulez créer cette discussion"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="text-end">
                          <button type="submit" className="btn btn-primary">
                            Suivant
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="bottom-justified-tab2">
                  <div className="col-md-14">
                    <div className="card-box">
                      <div className="card-titles">
                        <h4
                          className="card-title"
                          style={{
                            marginBottom: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          Données Cliniques
                        </h4>
                        <h4
                          className="card-title"
                          style={{ marginBottom: "50px", color: "#BDC0E3" }}
                        >
                          Importez tout fichier qui serait utile aux autres
                          medecins
                        </h4>
                      </div>
                      <form action="#">
                        <div className="col-md-10 mx-auto">
                          <label className="col-form-label col-md-6">
                            Eventuels Traitements
                          </label>
                          <div className="form-group row">
                            <div className="custom-width-11-5">
                              <textarea
                                rows={5}
                                cols={5}
                                className="form-control"
                                placeholder="Traitements"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <MyFileInput />
                        <div className="text-end">
                          <button type="submit" className="btn btn-primary">
                            Suivant
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
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

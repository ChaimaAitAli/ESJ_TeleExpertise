"use client";
import "@assets/css/style.css";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PrintableComponent from "../../components/CompteRendu";
import Select from "react-select";

const Report = () => {
  const componentRef = useRef();
  const [title, setTitle] = useState("Rapport de Télé-expertise");
  const [description, setDescription] = useState("lorem ipsum");
  const [patientName, setPatientName] = useState("lorem ipsum");
  const [patientLastName, setPatientLastName] = useState("lorem ipsum");
  const [patientDOB, setPatientDOB] = useState("lorem ipsum");
  const [patientID, setPatientID] = useState("lorem ipsum");
  const [patientCIN, setPatientCIN] = useState("lorem ipsum");
  const [patientMassar, setPatientMassar] = useState("lorem ipsum");
  const [caseCreation, setCaseCreation] = useState("lorem ipsum");
  const [caseClosure, setCaseClosure] = useState("lorem ipsum");
  const [requestingDoctorName, setRequestingDoctorName] =
    useState("lorem ipsum");
  const [requestingDoctorLastName, setRequestingDoctorLastName] =
    useState("lorem ipsum");
  const [requestingDoctorWorkplace, setRequestingDoctorWorkplace] =
    useState("lorem ipsum");
  const [requestingDoctorSpecialty, setRequestingDoctorSpecialty] =
    useState("lorem ipsum");
  const [consultedDoctorName, setConsultedDoctorName] = useState("lorem ipsum");
  const [consultedDoctorLastName, setConsultedDoctorLastName] =
    useState("lorem ipsum");
  const [consultedDoctorWorkplace, setConsultedDoctorWorkplace] =
    useState("lorem ipsum");
  const [consultedDoctorSpecialty, setConsultedDoctorSpecialty] =
    useState("lorem ipsum");
  const [discussion, setDiscussion] = useState("lorem ipsum");
  const [conclusion, setConclusion] = useState("lorem ipsum");

  const handleExport = async () => {
    const element = componentRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: true,
      allowTaint: false,
      scrollX: 0,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("tele_expertise_report.pdf");
  };

  return (
    <>
      <Sidebar activeClassName="chat" />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Disscusions</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <FeatherIcon icon="chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">CompteRendu</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          href="#basictab1"
                          data-bs-toggle="tab"
                        >
                          Rédiger
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#basictab2"
                          data-bs-toggle="tab"
                        >
                          Télécharger le PDF
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="basictab1">
                        <div className="form-group">
                          <label htmlFor="description">
                            Description clinique:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="patientName">Nom du patient:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="patientName"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="patientLastName">
                            Prénom du patient:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="patientLastName"
                            value={patientLastName}
                            onChange={(e) => setPatientLastName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="patientDOB">Date de naissance:</label>
                          <input
                            type="date"
                            className="form-control"
                            id="patientDOB"
                            value={patientDOB}
                            onChange={(e) => setPatientDOB(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="patientID">Identifiant:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="patientID"
                            value={patientID}
                            onChange={(e) => setPatientID(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="patientCIN">CIN:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="patientCIN"
                            value={patientCIN}
                            onChange={(e) => setPatientCIN(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="patientMassar">Code Massar:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="patientMassar"
                            value={patientMassar}
                            onChange={(e) => setPatientMassar(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="caseCreation">Création de cas:</label>
                          <input
                            type="date"
                            className="form-control"
                            id="caseCreation"
                            value={caseCreation}
                            onChange={(e) => setCaseCreation(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="caseClosure">Clôture de cas:</label>
                          <input
                            type="date"
                            className="form-control"
                            id="caseClosure"
                            value={caseClosure}
                            onChange={(e) => setCaseClosure(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="requestingDoctorName">
                            Nom du médecin requérant:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requestingDoctorName"
                            value={requestingDoctorName}
                            onChange={(e) =>
                              setRequestingDoctorName(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="requestingDoctorLastName">
                            Prénom du médecin requérant:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requestingDoctorLastName"
                            value={requestingDoctorLastName}
                            onChange={(e) =>
                              setRequestingDoctorLastName(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="requestingDoctorWorkplace">
                            Lieu de travail:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requestingDoctorWorkplace"
                            value={requestingDoctorWorkplace}
                            onChange={(e) =>
                              setRequestingDoctorWorkplace(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="requestingDoctorSpecialty">
                            Spécialité:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="requestingDoctorSpecialty"
                            value={requestingDoctorSpecialty}
                            onChange={(e) =>
                              setRequestingDoctorSpecialty(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="consultedDoctorName">
                            Nom du médecin sollicité:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="consultedDoctorName"
                            value={consultedDoctorName}
                            onChange={(e) =>
                              setConsultedDoctorName(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="consultedDoctorLastName">
                            Prénom du médecin sollicité:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="consultedDoctorLastName"
                            value={consultedDoctorLastName}
                            onChange={(e) =>
                              setConsultedDoctorLastName(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="consultedDoctorWorkplace">
                            Lieu de travail:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="consultedDoctorWorkplace"
                            value={consultedDoctorWorkplace}
                            onChange={(e) =>
                              setConsultedDoctorWorkplace(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="consultedDoctorSpecialty">
                            Spécialité:
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="consultedDoctorSpecialty"
                            value={consultedDoctorSpecialty}
                            onChange={(e) =>
                              setConsultedDoctorSpecialty(e.target.value)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="discussion">Discussion:</label>
                          <textarea
                            className="form-control"
                            id="discussion"
                            value={discussion}
                            onChange={(e) => setDiscussion(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="conclusion">
                            Conclusion et recommandation:
                          </label>
                          <textarea
                            className="form-control"
                            id="conclusion"
                            value={conclusion}
                            onChange={(e) => setConclusion(e.target.value)}
                          ></textarea>
                        </div>
                      </div>
                      <div className="tab-pane" id="basictab2">
                        <div>
                          <button
                            onClick={handleExport}
                            type="button"
                            className="btn btn-primary"
                          >
                            Télécharger le rapport
                          </button>

                          <PrintableComponent
                            ref={componentRef}
                            title={title}
                            description={description}
                            patientName={patientName}
                            patientLastName={patientLastName}
                            patientDOB={patientDOB}
                            patientID={patientID}
                            patientCIN={patientCIN}
                            patientMassar={patientMassar}
                            caseCreation={caseCreation}
                            caseClosure={caseClosure}
                            requestingDoctorName={requestingDoctorName}
                            requestingDoctorLastName={requestingDoctorLastName}
                            requestingDoctorWorkplace={
                              requestingDoctorWorkplace
                            }
                            requestingDoctorSpecialty={
                              requestingDoctorSpecialty
                            }
                            consultedDoctorName={consultedDoctorName}
                            consultedDoctorLastName={consultedDoctorLastName}
                            consultedDoctorWorkplace={consultedDoctorWorkplace}
                            consultedDoctorSpecialty={consultedDoctorSpecialty}
                            discussion={discussion}
                            conclusion={conclusion}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Report;

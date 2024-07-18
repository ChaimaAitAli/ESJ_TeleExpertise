"use client";
import "@assets/css/style.css";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CompteRendu from "../../components/CompteRendu";
import Select from "react-select";
const Report = () => {
  const componentRef = useRef();
  const [title, setTitle] = useState("Rapport de Télé-expertise");
  const [description, setDescription] = useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  );
  const [patientName, setPatientName] = useState("Hicham");
  const [patientLastName, setPatientLastName] = useState("Hicham");
  const [patientDOB, setPatientDOB] = useState("1985-05-20");
  const [date, setDate] = useState("2024-07-14");
  const [time, setTime] = useState("10:00 AM");
  const [mainDoctor, setMainDoctor] = useState("Dr. Hicham");
  const [invitedDoctors, setInvitedDoctors] = useState([
    "Dr. Chaima",
    "Dr. Mohammed",
    "lil uzi",
  ]);

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
                          Write
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href="#basictab2"
                          data-bs-toggle="tab"
                        >
                          Export PDF
                        </Link>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className="tab-pane show active" id="basictab1">
                        <div className="form-group">
                          <label htmlFor="description">Description:</label>
                          <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          />
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

                          <CompteRendu
                            ref={componentRef}
                            title={title}
                            description={description}
                            patientName={patientName}
                            patientLastName={patientLastName}
                            patientDOB={patientDOB}
                            date={date}
                            time={time}
                            mainDoctor={mainDoctor}
                            invitedDoctors={invitedDoctors}
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

"use client";
import "@assets/css/style.css";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CompteRendu from "../../components/CompteRendu";
const Report = () => {
  const componentRef = useRef();

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
            <button
              onClick={handleExport}
              type="button"
              className="btn btn-primary"
            >
              Export to PDF
            </button>
            <CompteRendu
              ref={componentRef}
              title="Rapport de Télé-expertise"
              description="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              patientName="John"
              patientLastName="Doe"
              date="2024-07-14"
              time="10:00 AM"
              mainDoctor="Dr. John Doe"
              invitedDoctors={["Dr. Jane Smith", "Dr. Alex Johnson"]}
            />
          </div>
        </div>
      </>
    </>
  );
};

export default Report;

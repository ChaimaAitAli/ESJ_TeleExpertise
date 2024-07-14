"use client";
import "@assets/css/style.css";
import { useEffect, useState, useRef } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import CompteRendu from "../../components/CompteRendu";
const Report = () => {
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
            <CompteRendu
              title="Tele-expertise Report"
              description="Detailed discussion between doctors regarding patient case."
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

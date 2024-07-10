"use client";
import "@assets/css/style.css";
import { useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  ProfileUser,
  call,
  call01,
  call02,
  call03,
  callicon1,
  callicon2,
  callicon3,
  chaticon1,
  chaticon2,
  chaticon3,
  plusicon,
  videoicon1,
  videoicon2,
  videoicon3,
} from "@components/imagepath";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

const AppelVideo = () => {
  return (
    <div id="root">
      <Sidebar activeClassName="discussions" />
      <div className="page-wrapper">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/Discussions">Discussions </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <FeatherIcon icon="chevron-right" />
                  </li>
                  <li className="breadcrumb-item active">Appel Video</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*Page Header*/}
      </div>
    </div>
  );
};

export default AppelVideo;

"use client";
import "@assets/css/style.css";
import { useMemo, useEffect, useState } from "react";
import Sidebar from "@components/Sidebar";
import Link from "next/link";
import Image from "next/image";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { searchnormal } from "../../components/imagepath";
import Table from "@components/Table";

const Medecins = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Nom",
        accessor: "name",
      },

      {
        Header: "Spécialité",
        accessor: "speciality",
      },
      {
        Header: "Email",
        accessor: "email",
      },

      {
        Header: "",
        accessor: "actions",
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        name: "Ahmed El Mansouri",
        speciality: "Cardiologie",
        specialization: "Insuffisance cardiaque",
        degree: "MD, PhD",
        mobile: "+212 6 12 34 56 78",
        email: "ahmed.elmansouri@example.com",
        joiningDate: "05.06.2021",
      },
      {
        name: "Fatima Zahra Amrani",
        speciality: "Neurologie",
        specialization: "Épilepsie",
        degree: "MD, MS",
        mobile: "+212 6 23 45 67 89",
        email: "fatima.amrani@example.com",
        joiningDate: "12.03.2020",
      },
      {
        name: "Ali Benchekroun",
        speciality: "Pédiatrie",
        specialization: "Néonatologie",
        degree: "MBBS, MD",
        mobile: "+212 6 34 56 78 90",
        email: "ali.benchekroun@example.com",
        joiningDate: "20.08.2019",
      },
      {
        name: "Leila El Haddad",
        speciality: "Orthopédie",
        specialization: "Remplacement articulaire",
        degree: "MD, MS",
        mobile: "+212 6 45 67 89 01",
        email: "leila.elhaddad@example.com",
        joiningDate: "15.01.2018",
      },
      {
        name: "Khalid Bouzid",
        speciality: "Dermatologie",
        specialization: "Dermatologie cosmétique",
        degree: "MD, FAAD",
        mobile: "+212 6 56 78 90 12",
        email: "khalid.bouzid@example.com",
        joiningDate: "10.04.2022",
      },
      {
        name: "Rachida El Youssfi",
        speciality: "Gastroentérologie",
        specialization: "Hépatologie",
        degree: "MBBS, MD",
        mobile: "+212 6 67 89 01 23",
        email: "rachida.elyoussfi@example.com",
        joiningDate: "25.11.2017",
      },
      {
        name: "Omar Fassi",
        speciality: "Oncologie",
        specialization: "Cancer du sein",
        degree: "MD, MS",
        mobile: "+212 6 78 90 12 34",
        email: "omar.fassi@example.com",
        joiningDate: "30.09.2020",
      },
      {
        name: "Nadia Benjelloun",
        speciality: "Endocrinologie",
        specialization: "Diabète",
        degree: "MD, PhD",
        mobile: "+212 6 89 01 23 45",
        email: "nadia.benjelloun@example.com",
        joiningDate: "18.07.2019",
      },
      {
        name: "Samir Toumi",
        speciality: "Rhumatologie",
        specialization: "Arthrite",
        degree: "MBBS, MD",
        mobile: "+212 6 90 12 34 56",
        email: "samir.toumi@example.com",
        joiningDate: "22.02.2018",
      },
      {
        name: "Zineb El Kharraz",
        speciality: "Pneumologie",
        specialization: "Asthme",
        degree: "MD, MS",
        mobile: "+212 6 01 23 45 67",
        email: "zineb.elkharraz@example.com",
        joiningDate: "14.11.2021",
      },
      {
        name: "Hassan El Bacha",
        speciality: "Néphrologie",
        specialization: "Insuffisance rénale",
        degree: "MD, PhD",
        mobile: "+212 6 12 34 56 78",
        email: "hassan.elbacha@example.com",
        joiningDate: "03.05.2020",
      },
      {
        name: "Amina El Habib",
        speciality: "Ophtalmologie",
        specialization: "Chirurgie réfractive",
        degree: "MD, MS",
        mobile: "+212 6 23 45 67 89",
        email: "amina.elhabib@example.com",
        joiningDate: "17.06.2019",
      },
      {
        name: "Mohamed El Idrissi",
        speciality: "Psychiatrie",
        specialization: "Troubles de l'humeur",
        degree: "MBBS, MD",
        mobile: "+212 6 34 56 78 90",
        email: "mohamed.elidrissi@example.com",
        joiningDate: "01.02.2021",
      },
      {
        name: "Sofia Bensouda",
        speciality: "Gynécologie",
        specialization: "Obstétrique",
        degree: "MD, MS",
        mobile: "+212 6 45 67 89 01",
        email: "sofia.bensouda@example.com",
        joiningDate: "11.07.2018",
      },
      {
        name: "Youssef El Alami",
        speciality: "Chirurgie",
        specialization: "Chirurgie générale",
        degree: "MD, PhD",
        mobile: "+212 6 56 78 90 12",
        email: "youssef.elalami@example.com",
        joiningDate: "28.09.2020",
      },
      {
        name: "Jean Dupont",
        speciality: "Cardiologie",
        specialization: "Insuffisance cardiaque",
        degree: "MD, PhD",
        mobile: "+33 6 12 34 56 78",
        email: "jean.dupont@example.com",
        joiningDate: "05.06.2021",
      },
      {
        name: "Marie Lefèvre",
        speciality: "Neurologie",
        specialization: "Épilepsie",
        degree: "MD, MS",
        mobile: "+33 6 23 45 67 89",
        email: "marie.lefevre@example.com",
        joiningDate: "12.03.2020",
      },
      {
        name: "Alice Martin",
        speciality: "Pédiatrie",
        specialization: "Néonatologie",
        degree: "MBBS, MD",
        mobile: "+33 6 34 56 78 90",
        email: "alice.martin@example.com",
        joiningDate: "20.08.2019",
      },
      {
        name: "Robert Bernard",
        speciality: "Orthopédie",
        specialization: "Remplacement articulaire",
        degree: "MD, MS",
        mobile: "+33 6 45 67 89 01",
        email: "robert.bernard@example.com",
        joiningDate: "15.01.2018",
      },
      {
        name: "Catherine Dubois",
        speciality: "Dermatologie",
        specialization: "Dermatologie cosmétique",
        degree: "MD, FAAD",
        mobile: "+33 6 56 78 90 12",
        email: "catherine.dubois@example.com",
        joiningDate: "10.04.2022",
      },
      {
        name: "David Moreau",
        speciality: "Gastroentérologie",
        specialization: "Hépatologie",
        degree: "MBBS, MD",
        mobile: "+33 6 67 89 01 23",
        email: "david.moreau@example.com",
        joiningDate: "25.11.2017",
      },
      {
        name: "Émilie Petit",
        speciality: "Oncologie",
        specialization: "Cancer du sein",
        degree: "MD, MS",
        mobile: "+33 6 78 90 12 34",
        email: "emilie.petit@example.com",
        joiningDate: "30.09.2020",
      },
      {
        name: "François Leroy",
        speciality: "Endocrinologie",
        specialization: "Diabète",
        degree: "MD, PhD",
        mobile: "+33 6 89 01 23 45",
        email: "francois.leroy@example.com",
        joiningDate: "18.07.2019",
      },
      {
        name: "Grace Lemoine",
        speciality: "Rhumatologie",
        specialization: "Arthrite",
        degree: "MBBS, MD",
        mobile: "+33 6 90 12 34 56",
        email: "grace.lemoine@example.com",
        joiningDate: "22.02.2018",
      },
      {
        name: "Henri Marchand",
        speciality: "Pneumologie",
        specialization: "Asthme",
        degree: "MD, MS",
        mobile: "+33 6 01 23 45 67",
        email: "henri.marchand@example.com",
        joiningDate: "14.11.2021",
      },
    ],
    []
  );

  const [filteredData, setFilteredData] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const result = data.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.speciality.toLowerCase().includes(search.toLowerCase()) ||
        item.specialization.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(result);
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <Sidebar activeClassName="doctors" />
      <>
        <div className="page-wrapper">
          <div className="content">
            {/* Page Header */}
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Page d'accueil </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <FeatherIcon icon="chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Médecins</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /Page Header */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table show-entire">
                  <div className="card-body">
                    {/* Table Header */}
                    <div className="page-table-header mb-2">
                      <div className="row align-items-center">
                        <div className="col">
                          <div className="doctor-table-blk">
                            {/* <h3>Médecins ou Spécialité</h3> */}
                            <div className="doctor-search-blk">
                              <div className="top-nav-search table-search-blk">
                                <form className="d-flex">
                                  <input
                                    type="text"
                                    value={search}
                                    onChange={handleSearch}
                                    className="form-control"
                                    placeholder="chercher ici"
                                  />
                                  <div className="btn">
                                    <Image src={searchnormal} alt="#" />
                                  </div>
                                </form>
                              </div>
                              {/* <div className="add-group">
                                <Link
                                  href="/"
                                  className="btn btn-primary add-pluss ms-2"
                                >
                                  <Image src={plusicon} alt="#" />
                                </Link>
                                <Link
                                  href="/"
                                  className="btn btn-primary doctor-refresh ms-2"
                                >
                                  <Image src={refreshicon} alt="#" />
                                </Link>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Table Header */}
                    {/* Table*/}
                    <div className="table-responsive ">
                      <Table columns={columns} data={filteredData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Page Header */}
          </div>
        </div>
      </>
    </>
  );
};

export default Medecins;

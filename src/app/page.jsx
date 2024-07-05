import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.min.css";
import "../assets/css/feather.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <>
      <Sidebar activeClassName="dashboard" />
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
                    <li className="breadcrumb-item active">tableau de bord</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Home;

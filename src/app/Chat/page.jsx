import Sidebar from "@components/Sidebar";
import "@assets/css/style.css";
import Link from "next/link";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
const Chat = () => {
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
                      <Link href="/">Page d'accueil </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <FeatherIcon icon="chevron-right" />
                    </li>
                    <li className="breadcrumb-item active">Chat</li>
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

export default Chat;

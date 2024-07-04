import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/feather.css";
import Header from "../components/Header";
export const metadeta = {
  title: "TéléExpertise",
  description:
    "Connecter les médecins pour des soins meilleurs et plus rapides",
};
const Rootlayout = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
};
export default Rootlayout;

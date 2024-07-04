import "@styles/global.css";
import Nav from "@components/Nav";
export const metadeta = {
  title: "TéléExpertise",
  description:
    "Connecter les médecins pour des soins meilleurs et plus rapides",
};
const Rootlayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};
export default Rootlayout;

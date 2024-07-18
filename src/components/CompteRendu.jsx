import React from "react";

const PrintableComponent = React.forwardRef((props, ref) => {
  const {
    title,
    description,
    patientName,
    patientLastName,
    patientDOB,
    date,
    time,
    mainDoctor,
    invitedDoctors,
  } = props;

  return (
    <div
      ref={ref}
      style={{
        padding: "20mm",
        background: "white",
        width: "210mm",
        minHeight: "297mm",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        fontSize: "12pt",
        lineHeight: "1.5",
        color: "#333",
      }}
    >
      <style>
        {`
          @media print {
            @page {
              size: A4;
              margin: 0;
            }
            body {
              -webkit-print-color-adjust: exact;
            }
            .printable-component {
              width: 210mm;
              min-height: 297mm;
              margin: 0;
              padding: 20mm;
              box-sizing: border-box;
            }
          }
          @media screen and (max-width: 1200px) {
            .printable-component {
              padding: 15mm;
              font-size: 11pt;
            }
          }
          @media screen and (max-width: 992px) {
            .printable-component {
              padding: 10mm;
              font-size: 10pt;
            }
          }
          @media screen and (max-width: 768px) {
            .printable-component {
              padding: 5mm;
              font-size: 9pt;
            }
          }
          @media screen and (max-width: 576px) {
            .printable-component {
              padding: 2mm;
              font-size: 8pt;
            }
          }
        `}
      </style>
      <div className="printable-component">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "2px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "16pt" }}>{title}</h1>
          <div style={{ textAlign: "right" }}>
            <h2 style={{ fontSize: "14pt", margin: 0 }}>e-ESJ</h2>
          </div>
        </div>
        <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
          Informations sur le patient
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Nom
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {patientName} {patientLastName}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Date de naissance
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {patientDOB}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Date de la télé-expertise
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {date}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Heure
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {time}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Médecin Principal
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {mainDoctor}
              </td>
              <td
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  backgroundColor: "#f5f5f5",
                }}
              >
                Médecins Invités
              </td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>
                {invitedDoctors.join(", ")}
              </td>
            </tr>
          </tbody>
        </table>
        <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
          Description du Cas
        </h2>
        <p style={{ marginBottom: "20px" }}>{description}</p>
        <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
          Recommandations
        </h2>
        <p style={{ marginBottom: "20px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eius
          ipsum quisquam officiis, vero exercitationem quaerat corporis.
          Dignissimos itaque aperiam, aliquid aut perspiciatis distinctio
          possimus, fugiat consectetur nemo quo quam.
        </p>
        <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
          Notes Supplémentaires
        </h2>
        <p style={{ marginBottom: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          natus ipsa voluptate dolorem. Animi optio velit voluptatibus dolores
          ducimus necessitatibus quod est qui facilis, nostrum praesentium ea
          enim recusandae modi.
        </p>
        <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
          Discussion et Conclusion
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quo eum
          iure nam tenetur porro molestiae atque voluptatem corporis quas! Illo
          sed cupiditate alias autem eveniet? Pariatur sed repudiandae alias
          repellat.
        </p>
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            fontSize: "10pt",
            color: "#888",
          }}
        ></div>
      </div>
    </div>
  );
});

export default PrintableComponent;

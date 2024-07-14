import React from "react";

const PrintableComponent = React.forwardRef((props, ref) => {
  const {
    title,
    description,
    patientName,
    patientLastName,
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
          <h2 style={{ fontSize: "14pt", margin: 0 }}>
            Saint Elizabeth Hospital
          </h2>
        </div>
      </div>
      <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
        Patient Demographics
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
              Name
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
              Date
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{date}</td>
          </tr>
          <tr>
            <td
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                backgroundColor: "#f5f5f5",
              }}
            >
              Time
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>{time}</td>
            <td
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                backgroundColor: "#f5f5f5",
              }}
            >
              Main Doctor
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              {mainDoctor}
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
              Invited Doctors
            </td>
            <td
              style={{ border: "1px solid #ccc", padding: "8px" }}
              colSpan="3"
            >
              sd
            </td>
          </tr>
        </tbody>
      </table>
      <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
        Discussion Points
      </h2>
      <p style={{ marginBottom: "20px" }}>{description}</p>
      <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>Conclusions</h2>
      <p style={{ marginBottom: "20px" }}>Conclusion details go here...</p>
      <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
        Recommendations
      </h2>
      <p style={{ marginBottom: "20px" }}>Recommendation details go here...</p>
      <h2 style={{ fontSize: "14pt", marginBottom: "10px" }}>
        Additional Notes
      </h2>
      <p>Any additional notes go here...</p>
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "10pt",
          color: "#888",
        }}
      >
        <p>+1 800-765-7678 // 1500 San Pablo Street</p>
      </div>
    </div>
  );
});

export default PrintableComponent;

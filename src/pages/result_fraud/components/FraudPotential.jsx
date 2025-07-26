import React from "react";
import { Button } from "react-bootstrap";

export default function FraudPotential({ fraudCount, totalChecks, conclusion }) {
  const isFraud = fraudCount > 0;
  const backgroundColor = isFraud ? "#E613221A" : "#EDF4FF";

  return (
    <div
      style={{
        backgroundColor,
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h3>Potensi Penipuan: ({fraudCount}/{totalChecks})</h3>
      <p>{conclusion}</p>
      {isFraud && (
        <a  className='btn btn-danger' href="https://iasc.ojk.go.id/report-now">Laporkan ke IASC (OJK)</a>
      )}
    </div>
  );
}

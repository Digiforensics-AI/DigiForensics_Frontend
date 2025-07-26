import React from "react";

export default function FraudSection({ id, imgSrc, title, description, validitas }) {
  const backgroundColor = validitas === "FRAUD" ? "#E613221A" : "#EDF4FF";

  return (
    <section
      id={id}
      style={{
        backgroundColor,
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "20px",
        paddingBottom: "44px",
        height: "267px",
      }}
    >
      <img src={imgSrc} width={70} height={70} className="img-fluid" alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </section>
  );
}
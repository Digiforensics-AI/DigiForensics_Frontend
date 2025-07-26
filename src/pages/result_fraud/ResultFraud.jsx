import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import Identitas from "../../assets/identitas.png";
import Validitas from "../../assets/validitas.png";
import Jaringan from "../../assets/jaringan.png";
import FraudSection from "./components/FraudSection";
import FraudPotential from "./components/FraudPotential";
import './style/result_fraud.css';
import { useLocation, useNavigate } from "react-router-dom";
import NavComponents from "../../global/NavComponents";
import Footer from "../../global/Footer";

export default function ResultFraud() {
  const location = useLocation();
  const navigate = useNavigate();

  const kesimpulan = location.state?.result?.kesimpulan;

  if (!kesimpulan) {
    return (
      <div className="text-center mt-5">
        <h2>Data tidak tersedia</h2>
        <Button onClick={() => navigate("/")}>Kembali</Button>
      </div>
    );
  }

  // Hitung fraudCount secara otomatis
  const fraudCount = Object.entries(kesimpulan).filter(
    ([key, value]) =>
      key !== "temuan_utama" && key !== "id" && value === "FRAUD"
  ).length;

  const totalChecks = Object.entries(kesimpulan).filter(
    ([key]) => key !== "temuan_utama" && key !== "id"
  ).length;

  const sectionData = [
    {
      id: "validitas",
      imgSrc: Validitas,
      title: "Validitas Informasi",
      description: "Informasi ini tidak dapat diverifikasi sumbernya. Disebutkan terkait Shopee, namun tidak ditemukan di kanal resmi yang bersangkutan.",
      validitas: kesimpulan.validitas_informasi,
    },
    {
      id: "identitas",
      imgSrc: Identitas,
      title: "Identitas Akun",
      description: "Akun ini terindikasi menggunakan identitas yang pernah dilaporkan sebagai penipu.",
      validitas: kesimpulan.identitas_akun,
    },
    {
      id: "jaringan",
      imgSrc: Jaringan,
      title: "Jaringan Akun",
      description: "Akun ini terindikasi memiliki keterkaitan dengan akun yang teridentifikasi sebagai penipu atau tidak memiliki hubungan dengan akun resmi terkait.",
      validitas: kesimpulan.jaringan_akun,
    },
  ];

  return (
    <>
    <NavComponents />
     <div className="result-fraud">
      <h1 className="text-center">Hasil Deteksi Penipuan</h1>
      <Row>
        {sectionData.map((section) => (
          <Col lg="4" key={section.id}>
            <FraudSection {...section} />
          </Col>
        ))}
      </Row>
      <FraudPotential
        fraudCount={fraudCount}
        totalChecks={totalChecks}
        conclusion={kesimpulan.temuan_utama}
      />
    </div>
    <Footer />
    </>
   
  );
}

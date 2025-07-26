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
    description:
      kesimpulan.validitas_informasi === "FRAUD"
        ? "Informasi yang dibagikan tidak dapat diverifikasi kebenarannya. Terdapat penyebutan terkait Shopee, namun belum ditemukan pada sumber resmi terkait."
        : "Belum ditemukan indikasi bahwa informasi ini berasal dari sumber yang tidak valid.",
    validitas: kesimpulan.validitas_informasi,
  },
  {
    id: "identitas",
    imgSrc: Identitas,
    title: "Identitas Akun",
    description:
      kesimpulan.identitas_akun === "FRAUD"
        ? "Akun ini memiliki kemiripan dengan identitas yang sebelumnya pernah dikaitkan dengan aktivitas mencurigakan atau pelaporan penipuan."
        : "Belum ditemukan indikasi penyalahgunaan identitas pada akun ini.",
    validitas: kesimpulan.identitas_akun,
  },
  {
    id: "jaringan",
    imgSrc: Jaringan,
    title: "Jaringan Akun",
    description:
      kesimpulan.jaringan_akun === "FRAUD"
        ? "Akun ini memiliki keterkaitan dengan akun lain yang sebelumnya telah teridentifikasi sebagai tidak resmi atau berisiko tinggi."
        : "Tidak terdeteksi adanya keterkaitan akun dengan jaringan yang terindikasi berisiko.",
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

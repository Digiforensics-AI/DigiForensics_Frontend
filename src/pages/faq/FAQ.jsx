import React, { useState } from "react";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import ActiveIcon from "../../assets/active.png"; // Import active icon
import InactiveIcon from "../../assets/in_active.png"; // Import inactive icon
import "./style/faq.css";
import NavComponents from "../../global/NavComponents";
import Footer from "../../global/Footer";

export default function FAQ() {
  const [activeKey, setActiveKey] = useState(["0", "1", "2", "3"]); // Open all states by default

  const handleToggle = (key) => {
    if (activeKey.includes(key)) {
      setActiveKey(activeKey.filter((k) => k !== key)); // Close the accordion item
    } else {
      setActiveKey([...activeKey, key]); // Open the accordion item
    }
  };

  return (
    <>
    <NavComponents />
       <section className="faq-container py-5">
      <Row>
        <Col md={3} className="faq-title">
          <h2>Pertanyaan yang Sering Diajukan</h2>
        </Col>
        <Col md={9}>
          <Accordion activeKey={activeKey}>
            <Accordion.Item eventKey="0">
              <Accordion.Header onClick={() => handleToggle("0")}>
                <span>Apa itu fitur Deteksi Penipuan?</span>
              </Accordion.Header>
              <Accordion.Body>
                Deteksi Penipuan adalah proses mendeteksi berbagai aktivitas mencurigakan atau tidak wajar yang dapat mengindikasikan adanya penipuan atau penyalahgunaan sistem. Proses ini bertujuan untuk mencegah terjadinya kejahatan keuangan dengan memanfaatkan seluruh data yang tersedia secara optimal, serta didukung oleh teknologi Artificial Intelligence (AI) untuk menghasilkan deteksi yang lebih cepat, akurat, dan efisien.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={() => handleToggle("1")}>
                <span>Bagaimana cara kerja Deteksi Penipuan?</span>
              </Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>
                    <strong>Validasi Informasi:</strong> Sistem memverifikasi kebenaran dan keakuratan informasi yang diterima. Proses ini dilakukan dengan menelusuri berbagai sumber terbuka dan kredibel untuk mencari fakta-fakta pendukung yang relevan.
                  </li>
                  <li>
                    <strong>Pengenalan Identitas Akun:</strong> Sistem akan mengidentifikasi nomor telepon yang terlibat. Data dari berbagai sumber digunakan untuk melihat apakah akun tersebut pernah dilaporkan sebagai mencurigakan atau memiliki reputasi negatif di kalangan pengguna.
                  </li>
                  <li>
                    <strong>Pemetaan Jaringan Akun:</strong> Menganalisis hubungan antar akun yang saling terhubung. Dengan menelusuri koneksi dan pola interaksi, sistem dapat mengungkap jaringan pelaku yang saling berkaitan dan mendeteksi potensi penipuan yang lebih luas.
                  </li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header onClick={() => handleToggle("2")}>
                <span>Apa tujuan Deteksi Penipuan?</span>
              </Accordion.Header>
              <Accordion.Body>
                Deteksi penipuan bertujuan untuk mencegah terjadinya kejahatan keuangan sejak dini dengan mengenali tanda-tanda aktivitas mencurigakan sebelum kerugian terjadi. Sistem ini bekerja secara proaktif untuk:
                <ul>
                  <li>Mengidentifikasi risiko sedini mungkin</li>
                  <li>Menghentikan aksi penipuan sebelum berkembang lebih luas</li>
                  <li>Melindungi pengguna dan ekosistem dari potensi kerugian</li>
                </ul>
                Dengan pendekatan yang berbasis data dan analisis mendalam, Deteksi penipuan memungkinkan tim keamanan mengambil langkah cepat dan tepat untuk meminimalkan dampak, bahkan sebelum pelaku menjalankan aksinya secara penuh.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header onClick={() => handleToggle("3")}>
                <span>Apa tujuan Fraud Detection?</span>
              </Accordion.Header>
              <Accordion.Body>
                Fraud Detection bertujuan untuk mengidentifikasi dan mencegah aktivitas penipuan yang dapat merugikan pengguna atau sistem. Dengan teknologi canggih, sistem ini mampu mendeteksi pola mencurigakan dan memberikan solusi yang efektif untuk mengurangi risiko.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </section>
    <Footer />
    </>
 
  );
}
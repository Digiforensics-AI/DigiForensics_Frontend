import React from "react";
import TitleDescription from "./components/TitleDescription";
import Result from "../../assets/result.png";
import "./style/feature.css";
import { Col, Row } from "react-bootstrap";
import PolaHubungan from "../../assets/pola_hubungan.png";
import MataDigital from "../../assets/mata_digital.png";
import Identifikasi from "../../assets/identifikasi.png";
import Wawasan from "../../assets/wawasan.png";
import Otomatisasi from "../../assets/otomatisasi.png";
import Pencegahan from "../../assets/pencegahan.png";





import NavComponents from "../../global/NavComponents";
import Footer from "../../global/Footer";
export default function Feature() {
  return (
    <>
      <NavComponents />
      <section id="features">
        <TitleDescription
          title="Amankan Keuangan Anda Tetap Terlindungi dari Penipuan"
          description="Optimalkan keamanan finansial Anda dengan teknologi andal untuk mencegah penipuan"
        />
        <section id="fraud-detection">
          <h4>Deteksi Penipuan</h4>
          <p>
            Mencegah risiko penipuan keaungan dengan pemantauan cerdas terhadap
            aktivitas mencurigakan secara real-time, sebelum menjadi ancaman
            nyata.
          </p>
          <div className="d-flex justify-content-center">
            <img src={Result} className="img-fluid " alt="" />
          </div>
        </section>
        <section id="technology-integration">
          <h1 className="text-center mt-5"  id="title-integration">
            Teknologi Utama yang Diintegrasikan
          </h1>
          <Features
            isImageLeft={false}
            className="features-pola-hubungan mt-5"
            title="Pola Hubungan"
            description="Menggali keterkaitan tersembunyi untuk memahami dinamika data secara lebih mendalam.
Fitur ini dirancang untuk membantu kamu mengenali pola hubungan antar elemen dalam data, sehingga koneksi-koneksi penting yang sebelumnya tidak terlihat menjadi lebih jelas. Dengan memahami pola ini, kamu dapat mengambil keputusan yang lebih terarah dan strategis berdasarkan wawasan yang akurat.
"
            image={PolaHubungan}
          />
          <Features
            className="mata-digital mt-5"
            isImageLeft={true}
            title="Mata Digital untuk Informasi Publik"
            description="Menggali keterkaitan tersembunyi untuk memahami dinamika data secara lebih mendalam.
Memantau dan merangkum konten publik dari berbagai sumber untuk menyajikan informasi yang relevan secara real-time. Teknologi ini memungkinkan sistem untuk membaca dan memahami berbagai jenis informasi dari internet, seperti berita, opini publik, dan percakapan di media sosial. Dengan begitu, kamu tidak hanya mendapatkan informasi terbaru, tetapi juga konteks dan pola dari berbagai peristiwa yang sedang berkembang."
            image={MataDigital}
          />
          <Features
            isImageLeft={false}
            className="identifikasi-nomor-telepon mt-5"
            title="Identifikasi Nomor Telepon"
            description="Menggali keterkaitan tersembunyi untuk memahami dinamika data secara lebih mendalam.
Mengetahui identitas di balik setiap nomor telepon untuk meningkatkan keamanan dan kenyamanan.
Fitur ini membantu kamu mengenali siapa yang mencoba menghubungi. Dengan deteksi cerdas terhadap nomor yang tidak dikenal, kamu bisa lebih waspada terhadap potensi penipuan, sekaligus menjaga interaksi komunikasi tetap aman dan efisien.
"
            image={Identifikasi}
          />
        </section>
      
      </section>
  <section id="security" className="mt-5">
          <h1>Tingkatkan keamanan keuangan Anda dan kurangi potensi risiko dengan fitur pelacakan penipuan cerdas dari kami. Pantau aktivitas mencurigakan secara real-time dan cegah penipuan sebelum terjadi semua dalam satu sistem yang efisien dan mudah digunakan.</h1>
          <Row>
            <Col lg="4" >
              <img src={Pencegahan} className="img-fluid" alt="" />
              <h3>Pencegahan Risiko Proaktif</h3>
              <p>Identifikasi ancaman lebih awal dan cegah penipuan sebelum menimbulkan kerugian. Sistem kami secara aktif memantau dan menganalisis aktivitas mencurigakan secara real-time.</p>
            </Col>
            <Col lg="4" className="">
               <img src={Otomatisasi} className="img-fluid" alt="" />
              <h3>Otomatisasi</h3>
              <p>Hemat waktu dan sumber daya dengan automasi tugas berulang, seperti kategorisasi transaksi, pelacakan anomali, dan pelaporan keuangan yang terstruktur.</p>
            </Col>
            <Col lg="4" className="">
                <img src={Wawasan} className="img-fluid" alt="" />
              <h3>Wawasan yang Relevan dan Mudah Dipahami</h3>
              <p>Tampilkan informasi penting secara ringkas dan visual, membantu tim Anda membuat keputusan yang cepat dan berbasis data.</p>
            </Col>
          </Row>
        </section>
      <Footer />
    </>
  );
}
function Features({ isImageLeft, image, title, description, className }) {
  return isImageLeft ? (
    <Row className={className}>
      <Col lg="5">
        <img src={image} className="img-fluid" alt="" />
      </Col>
      <Col lg="7">
        <h1 className="mt-5">{title}</h1>
        <p>{description}</p>
      </Col>
    </Row>
  ) : (
    <Row className={className}>
      <Col lg="7">
        <h1 className="mt-5">{title}</h1>
        <p>{description}</p>
      </Col>
      <Col lg="5">
        <img src={image} className="img-fluid" alt="" />
      </Col>
    </Row>
  );
}

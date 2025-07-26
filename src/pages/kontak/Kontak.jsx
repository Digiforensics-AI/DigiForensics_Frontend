import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Title from './components/TitleDescription'
import "./style/kontak.css";
import NavComponents from "../../global/NavComponents";
import Footer from "../../global/Footer";
import EmailIcon from "../../assets/Email.png"; 
export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendWhatsApp = () => {
    const { nama, email, subjek, pesan } = formData;
    const whatsappMessage = `Nama: ${nama}\nEmail: ${email}\nSubjek: ${subjek}\nPesan: ${pesan}`;
    const whatsappURL = `https://wa.me/6281234567890?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <>
      <NavComponents />
    <section className="kontak">
      <Row>
        <Col md={6} className="kontak-info">
          <h2>Kontak Kami</h2>
          <h3>Kami ingin mendengar kabar dari Anda</h3>
          <p>
            Jika Anda memiliki pertanyaan terkait aplikasi keuangan kami, jangan
            ragu untuk menghubungi kami.
          </p>
           <p>
            <img
              src={EmailIcon}
              alt="Email Icon"
              className="email-icon me-2"
            />
            info@gmail.com
          </p>
        </Col>
        <Col md={6} className="kontak-form">
          <Form>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Masukkan nama Anda"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email Anda"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="subjek">
              <Form.Label>Subjek</Form.Label>
              <Form.Select
                name="subjek"
                value={formData.subjek}
                onChange={handleChange}
                required
              >
                <option value="">Pilih subjek pesan</option>
                <option value="Pertanyaan">Pertanyaan</option>
                <option value="Keluhan">Keluhan</option>
                <option value="Saran">Saran</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="pesan">
              <Form.Label>Pesan</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Tulis pesan Anda di sini..."
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              className="w-100"
              onClick={handleSendWhatsApp}
            >
              Kirim via WhatsApp
            </Button>
          </Form>
        </Col>
      </Row>
      
    </section>
    <Footer />
    </>
  );
}

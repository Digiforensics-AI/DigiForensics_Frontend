import React, { useRef, useState } from "react";
import axios from "axios";
import { Form, Button, Spinner } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";
import NavComponents from "../../global/NavComponents";
import Footer from "../../global/Footer";
import "./style/fraud.css";
import { v4 as uuidv4 } from "uuid";
import { setDoc } from "@junobuild/core";
import { useNavigate } from "react-router-dom";

export default function Fraud() {
  const fileInputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();
  // State untuk form
  const [formData, setFormData] = useState({
    nomor_telepon: "",
    nomor_rekening: "",
    akun_media_sosial: "",
    link_website: "",
    unggahan_terkait: "",
    kronologi: "",
    
  });

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading state to true
    const payload = {
      ...formData,
      "image_path": uploadedImage || "",
    };

    try {
      const response = await axios.post(
        "https://4e9bd5e7fe1a.ngrok-free.app/deteksi_penipuan",
        payload
      );
      console.log("Response:", response.data);
      alert("Data berhasil dikirim!");

      // Send data to Junobuild collection
      const myId = uuidv4(); // Generate a unique document key
      await setDoc({
        collection: "fraud",
        doc: {
          key: myId,
          data: {

            result : response.data,
            laporan : payload,
          },
        },
      });
      navigate("/result-fraud", {
    state: {
      result: response.data,
      input: payload,
    },
  });
      console.log("Data successfully saved to Junobuild!");
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan saat mengirim data.");
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  const renderFormGroup = (label, name, type = "text", hint) => (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={formData[name]}
        placeholder={hint}
        onChange={handleInputChange}
      />
    </Form.Group>
  );

  return (
    <>
      <NavComponents />
      <section className="fraud">
        <h1 className="text-center mb-4">Deteksi Penipuan</h1>
        <p className="text-center">
          Anda dapat mengisi satu atau lebih informasi yang tersedia, seperti
          nomor telepon, akun media sosial, link website, atau isi pesan
          terkait. <br /> Sistem akan tetap memproses meskipun hanya satu data
          yang dimasukkan.
        </p>
      <section id="data-terlapor" className="mt-4">
  <h5 className="mb-3">Data Diri Anda (Pelapor)</h5>
 {renderFormGroup("Nama Terlapor", "pelapor", "text","muna212@gmail.com")}

      </section>
        <section id="data-terlapor" className="mt-4">
          <h5 className="mb-3">Data Terlapor (Penipu)</h5>
          <Form>
            {renderFormGroup("Nomor Telepon", "nomor_telepon","text", "08589316421111")}
            {renderFormGroup("Nomor Rekening", "nomor_rekening", "text" ,"553121312")}
            {renderFormGroup("Akun Media Sosial", "akun_media_sosial", "url", "https://www.facebook.com/xyz")}
            {renderFormGroup("Link Website", "link_website", "url", "https://menang-hadiah-motorhonda")}
            {renderFormGroup("Unggahan Terkait", "unggahan_terkait", "textarea", `Kami mendeteksi login dari perangkat baru ke akun Anda. Untuk keamanan, silakan verifikasi bahwa ini adalah Anda:
👉 Klik link berikut untuk verifikasi : https://akun-google-login.verif-update-info.net
Jika tidak, akun Anda akan dinonaktifkan dalam 24 jam.
Terima kasih, Tim Keamanan Akun`)}
            {renderFormGroup("Kronologi", "kronologi", "textarea", `Saya menerima email yang mengaku dari pihak bank, mereka minta saya klik link dan isi OTP. Setelah itu uang saya langsung hilang 5 juta dari rekening. Emailnya dari alamat: cs.bankkita@gmail.com`)}

            <Form.Group>
              <Form.Label>Upload Gambar</Form.Label>
              <div>
                <Form.Text className="text-primary mb-3">
                  File upload berupa jpg, png, jpeg
                </Form.Text>
                <Button
                  variant="outline-primary"
                  className="w-100 text-start"
                  onClick={handleFileUploadClick}
                >
                  <FaCloudUploadAlt className="me-2" />
                  Unggah Gambar
                </Button>
              </div>
              <Form.Control
                type="file"
                accept=".jpg,.jpeg,.png"
                className="w-100 file-input"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </Form.Group>

            {uploadedImage && (
              <div className="mt-3 text-center">
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
              </div>
            )}

            <div className="text-center mt-4">
              <Button
                variant="primary"
                className="w-50"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner
                      animation="border"
                      size="sm"
                      className="me-2"
                    />
                    Loading...
                  </>
                ) : (
                  "Cek"
                )}
              </Button>
            </div>
          </Form>
        </section>
      </section>
      <Footer />
    </>
  );
}
import { Link } from "react-router";
import Title from "./components/TitleDescription";
import CustomButton from "./components/CustomButton";
import Video_Protect from "../../assets/Videos/Video_Protect.mp4";
import { useEffect, useState } from "react";
import "./Beranda.css";
import Logo from "../../assets/logo.png";
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavComponents from "../../global/NavComponents";
import Footer from "../../global/Footer";
export default function Beranda() {
  return (
    <>
      <NavComponents />

      <div id="content" className="flex-shrink-0 ">
        <div className="d-flex flex-column align-items-center w-100 justify-content-center text-center">
    <video 
  src={Video_Protect} 
  autoPlay 
  style={{ borderRadius: "10px", overflow: "hidden" }} 
  loop 
  muted 
  width={304} 
  height={304} 
/>
          <Title
            title="Karena Perlindungan adalah hak semua orang.
Deteksi cerdas dalam satu platform."
            description="Dengan platform kami, Anda dapat menyederhanakan proses pemantauan risiko secara menyeluruh. Semua terpusat dalam satu tempat dari deteksi penipuan, kejanggalan data, hingga pemantauan aktivitas ilegal. Pantau setiap ancaman, kelola respons, dan tingkatkan efisiensi perlindungan Anda."
          />
          <div>
            <CustomButton
              className="btn btn-primary me-lg-3 mt-3 mb-3"
              name="Deteksi Penipuan"
              to="/fraud"
            />
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}




import { Link } from "react-router";
import Title from "./components/TitleDescription";
import CustomButton from "./components/CustomButton";
import Video_Protect from "../../../assets/Videos/Video_Protect.mp4";
import { useEffect, useState } from "react";
import "./AdminBeranda.css";
import Logo from "../../../assets/logo.png";
import { Button, Col, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NavComponents from "../../../global/NavComponents";
import Footer from "../../../global/Footer";
import NavComponentsAdmin from "../../../global/NavComponents copy";
export default function AdminBeranda() {
  return (
    <>
      <NavComponentsAdmin />

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
            title="Perlindungan Digital Terintegrasi untuk Institusi Strategis.
Deteksi ancaman cerdas, satu solusi menyeluruh."
            description="Dengan platform ini, institusi Anda dapat mengintegrasikan pemantauan risiko secara real-time dalam satu ekosistem. Solusi kami memfasilitasi deteksi penipuan, anomali data, dan aktivitas ilegal secara proaktif. Dukung kebijakan pengawasan, tingkatkan respons terhadap ancaman digital, dan optimalkan efisiensi operasional dengan satu platform berbasis AI yang aman dan dapat diandalkan." />
          <div>
            <div className="d-flex">
              <CustomButton
                className="btn btn-primary me-lg-3 mt-3 mb-3"
                name="Deteksi Fraud"
                to="https://dashboard-fraud.vercel.app/"
              />
              <CustomButton
                className="btn btn-dark mt-3 mb-3"
                name="Deteksi Judol"
                to="https://judol-detection-digitim.vercel.app/"
              />
            </div>
           
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}




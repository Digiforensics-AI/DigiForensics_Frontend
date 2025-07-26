import { Col, Row } from "react-bootstrap";
import Logo from "../assets/logo.png";
import './footer.css';
export default function Footer() { return (
    <footer className="footer  ">
      <div className="footer-top">

      <Row>
        <Col lg={3}>
          <div className="d-flex align-items-center">
            <img src={Logo} width={40} height={40} className="me-2" />
            <span className="mb-0 fw-semibold">DigiForensics AI</span>
          </div>
        </Col>

        <Col lg={3}>
          <h5>Halaman</h5>
          <ol className="list-unstyled">
            <li>
              <a href="/" className="text-dark text-decoration-none">
                Beranda
              </a>
            </li>
            <li>
              <a href="/feature" className="text-dark text-decoration-none">
                Fitur
              </a>
            </li>
            <li>
              <a href="/kontak" className="text-dark text-decoration-none">
                Kontak
              </a>
            </li>
            <li>
              <a href="/faq" className="text-dark text-decoration-none">
                FAQ's
              </a>
            </li>
          </ol>
        </Col>
        <Col lg={3}>
          <h5>Admin</h5>
          <ol className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                404
              </a>
            </li>
            
          </ol>
        </Col>
         <Col lg={3}>
          <h5>Sosial Media</h5>
          <ol className="list-unstyled">
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-dark text-decoration-none">
               Instagram
              </a>
            </li>
          </ol>
        </Col>
      </Row>
      </div>
      <p>2025 All rights reserved by DigiForensic AI.</p>
    </footer>
  );
}
 
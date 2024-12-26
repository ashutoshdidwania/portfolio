import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Jatin_Sharma_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const onDocLoad = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const goToNextPage = () => {
    if (currentPage < numPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={pdf}
            className="d-flex justify-content-center"
            onLoadSuccess={onDocLoad}
          >
            <Page
              key={`page_${currentPage}`}
              pageNumber={currentPage}
              scale={width > 786 ? 1.7 : 0.6}
            />
          </Document>
        </Row>
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "2.5rem",
          }}
        >
          <Button
            variant="primary"
            onClick={goToPrevPage}
            style={{ maxWidth: "250px", marginRight: "16px" }}
            disabled={currentPage === 1}
          >
            Previous Page
          </Button>
          <Button
            variant="primary"
            onClick={goToNextPage}
            style={{ maxWidth: "250px" }}
            disabled={currentPage === numPages}
          >
            Next Page
          </Button>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;

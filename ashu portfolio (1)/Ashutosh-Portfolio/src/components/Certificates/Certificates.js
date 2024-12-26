import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertiCard from "./CertiCard";
import Particle from "../Particle";
import pfds from "../../Assets/Projects/pfds.jpg";
import tensor1 from "../../Assets/Projects/tensor1.png";
import tensor2 from "../../Assets/Projects/tensor2.png";
import tensor3 from "../../Assets/Projects/tensor3.png";
import udemy from "../../Assets/Projects/udemy1.png";

function Certificates() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certificates </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few certificates I've earned recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        
          {/* new code */}
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={pfds}
              isBlog={false}
              title="Data Science with Python"
              description="Fetching information from various sources and analyzing it to get a clear understanding of how an organization performs.
               Analyzing data using analytical, statistical, and programmable skills. Generating robust models after analyzing business problems."
              ghLink="https://drive.google.com/file/d/1k0pRVjQ1Z_kugMdSIylC8i00n6z3N-as/view?usp=sharing"

            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={tensor1}
              isBlog={false}
              title="Introduction to TensorFlow for AI, ML and DL"
              description="Part of specialization of DeepLearning.AI TensorFlow Developer Professional Certificate. Using convolutions to improve 
              neural networks, training a neural network for a computer vision application."                           
              ghLink="https://www.coursera.org/account/accomplishments/certificate/NXGS28JPN4B4"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={tensor2}
              isBlog={false}
              title="Convolutional Neural Networks in TensorFlow"
              description="Part of specialization of DeepLearning.AI TensorFlow Developer Professional Certificate. Used convolutions with large
               datasets and also implemented image augmentation, dropout, regularization, and transfer learning."                           
              ghLink="https://www.coursera.org/account/accomplishments/certificate/TKEVGENQ8W5Q"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={tensor3}
              isBlog={false}
              title="Natural Language Processing in TensorFlow"
              description="Part of specialization of DeepLearning.AI TensorFlow Developer Professional Certificate. Used NLP with different 
              datasets and also implemented tokenizer, pad-sequences and many more."                           
              ghLink="https://www.coursera.org/account/accomplishments/certificate/7FZXFBA5XRCD"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertiCard
              imgPath={udemy}
              isBlog={false}
              title="Machine Learning A-Z™: AI, Python & R"
              description="Building powerful Machine Learning models and deciding which Machine Learning model to choose for each type of problem.
               Handling specific topics like Reinforcement Learning, NLP, and Deep Learning."                           
              ghLink="https://www.udemy.com/certificate/UC-c92a5d4c-424b-46b5-ae97-d592f1da66f3/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Certificates;

import { Col } from "react-bootstrap";
import { FaPills, FaMicroscope, FaSyringe, FaFlask, FaBandAid } from "react-icons/fa";
import { GiMedicines, GiMicroscopeLens, GiPotionBall, GiSyringe } from "react-icons/gi";
import { SiGooglecloud, SiTensorflow } from "react-icons/si";

function Techstack() {
  return (
    <>
      <div className="tech-stack-container">
        <Col xs={4} md={2} className="tech-icons">
          <p>Receite medicamentos</p>
          <FaPills />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <p>Acompanhe exames</p>
          <FaMicroscope />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <p>Cuide dos seus pacientes</p>
          <FaBandAid />
        </Col>
      </div>
    </>
  );
}

export default Techstack;

import React, { useState, useEffect } from "react";

import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {
  const [fullYear, setFullYear] = useState();

  useEffect(() => {
    setFullYear(new Date().getFullYear());
  }, [fullYear]);

  return (
    <Navbar fixed="bottom" bg="light" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div>
            Please visit again.Thank you!!
          </div>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
